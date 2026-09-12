#!/usr/bin/env python
"""Collect scripted reach-and-close demonstrations for behaviour cloning.

Labels come from the noise-free scripted controller while the executed action
carries Gaussian noise (DART-style): the dataset then covers the states a
slightly-off policy actually visits, labelled with the correct recovery.

    python sim/collect_demos.py --episodes 300
"""

import argparse
from pathlib import Path

import gymnasium as gym
import numpy as np

import lerobot_env_so101  # noqa: F401  registers the env
from lerobot_env_so101.policy import DEFAULT_ACTION_SCALE, ENV_ID, flatten_observation
from lerobot_env_so101.scripted import scripted_reach_close
from lerobot_env_so101.scripted.reach_close import is_reach_close_success

DEFAULT_OUT = Path(__file__).parent / "data" / "reach_close_demos.npz"


def collect(episodes: int, max_steps: int, seed: int, noise_std: float, action_scale: float):
    env = gym.make(
        ENV_ID, image_obs=False, random_block_position=True, action_scale=action_scale
    ).unwrapped
    rng = np.random.default_rng(seed)

    observations, actions, episode_ends, successes = [], [], [], []

    for episode in range(episodes):
        obs, _ = env.reset(seed=seed + episode)
        success = False

        for _ in range(max_steps):
            flat = flatten_observation(obs)
            label = scripted_reach_close(flat, action_scale)
            observations.append(flat)
            actions.append(label)

            executed = label.copy()
            # The close phase relies on an exactly-zero delta to trigger the
            # environment's hold-position lock, so it is executed verbatim.
            if np.any(label[:3] != 0.0):
                executed[:3] = np.clip(label[:3] + rng.normal(0.0, noise_std, 3), -1.0, 1.0)

            obs, _, terminated, truncated, _ = env.step(executed)
            success = success or is_reach_close_success(flatten_observation(obs))
            if terminated or truncated:
                break

        episode_ends.append(len(observations))
        successes.append(success)

    env.close()
    return (
        np.asarray(observations, dtype=np.float32),
        np.asarray(actions, dtype=np.float32),
        np.asarray(episode_ends, dtype=np.int64),
        np.asarray(successes, dtype=bool),
    )


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--episodes", type=int, default=300)
    parser.add_argument("--max-steps", type=int, default=100)
    parser.add_argument("--seed", type=int, default=0)
    parser.add_argument("--noise-std", type=float, default=0.05)
    parser.add_argument("--action-scale", type=float, default=DEFAULT_ACTION_SCALE)
    parser.add_argument("--out", type=Path, default=DEFAULT_OUT)
    args = parser.parse_args()

    observations, actions, episode_ends, successes = collect(
        args.episodes, args.max_steps, args.seed, args.noise_std, args.action_scale
    )

    args.out.parent.mkdir(parents=True, exist_ok=True)
    np.savez_compressed(
        args.out,
        observations=observations,
        actions=actions,
        episode_ends=episode_ends,
        success=successes,
        action_scale=np.float32(args.action_scale),
    )

    print(
        f"saved {args.out}: {len(observations)} steps over {len(episode_ends)} episodes "
        f"(action_scale={args.action_scale})"
    )
    print(f"scripted success rate: {successes.mean():.3f} ({successes.sum()}/{len(successes)})")


if __name__ == "__main__":
    main()
