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

import gymnasium as gym
import numpy as np
import pytest

import lerobot_env_so101  # noqa: F401  registers the gym env
from lerobot_env_so101.policy import DEFAULT_ACTION_SCALE, ENV_ID, flatten_observation
from lerobot_env_so101.scripted import scripted_reach_close
from lerobot_env_so101.scripted.reach_close import is_reach_close_success

ACTION_SCALE = DEFAULT_ACTION_SCALE
MAX_STEPS = 100


@pytest.mark.parametrize("seed", [0, 7, 21])
def test_scripted_reach_close_reaches_and_closes(seed):
    env = gym.make(
        ENV_ID, image_obs=False, random_block_position=True, action_scale=ACTION_SCALE
    ).unwrapped
    obs, _ = env.reset(seed=seed)

    succeeded = False
    for _ in range(MAX_STEPS):
        action = scripted_reach_close(flatten_observation(obs), ACTION_SCALE)
        obs, _, terminated, truncated, _ = env.step(action)
        succeeded = succeeded or is_reach_close_success(flatten_observation(obs))
        if terminated or truncated:
            break

    env.close()
    assert succeeded, f"scripted controller did not reach and close within {MAX_STEPS} steps"


def test_scripted_reach_close_is_pure_function_of_obs():
    """Behaviour cloning needs the label to depend on the observation alone."""
    obs = np.array(
        [0.1, -0.2, 0.3, 0.0, 0.05, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.32, 0.04, 0.18, 0.3, 0.02, 0.02],
        dtype=np.float32,
    )
    obs_before = obs.copy()

    first = scripted_reach_close(obs, ACTION_SCALE)
    second = scripted_reach_close(obs, ACTION_SCALE)

    np.testing.assert_array_equal(first, second)
    np.testing.assert_array_equal(obs, obs_before)


if __name__ == "__main__":
    raise SystemExit(pytest.main([__file__, "-q"]))
