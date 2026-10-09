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

"""SO-101 pick-and-place task: move the cube onto a goal position on the table."""

from typing import Any, Dict, Literal, Tuple

import mujoco
import numpy as np
from gymnasium import spaces

from lerobot_env_so101.gripper import ctrl_to_normalized
from lerobot_env_so101.mujoco_env import GymRenderingSpec
from lerobot_env_so101.pick_env import SO101PickCubeGymEnv

# Nearer the base than the pick task's sampling box: past x = 0.30 m the wrist
# runs out of travel and the gripper can no longer be held vertical.
_SAMPLING_BOUNDS = np.asarray([[0.15, -0.1], [0.3, 0.1]])
_FIXED_BLOCK_XY = np.asarray([0.25, 0.0])
_FIXED_GOAL_XY = np.asarray([0.20, 0.08])
# A goal closer than this would leave the block overlapping it before any motion.
_MIN_GOAL_DISTANCE = 0.08
_WORKSPACE_XY = np.asarray([[0.08, -0.2], [0.4, 0.2]])

PLACE_SUCCESS_DISTANCE = 0.03
# Rise above the reset height that counts as carried. A block pushed or knocked
# along the table to the goal never gets this high.
_MIN_CARRY_RISE = 0.03
_PLACE_MAX_BLOCK_SPEED = 0.01
_PLACE_OPEN_FRACTION = 0.5


class SO101PickPlaceGymEnv(SO101PickCubeGymEnv):
    """Environment for an SO-101 robot moving a cube to a goal position.

    ``environment_state`` is the block position followed by the goal position.
    Success needs the block to have been lifted off the table earlier in the
    episode, so pushing it to the goal does not count.
    The IK keeps the gripper pointing straight down by default, so the action
    moves the grasp point between the jaws (``ik_point_pos``) rather than the
    ``gripperframe`` site reported in ``agent_pos``.
    """

    def __init__(
        self,
        seed: int = 0,
        control_dt: float = 0.1,
        physics_dt: float = 0.002,
        render_spec: GymRenderingSpec = GymRenderingSpec(),  # noqa: B008
        render_mode: Literal["rgb_array", "human"] = "rgb_array",
        image_obs: bool = False,
        random_block_position: bool = False,
        action_scale: float = 1.0,
        top_down_ik: bool = True,
        jaw_pads: bool = True,
    ):
        """Create the pick-and-place environment.

        Args:
            seed: Seed for the environment's own RNG.
            control_dt: Seconds of simulated time per ``step()`` call.
            physics_dt: MuJoCo integration timestep.
            render_spec: Frame height, width, and camera id used by
                ``render()``.
            render_mode: ``"rgb_array"`` or ``"human"``.
            image_obs: Add a ``pixels.front`` camera view to the observation in
                place of ``environment_state``.
            random_block_position: Randomize the block and goal positions on
                each reset instead of using fixed ones.
            action_scale: Metres per unit of position action. Must be positive.
            top_down_ik: Keep the gripper pointing straight down. Without it the
                jaws cannot straddle the block.
            jaw_pads: Enable the fingertip collision pads. Without them the
                block is pinched at two points and swings out of the jaws.
        """
        super().__init__(
            seed=seed,
            control_dt=control_dt,
            physics_dt=physics_dt,
            render_spec=render_spec,
            render_mode=render_mode,
            image_obs=image_obs,
            reward_type="sparse",
            random_block_position=random_block_position,
            action_scale=action_scale,
            top_down_ik=top_down_ik,
            jaw_pads=jaw_pads,
        )
        self._goal_pos = np.asarray([*_FIXED_GOAL_XY, self._block_z])
        self._block_dof_adr = self._model.joint("block").dofadr[0]
        self._gripper_qpos_adr = self._model.joint("gripper").qposadr[0]
        self._was_carried = False

        if not self.image_obs:
            self.observation_space = spaces.Dict(
                {
                    "agent_pos": self.observation_space["agent_pos"],
                    "environment_state": spaces.Box(-np.inf, np.inf, (6,), dtype=np.float32),
                }
            )

    @property
    def goal_pos(self) -> np.ndarray:
        """Where the block centre should rest, in world coordinates."""
        return self._goal_pos.copy()

    def reset(self, seed=None, **kwargs) -> Tuple[Dict[str, np.ndarray], Dict[str, Any]]:
        """Reset the arm, the block, and the goal."""
        # Skips SO101PickCubeGymEnv.reset, which samples from the pick task's box.
        super(SO101PickCubeGymEnv, self).reset(seed=seed)

        mujoco.mj_resetData(self._model, self._data)
        self.reset_robot()

        if self._random_block_position:
            block_xy = self.np_random.uniform(*_SAMPLING_BOUNDS)
            goal_xy = self.np_random.uniform(*_SAMPLING_BOUNDS)
            while np.linalg.norm(goal_xy - block_xy) < _MIN_GOAL_DISTANCE:
                goal_xy = self.np_random.uniform(*_SAMPLING_BOUNDS)
        else:
            block_xy, goal_xy = _FIXED_BLOCK_XY, _FIXED_GOAL_XY
        self._data.jnt("block").qpos[:3] = (*block_xy, self._block_z)
        self._goal_pos = np.asarray([*goal_xy, self._block_z])
        mujoco.mj_forward(self._model, self._data)

        self._z_init = self._data.sensor("block_pos").data[2]
        self._was_carried = False

        return self._compute_observation(), {}

    def step(self, action: np.ndarray) -> Tuple[Dict[str, np.ndarray], float, bool, bool, Dict[str, Any]]:
        """Take a step in the environment."""
        self.apply_action(action)

        block_pos = self._data.sensor("block_pos").data
        self._was_carried = self._was_carried or bool(block_pos[2] - self._z_init > _MIN_CARRY_RISE)

        obs = self._compute_observation()
        success = self._is_success()

        block_xy = block_pos[:2]
        exceeded_bounds = np.any(block_xy < _WORKSPACE_XY[0]) or np.any(block_xy > _WORKSPACE_XY[1])
        terminated = bool(success or exceeded_bounds)

        return obs, float(success), terminated, False, {"succeed": success}

    def _compute_observation(self) -> dict:
        """Compute the current observation."""
        observation = super()._compute_observation()
        if not self.image_obs:
            observation["environment_state"] = np.concatenate(
                [observation["environment_state"], self._goal_pos]
            ).astype(np.float32)
        return observation

    def _is_success(self) -> bool:
        """Check that the block was carried, rests at the goal, and the jaw has let go.

        The jaw opening is read from the joint, not the command: the command
        flips to open one step before the jaw has physically released the block.
        """
        block_pos = self._data.sensor("block_pos").data
        block_speed = np.linalg.norm(self._data.qvel[self._block_dof_adr : self._block_dof_adr + 3])
        gripper_range = self._model.actuator("gripper").ctrlrange
        opening = ctrl_to_normalized(self._data.qpos[self._gripper_qpos_adr], gripper_range)
        return bool(
            self._was_carried
            and np.linalg.norm(block_pos[:2] - self._goal_pos[:2]) < PLACE_SUCCESS_DISTANCE
            and opening > _PLACE_OPEN_FRACTION
            and block_speed < _PLACE_MAX_BLOCK_SPEED
        )
