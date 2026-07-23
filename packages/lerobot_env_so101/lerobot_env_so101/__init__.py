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

"""lerobot_env_so101: a standalone SO-101 pick-cube MuJoCo gymnasium environment.

SO-101 assets and control code ported from lohpaul9/gym-hil (Apache-2.0,
`SO-101` branch, https://github.com/huggingface/gym-hil/pull/36), authored by
Paul Loh (github.com/lohpaul9). See README.md for the full attribution and
list of changes from the upstream port.
"""

import importlib.util

import gymnasium as gym

from lerobot_env_so101.mujoco_env import GymRenderingSpec, MujocoGymEnv, SO101GymEnv
from lerobot_env_so101.pick_env import SO101PickCubeGymEnv
from lerobot_env_so101.wrappers import SevenDofToFourDofAdapter

__all__ = [
    "GymRenderingSpec",
    "MujocoGymEnv",
    "SO101GymEnv",
    "SO101PickCubeGymEnv",
    "SevenDofToFourDofAdapter",
]

gym.register(
    id="lerobot_env_so101/SO101PickCube-v0",
    entry_point="lerobot_env_so101.pick_env:SO101PickCubeGymEnv",
    max_episode_steps=100,
)

# lerobot's plugin discovery imports this package by name and expects the
# EnvConfig subclass to register itself here. lerobot depends on torch, so this
# import stays optional.
if importlib.util.find_spec("lerobot") is not None:
    from lerobot_env_so101 import configuration_so101 as configuration_so101  # noqa: F401
