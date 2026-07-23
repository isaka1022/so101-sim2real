"""Find action dimensions that the environment silently ignores.

Drives each dimension on its own and compares the resulting state against a
zero-action rollout. A dimension that moves nothing is dead: a policy can
learn to depend on it, which quietly corrupts collected demonstrations.
"""

import argparse
import importlib

import gymnasium as gym
import numpy as np

DEFAULT_ENV = "gym_hil/SO101PickCubeBase-v0"
STEPS = 30
SEED = 0
DEAD_THRESHOLD = 1e-9


def rollout(env_id: str, action: np.ndarray) -> np.ndarray:
    env = gym.make(env_id, image_obs=False)
    obs, _ = env.reset(seed=SEED)
    for _ in range(STEPS):
        obs, *_ = env.step(action)
    env.close()
    return np.asarray(obs["agent_pos"], dtype=np.float64)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("env_id", nargs="?", default=DEFAULT_ENV)
    args = parser.parse_args()

    namespace = args.env_id.split("/", 1)[0]
    importlib.import_module(namespace)  # registers the environments

    probe = gym.make(args.env_id, image_obs=False)
    ndim = probe.action_space.shape[0]
    probe.close()

    baseline = rollout(args.env_id, np.zeros(ndim, dtype=np.float32))

    dead = []
    for i in range(ndim):
        action = np.zeros(ndim, dtype=np.float32)
        action[i] = 1.0
        delta = np.abs(rollout(args.env_id, action) - baseline).max()
        alive = delta > DEAD_THRESHOLD
        print(f"  dim {i}: max|Δstate| = {delta:.6g}  {'ok' if alive else 'DEAD'}")
        if not alive:
            dead.append(i)

    print(f"\n{args.env_id}: {len(dead)}/{ndim} dimensions dead", end="")
    print(f" — {dead}" if dead else "")


if __name__ == "__main__":
    main()
