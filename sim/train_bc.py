#!/usr/bin/env python
"""Train the reach-and-close behaviour-cloning policy on scripted demonstrations.

    python sim/train_bc.py sim/data/reach_close_demos.npz
"""

import argparse
import subprocess
from importlib.metadata import PackageNotFoundError, version
from pathlib import Path

import numpy as np
import torch
from torch import nn
from torch.utils.data import DataLoader, TensorDataset

from lerobot_env_so101.policy import ACTION_DIM, OBS_DIM
from lerobot_env_so101.policy.bc_model import ReachClosePolicy, save_checkpoint

REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUT = Path(__file__).parent / "data" / "bc_reach_close.pt"
VAL_FRACTION = 0.1
LEARNING_RATE = 1e-3
LOG_EVERY = 20
UNKNOWN = "unknown"


def env_version() -> str:
    try:
        return version("lerobot_env_so101")
    except PackageNotFoundError:
        return UNKNOWN


def git_commit() -> str:
    """Short HEAD of this repository, for provenance in the checkpoint."""
    try:
        return subprocess.run(
            ["git", "rev-parse", "--short", "HEAD"],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            check=True,
        ).stdout.strip()
    except (OSError, subprocess.CalledProcessError):
        return UNKNOWN


def split_by_episode(episode_ends: np.ndarray, val_fraction: float, rng: np.random.Generator):
    """Split step indices so no episode straddles the train/val boundary.

    Consecutive steps within an episode are near-duplicates; splitting by step
    would leak the validation states into training and flatter the val loss.
    """
    starts = np.concatenate([[0], episode_ends[:-1]])
    order = rng.permutation(len(episode_ends))
    n_val = max(1, int(round(len(episode_ends) * val_fraction)))
    val_episodes = set(order[:n_val].tolist())

    train_idx, val_idx = [], []
    for episode, (start, end) in enumerate(zip(starts, episode_ends, strict=True)):
        (val_idx if episode in val_episodes else train_idx).extend(range(int(start), int(end)))
    return np.asarray(train_idx), np.asarray(val_idx)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("dataset", type=Path)
    parser.add_argument("--epochs", type=int, default=200)
    parser.add_argument("--batch-size", type=int, default=256)
    parser.add_argument("--seed", type=int, default=0)
    parser.add_argument("--out", type=Path, default=DEFAULT_OUT)
    args = parser.parse_args()

    torch.manual_seed(args.seed)
    rng = np.random.default_rng(args.seed)

    data = np.load(args.dataset)
    observations = data["observations"].astype(np.float32)
    actions = data["actions"].astype(np.float32)
    action_scale = float(data["action_scale"])
    assert observations.shape[1] == OBS_DIM and actions.shape[1] == ACTION_DIM

    train_idx, val_idx = split_by_episode(data["episode_ends"], VAL_FRACTION, rng)
    print(
        f"{len(observations)} steps: {len(train_idx)} train / {len(val_idx)} val "
        f"(split over {len(data['episode_ends'])} episodes)"
    )

    obs_mean = observations[train_idx].mean(axis=0)
    obs_std = observations[train_idx].std(axis=0)

    model = ReachClosePolicy(obs_mean, obs_std)
    optimizer = torch.optim.Adam(model.parameters(), lr=LEARNING_RATE)
    loss_fn = nn.MSELoss()

    obs_tensor = torch.from_numpy(observations)
    act_tensor = torch.from_numpy(actions)
    loader = DataLoader(
        TensorDataset(obs_tensor[train_idx], act_tensor[train_idx]),
        batch_size=args.batch_size,
        shuffle=True,
    )
    val_obs, val_act = obs_tensor[val_idx], act_tensor[val_idx]

    train_loss = val_loss = float("nan")
    for epoch in range(1, args.epochs + 1):
        model.train()
        total, count = 0.0, 0
        for batch_obs, batch_act in loader:
            optimizer.zero_grad()
            loss = loss_fn(model(batch_obs), batch_act)
            loss.backward()
            optimizer.step()
            total += loss.item() * len(batch_obs)
            count += len(batch_obs)
        train_loss = total / count

        model.eval()
        with torch.no_grad():
            val_loss = loss_fn(model(val_obs), val_act).item()

        if epoch % LOG_EVERY == 0 or epoch == 1:
            print(f"epoch {epoch:4d}  train {train_loss:.6f}  val {val_loss:.6f}")

    args.out.parent.mkdir(parents=True, exist_ok=True)
    save_checkpoint(
        model,
        args.out,
        {
            "dataset": str(args.dataset),
            "action_scale": action_scale,
            "env_version": env_version(),
            "train_commit": git_commit(),
            "epochs": args.epochs,
            "batch_size": args.batch_size,
            "seed": args.seed,
            "train_loss": train_loss,
            "val_loss": val_loss,
        },
    )
    print(f"saved {args.out}")


if __name__ == "__main__":
    main()
