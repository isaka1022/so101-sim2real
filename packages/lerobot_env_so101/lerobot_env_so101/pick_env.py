#!/usr/bin/env python

# Copyright 2024 The HuggingFace Inc. team. All rights reserved.
# Copyright 2026 Amane INOUE.
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

"""SO-101 pick-cube task.

Ported from lohpaul9/gym-hil (Apache-2.0, `SO-101` branch,
https://github.com/huggingface/gym-hil/pull/36), authored by Paul Loh
(github.com/lohpaul9).
"""

from typing import Any, Dict, Literal, Tuple

import mujoco
import numpy as np
from gymnasium import spaces

from lerobot_env_so101.mujoco_env import (
    CARTESIAN_BOUNDS,
    HOME_POSITION,
    GymRenderingSpec,
    SO101GymEnv,
)

_SAMPLING_BOUNDS = np.asarray([[0.2, -0.1], [0.4, 0.1]])
_FIXED_BLOCK_XY = np.asarray([0.3, 0.0])
_BLOCK_OUT_OF_BOUNDS_MARGIN = 0.05
_LIFT_SUCCESS_HEIGHT = 0.1
_SUCCESS_DISTANCE = 0.05
_DENSE_REWARD_CLOSE_WEIGHT = 0.3
_DENSE_REWARD_LIFT_WEIGHT = 0.7
_DENSE_REWARD_CLOSE_SHARPNESS = 20.0


class SO101PickCubeGymEnv(SO101GymEnv):
    """Environment for an SO-101 robot picking up a cube."""

    def __init__(
        self,
        seed: int = 0,
        control_dt: float = 0.1,
        physics_dt: float = 0.002,
        render_spec: GymRenderingSpec = GymRenderingSpec(),  # noqa: B008
        render_mode: Literal["rgb_array", "human"] = "rgb_array",
        image_obs: bool = False,
        reward_type: str = "sparse",
        random_block_position: bool = False,
        action_scale: float = 1.0,
    ):
        self.reward_type = reward_type

        super().__init__(
            seed=seed,
            control_dt=control_dt,
            physics_dt=physics_dt,
            render_spec=render_spec,
            render_mode=render_mode,
            image_obs=image_obs,
            home_position=HOME_POSITION,
            cartesian_bounds=CARTESIAN_BOUNDS,
            action_scale=action_scale,
        )

        self._block_z = self._model.geom("block").size[2]
        self._random_block_position = random_block_position

        agent_dim = self.get_robot_state().shape[0]
        agent_box = spaces.Box(-np.inf, np.inf, (agent_dim,), dtype=np.float32)
        env_box = spaces.Box(-np.inf, np.inf, (3,), dtype=np.float32)

        if self.image_obs:
            self.observation_space = spaces.Dict(
                {
                    "pixels": spaces.Dict(
                        {
                            "front": spaces.Box(
                                0,
                                255,
                                (self._render_specs.height, self._render_specs.width, 3),
                                dtype=np.uint8,
                            ),
                        }
                    ),
                    "agent_pos": agent_box,
                }
            )
        else:
            self.observation_space = spaces.Dict(
                {
                    "agent_pos": agent_box,
                    "environment_state": env_box,
                }
            )

    def reset(self, seed=None, **kwargs) -> Tuple[Dict[str, np.ndarray], Dict[str, Any]]:
        """Reset the environment."""
        super().reset(seed=seed)

        mujoco.mj_resetData(self._model, self._data)
        self.reset_robot()

        if self._random_block_position:
            block_xy = self.np_random.uniform(*_SAMPLING_BOUNDS)
        else:
            block_xy = _FIXED_BLOCK_XY
        self._data.jnt("block").qpos[:3] = (*block_xy, self._block_z)
        mujoco.mj_forward(self._model, self._data)

        self._z_init = self._data.sensor("block_pos").data[2]
        self._z_success = self._z_init + _LIFT_SUCCESS_HEIGHT

        obs = self._compute_observation()
        return obs, {}

    def step(self, action: np.ndarray) -> Tuple[Dict[str, np.ndarray], float, bool, bool, Dict[str, Any]]:
        """Take a step in the environment."""
        self.apply_action(action)

        obs = self._compute_observation()
        rew = self._compute_reward()
        success = self._is_success()

        block_pos = self._data.sensor("block_pos").data
        exceeded_bounds = np.any(
            block_pos[:2] < (_SAMPLING_BOUNDS[0] - _BLOCK_OUT_OF_BOUNDS_MARGIN)
        ) or np.any(block_pos[:2] > (_SAMPLING_BOUNDS[1] + _BLOCK_OUT_OF_BOUNDS_MARGIN))

        terminated = bool(success or exceeded_bounds)

        return obs, rew, terminated, False, {"succeed": success}

    def _compute_observation(self) -> dict:
        """Compute the current observation."""
        robot_state = self.get_robot_state().astype(np.float32)
        block_pos = self._data.sensor("block_pos").data.astype(np.float32)

        if self.image_obs:
            observation = {
                "pixels": {"front": self.render()},
                "agent_pos": robot_state,
            }
        else:
            observation = {
                "agent_pos": robot_state,
                "environment_state": block_pos,
            }

        return observation

    def _compute_reward(self) -> float:
        """Compute reward based on current state."""
        block_pos = self._data.sensor("block_pos").data

        if self.reward_type == "dense":
            ee_pos = self._data.sensor("so101/ee_pos").data
            dist = np.linalg.norm(block_pos - ee_pos)
            r_close = np.exp(-_DENSE_REWARD_CLOSE_SHARPNESS * dist)
            r_lift = (block_pos[2] - self._z_init) / (self._z_success - self._z_init)
            r_lift = np.clip(r_lift, 0.0, 1.0)
            return _DENSE_REWARD_CLOSE_WEIGHT * r_close + _DENSE_REWARD_LIFT_WEIGHT * r_lift
        else:
            return float(self._is_success())

    def _is_success(self) -> bool:
        """Check that the block is lifted *and* still held near the gripper.

        The proximity term is what separates a grasp from a block knocked
        upward by a collision; without it a policy is rewarded for flicking.
        """
        block_pos = self._data.sensor("block_pos").data
        ee_pos = self._data.sensor("so101/ee_pos").data
        dist = np.linalg.norm(block_pos - ee_pos)
        lift = block_pos[2] - self._z_init
        # bool() because the numpy comparisons return np.bool_, which leaks into
        # info["succeed"] and breaks callers that serialise it.
        return bool(dist < _SUCCESS_DISTANCE and lift > _LIFT_SUCCESS_HEIGHT)
