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
from lerobot_env_so101 import gripper
from lerobot_env_so101.ik_control import solve_ik
from lerobot_env_so101.mujoco_env import _IK_DAMPING, _IK_ITERATIONS
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


def test_action_scale_scales_position_deltas():
    """The IK target must advance by scale * delta per step.

    The end-effector state itself is rate-limited by IK tracking, so the
    contract is asserted on the accumulated target, not on the resulting
    motion.
    """

    def target_travel_x(scale: float) -> float:
        env = gym.make(ENV_ID, action_scale=scale).unwrapped
        env.reset(seed=SEED)
        start = env._target_ee_pos.copy()
        for _ in range(2):
            env.step(np.array([0.04, 0.0, 0.0, 0.0], dtype=np.float32))
        end = env._target_ee_pos.copy()
        env.close()
        return float(end[0] - start[0])

    full = target_travel_x(1.0)
    half = target_travel_x(0.5)
    assert full == pytest.approx(2 * 0.04)
    assert half == pytest.approx(2 * 0.04 * 0.5)


def test_ctrl_receives_target_joint_angles_not_torques():
    """The arm actuators are `<position>`: ctrl is a target angle, not a torque."""
    env = gym.make(ENV_ID, image_obs=False).unwrapped
    env.reset(seed=SEED)
    model, data = env._model, env._data

    action = np.array([0.3, -0.2, 0.1, 0.0], dtype=np.float32)
    x, y, z, _ = action
    delta = np.asarray([x, y, z]) * env._action_scale
    target_pos = np.clip(
        env._target_ee_pos + delta, env._cartesian_bounds[0], env._cartesian_bounds[1]
    )

    expected_q = solve_ik(
        model=model,
        data=data,
        site_id=env._ee_site_id,
        dof_ids=env._arm_dof_ids,
        target_pos=target_pos,
        ik_damping=_IK_DAMPING,
        ik_iterations=_IK_ITERATIONS,
    )

    env.step(action)

    ctrl = data.ctrl[env._arm_ctrl_ids].copy()
    np.testing.assert_allclose(ctrl, expected_q, atol=1e-4)

    for ctrl_id, value in zip(env._arm_ctrl_ids, ctrl, strict=True):
        low, high = model.actuator_ctrlrange[ctrl_id]
        assert low <= value <= high, f"ctrl {value} outside ctrlrange [{low}, {high}]"

    env.close()


def test_action_scale_must_be_positive():
    with pytest.raises(ValueError, match="action_scale"):
        gym.make(ENV_ID, action_scale=0.0)


def test_normalized_to_ctrl_endpoints_monotonic_and_clipped():
    ctrlrange = (-0.17453, 1.74533)
    lo, hi = ctrlrange
    closed_ctrl = ctrlrange[0] if gripper.GRIPPER_CLOSED_AT_CTRL_LOW else ctrlrange[1]
    open_ctrl = ctrlrange[1] if gripper.GRIPPER_CLOSED_AT_CTRL_LOW else ctrlrange[0]

    assert gripper.normalized_to_ctrl(0.0, ctrlrange) == pytest.approx(closed_ctrl)
    assert gripper.normalized_to_ctrl(1.0, ctrlrange) == pytest.approx(open_ctrl)

    # Monotonic between the endpoints.
    low_side = gripper.normalized_to_ctrl(0.25, ctrlrange)
    high_side = gripper.normalized_to_ctrl(0.75, ctrlrange)
    if gripper.GRIPPER_CLOSED_AT_CTRL_LOW:
        assert low_side < high_side
    else:
        assert low_side > high_side

    # Out-of-range input is clipped rather than extrapolated.
    assert gripper.normalized_to_ctrl(-10.0, ctrlrange) == pytest.approx(closed_ctrl)
    assert gripper.normalized_to_ctrl(10.0, ctrlrange) == pytest.approx(open_ctrl)

    # ctrl_to_normalized is the inverse over the valid range.
    for norm in (0.0, 0.1, 0.5, 0.9, 1.0):
        ctrl = gripper.normalized_to_ctrl(norm, ctrlrange)
        assert gripper.ctrl_to_normalized(ctrl, ctrlrange) == pytest.approx(norm)

    assert lo < hi  # sanity: fixture ctrlrange is well-formed


def test_gripper_absolute_maps_endpoints_to_ctrlrange():
    """grasp=0/1 must set ctrl to the model's closed/open end, not increment it."""
    env = gym.make(ENV_ID, image_obs=False).unwrapped
    env.reset(seed=SEED)
    lo, hi = env._model.actuator("gripper").ctrlrange
    closed_ctrl = lo if gripper.GRIPPER_CLOSED_AT_CTRL_LOW else hi
    open_ctrl = hi if gripper.GRIPPER_CLOSED_AT_CTRL_LOW else lo

    env.step(np.array([0.0, 0.0, 0.0, 0.0], dtype=np.float32))
    assert env._data.ctrl[env._gripper_ctrl_id] == pytest.approx(closed_ctrl, abs=1e-4)

    env.step(np.array([0.0, 0.0, 0.0, 1.0], dtype=np.float32))
    assert env._data.ctrl[env._gripper_ctrl_id] == pytest.approx(open_ctrl, abs=1e-4)

    # Absolute target, not an increment: repeating grasp=1.0 must not overshoot
    # past the open end (a delta implementation would clip here too, but for
    # the wrong reason: accumulation, not a fresh absolute write each step).
    env.step(np.array([0.0, 0.0, 0.0, 1.0], dtype=np.float32))
    assert env._data.ctrl[env._gripper_ctrl_id] == pytest.approx(open_ctrl, abs=1e-4)

    # Back to closed in a single step confirms it is not accumulating.
    env.step(np.array([0.0, 0.0, 0.0, 0.0], dtype=np.float32))
    assert env._data.ctrl[env._gripper_ctrl_id] == pytest.approx(closed_ctrl, abs=1e-4)

    env.close()


def test_gripper_action_space_bounds_are_zero_to_one():
    env = gym.make(ENV_ID)
    assert env.action_space.low[3] == pytest.approx(0.0)
    assert env.action_space.high[3] == pytest.approx(1.0)
    assert env.action_space.shape == (4,)
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
