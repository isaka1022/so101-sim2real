#!/usr/bin/env python

# Copyright 2026 Amane INOUE. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Scripted pick-and-place controller for ``SO101PickPlace-v0``.

Unlike ``reach_close`` this controller carries state: closing and opening the
jaw take several control steps during which nothing observable changes, so the
phase cannot be recovered from a single observation.
"""

import enum

import numpy as np

from lerobot_env_so101.policy import DEFAULT_ACTION_SCALE
from lerobot_env_so101.scripted.reach_close import GRIPPER_CLOSED, GRIPPER_OPEN

HOVER_HEIGHT = 0.07
LIFT_HEIGHT = 0.06
# The fingertip pads pinch the upper part of the block: the grasp point, which
# is at pad mid-height, stops this far above the block centre.
GRASP_HEIGHT = 0.015
# Height above the table at which a carried block is released.
RELEASE_CLEARANCE = 0.002

GOAL_TOLERANCE = 0.004
# Position action magnitude while the jaws are next to the block, in action
# units; free-space moves use the full range.
CAREFUL_SPEED = 0.4

CLOSE_STEPS = 10
OPEN_STEPS = 8
# Upper bound on control steps spent in one moving phase, so a dropped block
# cannot stall the episode.
PHASE_TIMEOUT_STEPS = 60


class Phase(enum.Enum):
    HOVER = enum.auto()
    DESCEND = enum.auto()
    CLOSE = enum.auto()
    LIFT = enum.auto()
    TRAVERSE = enum.auto()
    LOWER = enum.auto()
    OPEN = enum.auto()
    RETREAT = enum.auto()
    DONE = enum.auto()


_NEXT_PHASE = dict(zip(list(Phase)[:-1], list(Phase)[1:], strict=True))
_HOLD_STEPS = {Phase.CLOSE: CLOSE_STEPS, Phase.OPEN: OPEN_STEPS}
_GRIPPER_COMMAND = {
    Phase.HOVER: GRIPPER_OPEN,
    Phase.DESCEND: GRIPPER_OPEN,
    Phase.CLOSE: GRIPPER_CLOSED,
    Phase.LIFT: GRIPPER_CLOSED,
    Phase.TRAVERSE: GRIPPER_CLOSED,
    Phase.LOWER: GRIPPER_CLOSED,
    Phase.OPEN: GRIPPER_OPEN,
    Phase.RETREAT: GRIPPER_OPEN,
    Phase.DONE: GRIPPER_OPEN,
}
_CAREFUL_PHASES = (Phase.DESCEND, Phase.LIFT, Phase.LOWER)


def phase_target(
    phase: Phase, grasp_pos: np.ndarray, block_pos: np.ndarray, goal_pos: np.ndarray, table_z: float
) -> np.ndarray:
    """Where the grasp point should go in a moving phase.

    While the block is carried the target is the grasp point shifted by the
    block's remaining error, so the block itself is steered to the goal and a
    block that slid in the jaws is still placed accurately.
    """
    lift_z = table_z + GRASP_HEIGHT + LIFT_HEIGHT
    if phase is Phase.HOVER:
        return np.asarray([block_pos[0], block_pos[1], table_z + HOVER_HEIGHT])
    if phase is Phase.DESCEND:
        return np.asarray([block_pos[0], block_pos[1], table_z + GRASP_HEIGHT])
    if phase is Phase.LIFT:
        return np.asarray([grasp_pos[0], grasp_pos[1], lift_z])
    if phase is Phase.TRAVERSE:
        return np.asarray([*(grasp_pos[:2] + goal_pos[:2] - block_pos[:2]), lift_z])
    if phase is Phase.LOWER:
        return grasp_pos + goal_pos - block_pos + np.asarray([0.0, 0.0, RELEASE_CLEARANCE])
    if phase is Phase.RETREAT:
        return np.asarray([grasp_pos[0], grasp_pos[1], table_z + HOVER_HEIGHT])
    raise ValueError(f"{phase} has no position target")


class PickPlaceController:
    """Hover, descend, close, lift, traverse, lower, open, retreat."""

    def __init__(self, action_scale: float = DEFAULT_ACTION_SCALE):
        """Create the controller.

        Args:
            action_scale: The environment's metres per unit position action.
        """
        self._action_scale = action_scale
        self.reset()

    def reset(self) -> None:
        """Return to the first phase. Call at the start of every episode."""
        self._phase = Phase.HOVER
        self._steps_in_phase = 0
        self._table_z: float | None = None

    @property
    def phase(self) -> Phase:
        return self._phase

    @property
    def done(self) -> bool:
        return self._phase is Phase.DONE

    def act(self, grasp_pos: np.ndarray, block_pos: np.ndarray, goal_pos: np.ndarray) -> np.ndarray:
        """Advance the phase if its goal is met and return the next action.

        Args:
            grasp_pos: The point the action moves, ``env.ik_point_pos`` (3,).
            block_pos: Block centre (3,).
            goal_pos: Where the block centre should rest (3,).

        Returns:
            A ``float32`` native ``[dx, dy, dz, grasp]`` action.
        """
        grasp_pos = np.asarray(grasp_pos, dtype=np.float64)
        block_pos = np.asarray(block_pos, dtype=np.float64)
        goal_pos = np.asarray(goal_pos, dtype=np.float64)
        if self._table_z is None:
            self._table_z = float(block_pos[2])

        while not self.done:
            if self._phase in _HOLD_STEPS:
                finished = self._steps_in_phase >= _HOLD_STEPS[self._phase]
                delta = np.zeros(3)
            else:
                error = phase_target(self._phase, grasp_pos, block_pos, goal_pos, self._table_z) - grasp_pos
                finished = (
                    np.linalg.norm(error) < GOAL_TOLERANCE or self._steps_in_phase >= PHASE_TIMEOUT_STEPS
                )
                limit = CAREFUL_SPEED if self._phase in _CAREFUL_PHASES else 1.0
                delta = np.clip(error / self._action_scale, -limit, limit)
            if not finished:
                break
            self._phase = _NEXT_PHASE[self._phase]
            self._steps_in_phase = 0
        else:
            delta = np.zeros(3)

        self._steps_in_phase += 1
        return np.asarray([*delta, _GRIPPER_COMMAND[self._phase]], dtype=np.float32)
