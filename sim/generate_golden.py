#!/usr/bin/env python
"""Record a reference trajectory for the browser viewer's golden test.

The browser reimplements ``apply_action`` in JavaScript (``web/src/ik.js``,
``web/src/controller.js``, ``web/src/observation.js``). This writes the Python
env's own numbers for a fixed seed so ``web/tests/check_golden.mjs`` can prove
the port agrees.

    python sim/generate_golden.py

``obs`` is the vector the controller actually consumed; ``obs_fresh`` is the
same vector recomputed after an explicit ``mj_forward`` at ``qpos_before``.
They differ because ``mj_step`` leaves sensors and site positions one physics
timestep behind ``qpos``, and only ``obs_fresh`` is reproducible from
``qpos_before``/``ctrl_before`` alone — so that is the one the JS test asserts
against.
"""

import argparse
import json
from pathlib import Path

import gymnasium as gym
import mujoco
import numpy as np

import lerobot_env_so101  # noqa: F401  registers the env
from lerobot_env_so101.policy import DEFAULT_ACTION_SCALE, ENV_ID, flatten_observation
from lerobot_env_so101.scripted.reach_close import scripted_reach_close

DEFAULT_OUT = Path(__file__).resolve().parents[1] / "web" / "tests" / "golden.json"
DEFAULT_STEPS = 40
DEFAULT_SEED = 0


def _list(array) -> list:
    return np.asarray(array, dtype=np.float64).ravel().tolist()


def _fresh_observation(env, scratch) -> np.ndarray:
    """``get_robot_state`` + block position with kinematics refreshed at the current qpos.

    Computed on a copy: refreshing ``env.data`` in place would change the
    ``site_xpos`` that the next ``apply_action`` reads, and so the trajectory
    being recorded.
    """
    mujoco.mj_copyData(scratch, env.model, env.data)
    mujoco.mj_forward(env.model, scratch)
    lo, hi = env.model.actuator("gripper").ctrlrange
    gripper_pose = 2 * (scratch.ctrl[env._gripper_ctrl_id] - lo) / (hi - lo) - 1
    return np.concatenate(
        [
            scratch.qpos[env._arm_dof_ids],
            scratch.qvel[env._arm_dof_ids],
            [gripper_pose],
            scratch.sensor("so101/ee_pos").data,
            scratch.sensor("block_pos").data,
        ]
    ).astype(np.float32)


def generate(seed: int, steps: int) -> dict:
    env = gym.make(
        ENV_ID,
        image_obs=False,
        random_block_position=True,
        action_scale=DEFAULT_ACTION_SCALE,
    ).unwrapped

    obs_dict, _ = env.reset(seed=seed)
    flat = flatten_observation(obs_dict)
    scratch = mujoco.MjData(env.model)

    records = []
    for _ in range(steps):
        qpos_before = env.data.qpos.copy()
        qvel_before = env.data.qvel.copy()
        ctrl_before = env.data.ctrl.copy()
        # apply_action's zero-action lock reads this, and mj_step leaves it one
        # physics timestep behind qpos, so it is not derivable from qpos_before.
        ee_site_xpos_before = env.data.site_xpos[env._ee_site_id].copy()
        obs_fresh = _fresh_observation(env, scratch)

        action = scripted_reach_close(flat, action_scale=DEFAULT_ACTION_SCALE)
        obs_dict, _, _, _, _ = env.step(action)
        flat_after = flatten_observation(obs_dict)

        records.append(
            {
                "qpos_before": _list(qpos_before),
                "qvel_before": _list(qvel_before),
                "ctrl_before": _list(ctrl_before),
                "ee_site_xpos_before": _list(ee_site_xpos_before),
                "action": _list(action),
                "target_pos": _list(env._target_ee_pos),
                "target_q": _list(env.data.ctrl[env._arm_ctrl_ids]),
                "ctrl_after": _list(env.data.ctrl),
                "obs": _list(flat),
                "obs_fresh": _list(obs_fresh),
                "qpos_after": _list(env.data.qpos),
                "qvel_after": _list(env.data.qvel),
                "obs_after": _list(flat_after),
            }
        )
        flat = flat_after

    env.close()
    return {
        "seed": seed,
        "action_scale": DEFAULT_ACTION_SCALE,
        "n_substeps": env._n_substeps,
        "physics_dt": float(env.physics_dt),
        "steps": records,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--out", type=Path, default=DEFAULT_OUT)
    parser.add_argument("--seed", type=int, default=DEFAULT_SEED)
    parser.add_argument("--steps", type=int, default=DEFAULT_STEPS)
    args = parser.parse_args()

    golden = generate(args.seed, args.steps)
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(golden, indent=1) + "\n")
    print(f"wrote {args.out} ({len(golden['steps'])} steps, seed {golden['seed']})")


if __name__ == "__main__":
    main()
