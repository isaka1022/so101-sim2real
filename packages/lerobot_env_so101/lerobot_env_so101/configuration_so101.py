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

"""lerobot EnvConfig registration.

Imported for its side effect: lerobot's ``register_third_party_plugins()``
imports this distribution by name and expects the ``@EnvConfig.register_subclass``
decorator to have run. Importing this module without lerobot installed raises
ImportError; ``__init__`` guards the import so the package stays usable as a
plain gymnasium environment.
"""

from dataclasses import dataclass, field

from lerobot.configs import FeatureType, PolicyFeature
from lerobot.envs.configs import EnvConfig
from lerobot.utils.constants import ACTION, OBS_ENV_STATE, OBS_STATE

AGENT_POS_DIM = 14
ENV_STATE_DIM = 3
ACTION_DIM = 4


@EnvConfig.register_subclass("so101")
@dataclass
class SO101Env(EnvConfig):
    """Config for the SO-101 pick-cube environment.

    The action is 4-dim ``[dx, dy, dz, grasp]``. SO-101's arm has 5 DOF and the
    IK controller solves for end-effector position only, so there are no
    orientation deltas to command. See ``wrappers.SevenDofToFourDofAdapter`` to
    drive this env from 7-dim teleop tooling.
    """

    task: str | None = "SO101PickCube-v0"
    fps: int = 10  # matches the env's control_dt of 0.1s
    episode_length: int = 100
    image_obs: bool = False
    render_mode: str = "rgb_array"
    reward_type: str = "sparse"
    random_block_position: bool = False
    features: dict[str, PolicyFeature] = field(
        default_factory=lambda: {
            ACTION: PolicyFeature(type=FeatureType.ACTION, shape=(ACTION_DIM,)),
            "agent_pos": PolicyFeature(type=FeatureType.STATE, shape=(AGENT_POS_DIM,)),
            "environment_state": PolicyFeature(type=FeatureType.ENV, shape=(ENV_STATE_DIM,)),
        }
    )
    features_map: dict[str, str] = field(
        default_factory=lambda: {
            ACTION: ACTION,
            "agent_pos": OBS_STATE,
            "environment_state": OBS_ENV_STATE,
        }
    )

    @property
    def package_name(self) -> str:
        # The base class would derive "gym_so101" from the choice name, which is
        # not this distribution. gym_id is built from this, so it must match the
        # namespace passed to gym.register in __init__.
        return "lerobot_env_so101"

    @property
    def gym_kwargs(self) -> dict:
        return {
            "image_obs": self.image_obs,
            "render_mode": self.render_mode,
            "reward_type": self.reward_type,
            "random_block_position": self.random_block_position,
            "max_episode_steps": self.episode_length,
        }
