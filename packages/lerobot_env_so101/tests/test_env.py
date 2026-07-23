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

import importlib.util

import gymnasium as gym
import mujoco
import numpy as np
import pytest
from gymnasium.utils.env_checker import check_env

import lerobot_env_so101  # noqa: F401  registers the gym env
from lerobot_env_so101.wrappers import SevenDofToFourDofAdapter

ENV_ID = "lerobot_env_so101/SO101PickCube-v0"
SEED = 0
ROLLOUT_STEPS = 30
DEAD_DIM_THRESHOLD = 1e-9


def test_check_env_passes():
    env = gym.make(ENV_ID, image_obs=False).unwrapped
    check_env(env, skip_render_check=True)
    env.close()


def test_action_space_is_native_4dim():
    env = gym.make(ENV_ID)
    assert env.action_space.shape == (4,)
    env.close()


def _rollout(action: np.ndarray) -> np.ndarray:
    env = gym.make(ENV_ID, image_obs=False)
    obs, _ = env.reset(seed=SEED)
    for _ in range(ROLLOUT_STEPS):
        obs, *_ = env.step(action)
    env.close()
    return np.asarray(obs["agent_pos"], dtype=np.float64)


def test_no_dead_action_dims():
    ndim = 4
    baseline = _rollout(np.zeros(ndim, dtype=np.float32))

    for i in range(ndim):
        action = np.zeros(ndim, dtype=np.float32)
        action[i] = 1.0
        delta = np.abs(_rollout(action) - baseline).max()
        assert delta > DEAD_DIM_THRESHOLD, f"action dim {i} had no effect on state"


def test_seven_dof_adapter_discards_rotation_without_affecting_result():
    base_env = gym.make(ENV_ID, image_obs=False)
    with pytest.warns(UserWarning, match="rotation deltas"):
        adapted_env = SevenDofToFourDofAdapter(gym.make(ENV_ID, image_obs=False).unwrapped)

    assert adapted_env.action_space.shape == (7,)

    action_4d = np.array([0.5, -0.3, 0.2, 1.0], dtype=np.float32)
    action_7d_zero_rot = np.array([0.5, -0.3, 0.2, 0.0, 0.0, 0.0, 1.0], dtype=np.float32)
    action_7d_max_rot = np.array([0.5, -0.3, 0.2, 1.0, -1.0, 1.0, 1.0], dtype=np.float32)

    base_env.reset(seed=SEED)
    for _ in range(ROLLOUT_STEPS):
        obs_4d, *_ = base_env.step(action_4d)

    adapted_env.reset(seed=SEED)
    for _ in range(ROLLOUT_STEPS):
        obs_7d_zero, *_ = adapted_env.step(action_7d_zero_rot)

    adapted_env.reset(seed=SEED)
    for _ in range(ROLLOUT_STEPS):
        obs_7d_max, *_ = adapted_env.step(action_7d_max_rot)

    np.testing.assert_allclose(obs_7d_zero["agent_pos"], obs_4d["agent_pos"])
    np.testing.assert_allclose(obs_7d_max["agent_pos"], obs_4d["agent_pos"])

    base_env.close()
    adapted_env.close()


def test_reset_is_deterministic():
    env = gym.make(ENV_ID, image_obs=False)

    obs1, _ = env.reset(seed=SEED)
    obs2, _ = env.reset(seed=SEED)

    np.testing.assert_array_equal(obs1["agent_pos"], obs2["agent_pos"])
    np.testing.assert_array_equal(obs1["environment_state"], obs2["environment_state"])

    env.close()


def test_image_obs_renders_a_frame():
    """Covers the renderer's lazy construction, which state-only tests skip."""
    env = gym.make(ENV_ID, image_obs=True)
    obs, _ = env.reset(seed=SEED)
    obs, *_ = env.step(np.zeros(4, dtype=np.float32))

    assert obs["pixels"]["front"].shape == (128, 128, 3)
    env.close()


def test_lifting_the_block_without_grasping_it_is_not_success():
    """A block that leaves the ground without being held must not count.

    Upstream gym-hil's sparse mode tests height alone, so a block knocked
    upward terminates the episode as a success and a policy can learn to flick
    rather than grasp.
    """
    env = gym.make(ENV_ID, image_obs=False).unwrapped
    env.reset(seed=SEED)

    block_qpos = env._model.jnt_qposadr[env._model.body("block").jntadr[0]]
    env._data.qpos[block_qpos + 2] += 0.20  # lift well past the height threshold
    mujoco.mj_forward(env._model, env._data)

    block_pos = env._data.sensor("block_pos").data
    ee_pos = env._data.sensor("so101/ee_pos").data
    assert np.linalg.norm(block_pos - ee_pos) > 0.05, "gripper unexpectedly near the block"

    assert env._compute_reward() == 0.0
    assert env._is_success() is False
    env.close()


@pytest.mark.skipif(importlib.util.find_spec("lerobot") is None, reason="lerobot not installed")
def test_lerobot_discovers_this_plugin():
    """Guards the distribution name.

    lerobot finds plugins with .startswith("lerobot_env_") on the raw Name from
    package metadata, which keeps whatever pyproject.toml declares. Naming the
    distribution "lerobot-env-so101" builds and installs fine but is never
    discovered, and the dist-info directory is normalized to underscores either
    way, so the mistake is invisible outside this check.
    """
    from lerobot.envs.configs import EnvConfig
    from lerobot.utils.import_utils import register_third_party_plugins

    register_third_party_plugins()

    config = EnvConfig.get_choice_class("so101")()
    assert config.gym_id == ENV_ID


if __name__ == "__main__":
    raise SystemExit(pytest.main([__file__, "-q"]))
