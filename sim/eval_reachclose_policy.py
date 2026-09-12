#!/usr/bin/env python
"""Evaluate an exported reach-and-close ONNX policy in closed loop.

Runs the ONNX graph through onnxruntime, exactly as the browser viewer does, so
the measured success rate covers the export as well as the training.

    python sim/eval_reachclose_policy.py web/assets/policies/reach_close.onnx --episodes 100
"""

import argparse
import json
from pathlib import Path

import gymnasium as gym
import numpy as np
import onnxruntime as ort

import lerobot_env_so101  # noqa: F401  registers the env
from lerobot_env_so101.policy import (
    BLOCK_POS_SLICE,
    EE_POS_SLICE,
    ENV_ID,
    flatten_observation,
)
from lerobot_env_so101.scripted.reach_close import is_reach_close_success

DEFAULT_POLICY = (
    Path(__file__).resolve().parents[1] / "web" / "assets" / "policies" / "reach_close.onnx"
)


def evaluate(policy_path: Path, episodes: int, max_steps: int, seed: int):
    session = ort.InferenceSession(policy_path.as_posix(), providers=["CPUExecutionProvider"])
    input_name = session.get_inputs()[0].name

    # The scale the policy was trained against; evaluating at any other scale
    # silently changes the step size the network's outputs assume.
    exported = session.get_modelmeta().custom_metadata_map
    if "action_scale" not in exported:
        raise SystemExit(
            f"{policy_path} has no action_scale in its ONNX metadata; "
            "re-export it with sim/export_onnx.py"
        )
    action_scale = float(exported["action_scale"])

    env = gym.make(
        ENV_ID, image_obs=False, random_block_position=True, action_scale=action_scale
    ).unwrapped

    successes, final_distances = [], []
    for episode in range(episodes):
        obs, _ = env.reset(seed=seed + episode)
        success = False
        flat = flatten_observation(obs)

        for _ in range(max_steps):
            action = session.run(None, {input_name: flat[None, :]})[0][0]
            obs, _, terminated, truncated, _ = env.step(action.astype(np.float32))
            flat = flatten_observation(obs)
            success = success or is_reach_close_success(flat)
            if terminated or truncated:
                break

        successes.append(success)
        final_distances.append(
            float(np.linalg.norm(flat[EE_POS_SLICE] - flat[BLOCK_POS_SLICE]))
        )

    env.close()
    return np.asarray(successes, dtype=bool), np.asarray(final_distances)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("policy", type=Path, nargs="?", default=DEFAULT_POLICY)
    parser.add_argument("--episodes", type=int, default=100)
    parser.add_argument("--max-steps", type=int, default=100)
    parser.add_argument("--seed", type=int, default=1000)
    parser.add_argument("--update-manifest", action="store_true")
    args = parser.parse_args()

    successes, distances = evaluate(args.policy, args.episodes, args.max_steps, args.seed)
    success_rate = float(successes.mean())

    print(f"episodes: {len(successes)}")
    print(f"success rate: {success_rate:.3f} ({successes.sum()}/{len(successes)})")
    print(f"mean final ee-block distance: {distances.mean():.4f} m")

    if args.update_manifest:
        manifest_path = args.policy.parent / "manifest.json"
        entries = json.loads(manifest_path.read_text())
        matched = [e for e in entries if e.get("file") == args.policy.name]
        if not matched:
            raise SystemExit(
                f"no entry in {manifest_path} has file={args.policy.name!r} "
                f"(found {[e.get('file') for e in entries]}); "
                "re-export with sim/export_onnx.py to create one"
            )

        for entry in matched:
            entry["success_rate"] = round(success_rate, 3)
        manifest_path.write_text(json.dumps(entries, indent=2) + "\n")
        print(f"updated {manifest_path}")


if __name__ == "__main__":
    main()
