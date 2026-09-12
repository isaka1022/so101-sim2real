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
from lerobot_env_so101.policy import (
    BLOCK_POS_SLICE,
    DEFAULT_ACTION_SCALE,
    EE_POS_SLICE,
    ENV_ID,
    GRIPPER_POSE_INDEX,
    OBS_DIM,
    flatten_observation,
)

SEED = 0
# Enough steps to move the arm off HOME and leave it in motion, so qpos and
# qvel hold distinct nonzero values and swapping the two blocks is detectable.
WARMUP_STEPS = 5


def test_obs_field_names_match_the_environment_layout():
    """Pin each named field to the physical quantity it claims to be.

    OBS_FIELD_NAMES is the contract the ONNX metadata publishes and the source
    of EE_POS_SLICE and friends. Reordering the environment's own
    concatenation in get_robot_state would leave the names pointing at the
    wrong quantities, which yields plausible actions rather than an error.
    """
    env = gym.make(
        ENV_ID, image_obs=False, random_block_position=True, action_scale=DEFAULT_ACTION_SCALE
    ).unwrapped
    obs, _ = env.reset(seed=SEED)

    for _ in range(WARMUP_STEPS):
        obs, *_ = env.step(np.array([0.6, -0.4, 0.5, 1.0], dtype=np.float32))

    flat = flatten_observation(obs)
    assert flat.shape == (OBS_DIM,)

    arm_qpos = env._data.qpos[env._arm_dof_ids]
    arm_qvel = env._data.qvel[env._arm_dof_ids]
    # Guards the guard: identical or all-zero halves would make the qpos/qvel
    # assertions below pass under a swap.
    assert np.any(arm_qpos != 0.0) and np.any(arm_qvel != 0.0)
    assert not np.allclose(arm_qpos, arm_qvel)

    np.testing.assert_allclose(flat[:5], arm_qpos, atol=1e-6)
    np.testing.assert_allclose(flat[5:10], arm_qvel, atol=1e-6)
    assert flat[GRIPPER_POSE_INDEX] == pytest.approx(float(env.get_gripper_pose()[0]))
    np.testing.assert_allclose(
        flat[EE_POS_SLICE], env._data.site_xpos[env._ee_site_id], atol=1e-6
    )
    np.testing.assert_allclose(flat[BLOCK_POS_SLICE], env._data.body("block").xpos, atol=1e-6)

    env.close()


if __name__ == "__main__":
    raise SystemExit(pytest.main([__file__, "-q"]))
