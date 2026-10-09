#!/usr/bin/env python
"""Render one scripted pick-and-place episode of SO101PickPlace-v0 to a GIF.

The goal is drawn as a green square on the table, the size of the block's
footprint. With ``--stills-dir`` the last frame of the hover, close, lift, and
open phases is also saved as a PNG, which is enough to check by eye that the
block is carried between the jaws.

    python sim/render_pick_place.py /tmp/so101_pick_place.gif --stills-dir /tmp
"""

import argparse
from pathlib import Path

import imageio.v3 as iio
import mujoco
import numpy as np
from PIL import Image

from eval_pick_place import make_env, run_episode
from lerobot_env_so101.policy import DEFAULT_ACTION_SCALE
from lerobot_env_so101.scripted.pick_place import Phase, PickPlaceController

WIDTH, HEIGHT, FPS = 640, 480, 12
STILL_PHASES = {Phase.HOVER: "hover", Phase.CLOSE: "close", Phase.LIFT: "lift", Phase.OPEN: "place"}
GOAL_MARKER_HALF_EXTENTS = np.asarray([0.02, 0.02, 0.0005])
GOAL_MARKER_RGBA = np.asarray([0.2, 0.8, 0.3, 0.6], dtype=np.float32)


def add_goal_marker(scene: mujoco.MjvScene, goal_xy: np.ndarray) -> None:
    """Append a flat square at the goal to an already updated scene."""
    geom = scene.geoms[scene.ngeom]
    mujoco.mjv_initGeom(
        geom,
        mujoco.mjtGeom.mjGEOM_BOX,
        GOAL_MARKER_HALF_EXTENTS,
        np.asarray([goal_xy[0], goal_xy[1], GOAL_MARKER_HALF_EXTENTS[2]]),
        np.eye(3).flatten(),
        GOAL_MARKER_RGBA,
    )
    scene.ngeom += 1


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("out_path", type=Path)
    parser.add_argument("--seed", type=int, default=0)
    parser.add_argument("--stills-dir", type=Path, default=None)
    args = parser.parse_args()

    env = make_env()
    model, data = env.model, env.data
    model.vis.global_.offwidth, model.vis.global_.offheight = WIDTH, HEIGHT
    renderer = mujoco.Renderer(model, height=HEIGHT, width=WIDTH)

    cam = mujoco.MjvCamera()
    # Looking back at the arm from the front, so the two jaws sit left and right of the block.
    cam.lookat[:] = [0.2, 0.0, 0.06]
    cam.distance, cam.azimuth, cam.elevation = 0.5, 205, -20

    frames: list[np.ndarray] = []
    last_frame_of: dict[Phase, int] = {}

    def record(phase: Phase) -> None:
        renderer.update_scene(data, camera=cam)
        add_goal_marker(renderer.scene, env.goal_pos[:2])
        last_frame_of[phase] = len(frames)
        frames.append(renderer.render().copy())

    result = run_episode(env, PickPlaceController(DEFAULT_ACTION_SCALE), args.seed, on_step=record)
    renderer.close()
    env.close()

    small = [
        np.asarray(Image.fromarray(f).resize((WIDTH // 2, HEIGHT // 2), Image.LANCZOS)) for f in frames
    ]
    args.out_path.parent.mkdir(parents=True, exist_ok=True)
    iio.imwrite(args.out_path, small, duration=1000 / FPS, loop=0)
    print(f"saved {args.out_path}: {len(small)} frames @ {WIDTH // 2}x{HEIGHT // 2}")

    if args.stills_dir is not None:
        args.stills_dir.mkdir(parents=True, exist_ok=True)
        for phase, name in STILL_PHASES.items():
            if phase in last_frame_of:
                still_path = args.stills_dir / f"{args.out_path.stem}_{name}.png"
                Image.fromarray(frames[last_frame_of[phase]]).save(still_path)
                print(f"saved {still_path}")

    print(
        f"success={result.success} max_rise={result.max_rise:.3f} m "
        f"goal_distance={result.final_goal_distance:.4f} m held={result.held_steps}/{result.carry_steps}"
    )


if __name__ == "__main__":
    main()
