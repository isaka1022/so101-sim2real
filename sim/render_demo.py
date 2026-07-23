#!/usr/bin/env python
"""Render a scripted reach-and-grasp demo of SO101PickCube-v0 to a GIF.

The motion is a hand-written controller (not a trained policy): it drives the
end effector toward the block using the native 4-dim ``[dx, dy, dz, grasp]``
action, then closes the gripper. Used to produce the animation in the README.

    python sim/render_demo.py docs/media/so101_pick_cube.gif
"""
import sys

import gymnasium as gym
import mujoco
import numpy as np
from PIL import Image

import lerobot_env_so101  # noqa: F401  registers the env

WIDTH, HEIGHT, FPS = 640, 480, 12


def main(out_path: str) -> None:
    env = gym.make("lerobot_env_so101/SO101PickCube-v0", action_scale=0.05).unwrapped
    env.reset(seed=3)
    model, data = env._model, env._data
    model.vis.global_.offwidth, model.vis.global_.offheight = WIDTH, HEIGHT
    renderer = mujoco.Renderer(model, height=HEIGHT, width=WIDTH)

    cam = mujoco.MjvCamera()
    cam.lookat[:] = [0.22, 0.0, 0.08]
    cam.distance, cam.azimuth, cam.elevation = 0.72, 140, -22

    frames = []

    def reach(steps: int, grasp: float, gain: float, clip: float) -> None:
        for _ in range(steps):
            ee = data.sensor("so101/ee_pos").data
            block = data.sensor("block_pos").data
            target = block + np.array([0.0, 0.0, 0.01])
            delta = np.clip((target - ee) * gain, -clip, clip)
            env.step(np.array([delta[0], delta[1], delta[2], grasp], dtype=np.float32))
            renderer.update_scene(data, camera=cam)
            frames.append(renderer.render().copy())

    reach(steps=30, grasp=-1.0, gain=6.0, clip=1.0)  # descend, gripper open
    reach(steps=12, grasp=1.0, gain=4.0, clip=0.4)  # close, hold position

    renderer.close()
    env.close()

    small = [
        np.asarray(Image.fromarray(f).resize((WIDTH // 2, HEIGHT // 2), Image.LANCZOS))
        for f in frames
    ]
    import imageio.v3 as iio

    iio.imwrite(out_path, small, duration=1000 / FPS, loop=0)
    print(f"saved {out_path}: {len(small)} frames @ {WIDTH // 2}x{HEIGHT // 2}")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "docs/media/so101_pick_cube.gif")
