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

"""Scripted reach-and-close controller for ``SO101PickCube-v0``.

Reaches the block and closes the gripper on it. This is *not* a pick: the
position-only IK in this package cannot reach a vertical straddling approach
(see "Known limitations" in the package README), so the block is never lifted.

Stateless by construction: the phase is a function of the observed
end-effector and block positions alone, so the same flat observation always
maps to the same action. That is what makes the output usable as a
behaviour-cloning label for a feed-forward network.
"""

import numpy as np

# Flat observation layout: qpos[5], qvel[5], gripper_pose[1], ee_pos[3], block_pos[3].
GRIPPER_POSE_INDEX = 10
EE_POS_SLICE = slice(11, 14)
BLOCK_POS_SLICE = slice(14, 17)

# Reach-and-close outcome. gripper_pose is the gripper ctrl target remapped to
# [-1, 1] with +1 = fully closed; see SO101GymEnv.get_gripper_pose.
SUCCESS_DISTANCE = 0.05
GRIPPER_CLOSED_THRESHOLD = 0.5

# Approach waypoint height above the block centre. Descending only after the
# horizontal error is closed keeps the jaws from dragging the block sideways.
HOVER_HEIGHT = 0.06
XY_ALIGN_TOLERANCE = 0.01

# The fixed jaw contacts the block's top face ~0.027 m above its centre, so the
# descent goal sits just above that: a lower goal is never reached and the
# close phase never triggers.
GRASP_Z_OFFSET = 0.03
GOAL_TOLERANCE = 0.005

GRIPPER_OPEN = 1.0
GRIPPER_CLOSED = 0.0


def scripted_reach_close(obs: np.ndarray, action_scale: float = 0.025) -> np.ndarray:
    """Map a flat 17-dim observation to a native ``[dx, dy, dz, grasp]`` action.

    Args:
        obs: Flat observation, ``agent_pos`` (14) concatenated with
            ``environment_state`` (3).
        action_scale: The environment's metres per unit position action. Used to
            convert the desired metre-space displacement into action units.

    Returns:
        A ``float32`` action. In the close phase the position components are
        exactly zero, which triggers the environment's zero-action lock and
        holds the end effector where it is.
    """
    obs = np.asarray(obs, dtype=np.float64)
    ee_pos = obs[EE_POS_SLICE]
    block_pos = obs[BLOCK_POS_SLICE]

    goal = block_pos + np.asarray([0.0, 0.0, GRASP_Z_OFFSET])
    if np.linalg.norm(ee_pos - goal) < GOAL_TOLERANCE:
        return np.asarray([0.0, 0.0, 0.0, GRIPPER_CLOSED], dtype=np.float32)

    if np.linalg.norm(ee_pos[:2] - block_pos[:2]) > XY_ALIGN_TOLERANCE:
        target = block_pos + np.asarray([0.0, 0.0, HOVER_HEIGHT])
    else:
        target = goal

    delta = np.clip((target - ee_pos) / action_scale, -1.0, 1.0)
    return np.asarray([*delta, GRIPPER_OPEN], dtype=np.float32)


def is_reach_close_success(obs: np.ndarray) -> bool:
    """Whether a flat 17-dim observation shows the gripper closed at the block."""
    obs = np.asarray(obs, dtype=np.float64)
    distance = np.linalg.norm(obs[EE_POS_SLICE] - obs[BLOCK_POS_SLICE])
    return bool(
        distance < SUCCESS_DISTANCE and obs[GRIPPER_POSE_INDEX] > GRIPPER_CLOSED_THRESHOLD
    )
