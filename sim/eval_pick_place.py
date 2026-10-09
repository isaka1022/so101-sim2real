#!/usr/bin/env python
"""Evaluate the scripted pick-and-place controller on SO101PickPlace-v0.

Reports the task's own success flag next to quantities measured from the
simulation state, so a run that trips the flag without carrying the block
(or carries it without tripping the flag) is visible.

    python sim/eval_pick_place.py --episodes 20 --seed 0
"""

import argparse
from dataclasses import dataclass
from typing import Callable

import gymnasium as gym
import numpy as np

import lerobot_env_so101  # noqa: F401  registers the env
from lerobot_env_so101.policy import DEFAULT_ACTION_SCALE, PICK_PLACE_ENV_ID
from lerobot_env_so101.scripted.pick_place import Phase, PickPlaceController

MAX_STEPS = 300
CARRY_PHASES = (Phase.LIFT, Phase.TRAVERSE, Phase.LOWER)
JAW_BODY_NAMES = ("gripper", "moving_jaw_so101_v1")


@dataclass(frozen=True)
class EpisodeResult:
    success: bool
    block_xy: np.ndarray
    goal_xy: np.ndarray
    max_rise: float
    final_goal_distance: float
    carry_steps: int
    held_steps: int
    steps: int


def jaws_touching_block(env) -> set[str]:
    """Names of the jaw bodies that have at least one active contact with the block."""
    model, data = env.model, env.data
    block = model.body("block").id
    jaws = {model.body(name).id: name for name in JAW_BODY_NAMES}
    touching = set()
    for contact in data.contact[: data.ncon]:
        bodies = {int(model.geom_bodyid[contact.geom1]), int(model.geom_bodyid[contact.geom2])}
        if block in bodies:
            touching.update(jaws[b] for b in bodies if b in jaws)
    return touching


def run_episode(
    env,
    controller: PickPlaceController,
    seed: int,
    on_step: Callable[[Phase], None] | None = None,
) -> EpisodeResult:
    """Roll the controller out until the env terminates and measure what the block did.

    ``success`` is the env's flag on the terminating step; an episode that runs
    out of steps or controller phases without terminating is a failure.
    ``on_step`` is called after every environment step with the phase that
    produced the action.
    """
    obs, _ = env.reset(seed=seed)
    controller.reset()
    block_start = obs["environment_state"][:3].copy()
    goal_pos = env.goal_pos

    max_rise, carry_steps, held_steps, success = 0.0, 0, 0, False
    steps, terminated = 0, False
    while steps < MAX_STEPS and not controller.done and not terminated:
        action = controller.act(env.ik_point_pos, obs["environment_state"][:3], goal_pos)
        phase = controller.phase
        obs, _, terminated, _, info = env.step(action)
        steps += 1
        success = terminated and info["succeed"]

        max_rise = max(max_rise, float(obs["environment_state"][2] - block_start[2]))
        if phase in CARRY_PHASES:
            carry_steps += 1
            held_steps += len(jaws_touching_block(env)) == len(JAW_BODY_NAMES)
        if on_step is not None:
            on_step(phase)

    final_xy = obs["environment_state"][:2]
    return EpisodeResult(
        success=bool(success),
        block_xy=block_start[:2],
        goal_xy=goal_pos[:2],
        max_rise=max_rise,
        final_goal_distance=float(np.linalg.norm(final_xy - goal_pos[:2])),
        carry_steps=carry_steps,
        held_steps=held_steps,
        steps=steps,
    )


def make_env(**overrides):
    return gym.make(
        PICK_PLACE_ENV_ID,
        random_block_position=True,
        action_scale=DEFAULT_ACTION_SCALE,
        **overrides,
    ).unwrapped


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--episodes", type=int, default=20)
    parser.add_argument("--seed", type=int, default=0)
    args = parser.parse_args()

    env = make_env()
    controller = PickPlaceController(DEFAULT_ACTION_SCALE)
    results = [run_episode(env, controller, args.seed + episode) for episode in range(args.episodes)]
    env.close()

    print("seed  block_xy         goal_xy          rise_m  goal_dist_m  held/carry  steps  success")
    for episode, r in enumerate(results):
        print(
            f"{args.seed + episode:4d}  ({r.block_xy[0]:.3f},{r.block_xy[1]:+.3f})"
            f"  ({r.goal_xy[0]:.3f},{r.goal_xy[1]:+.3f})  {r.max_rise:6.3f}  {r.final_goal_distance:11.4f}"
            f"  {r.held_steps:4d}/{r.carry_steps:<5d}  {r.steps:5d}  {r.success}"
        )

    successes = np.asarray([r.success for r in results])
    rises = np.asarray([r.max_rise for r in results])
    distances = np.asarray([r.final_goal_distance for r in results])
    held = np.asarray([r.held_steps / max(r.carry_steps, 1) for r in results])
    print(f"episodes: {len(results)}")
    print(f"success rate: {successes.mean():.3f} ({successes.sum()}/{len(successes)})")
    print(f"max block rise (m): min {rises.min():.3f}  median {np.median(rises):.3f}  max {rises.max():.3f}")
    print(
        f"block-goal distance at episode end (m): median {np.median(distances):.4f}  max {distances.max():.4f}"
    )
    print(f"carry steps with both jaws on the block: min {held.min():.2f}  median {np.median(held):.2f}")


if __name__ == "__main__":
    main()
