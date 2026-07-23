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

"""Action-space adapters for lerobot_env_so101 environments."""

import warnings

import gymnasium as gym
import numpy as np
from gymnasium import spaces

SEVEN_DOF_DIM = 7
FOUR_DOF_DIM = 4
# Indices of drx, dry, drz within the 7-dim [dx,dy,dz,drx,dry,drz,grasp] convention.
_DISCARDED_ROTATION_INDICES = (3, 4, 5)
_KEPT_INDICES = [i for i in range(SEVEN_DOF_DIM) if i not in _DISCARDED_ROTATION_INDICES]


class SevenDofToFourDofAdapter(gym.ActionWrapper):
    """Adapts 7-dim Cartesian actions to this package's native 4-dim action space.

    Teleop and HIL tooling built on gym-hil's Panda convention emits 7-dim
    actions ``[dx, dy, dz, drx, dry, drz, grasp]``. SO-101 environments take a
    native 4-dim ``[dx, dy, dz, grasp]``; this wrapper discards the orientation
    deltas (indices 3-5), which the position-only IK controller cannot act on.

    Wrap a native SO101GymEnv-based env to accept 7-dim actions from existing
    teleop/HIL code; new code should prefer the native 4-dim action space.
    """

    def __init__(self, env: gym.Env):
        super().__init__(env)
        # Warn once at construction, not per step: a caller porting 7-dim code
        # otherwise gets an arm that never rotates and no indication why.
        warnings.warn(
            "SevenDofToFourDofAdapter discards the rotation deltas (drx, dry, drz) "
            "of 7-dim actions. SO-101's IK controller solves for end-effector "
            "position only, so rotation commands have no effect.",
            stacklevel=2,
        )
        native_space = env.action_space
        if not isinstance(native_space, spaces.Box) or native_space.shape != (FOUR_DOF_DIM,):
            raise ValueError(
                f"SevenDofToFourDofAdapter expects a wrapped env with a {FOUR_DOF_DIM}-dim "
                f"Box action space, got {native_space}"
            )

        insert_at = (3,) * len(_DISCARDED_ROTATION_INDICES)
        low = np.insert(native_space.low, insert_at, -1.0).astype(np.float32)
        high = np.insert(native_space.high, insert_at, 1.0).astype(np.float32)
        self.action_space = spaces.Box(low=low, high=high, dtype=np.float32)

    def action(self, action: np.ndarray) -> np.ndarray:
        return np.asarray(action, dtype=np.float32)[_KEPT_INDICES]
