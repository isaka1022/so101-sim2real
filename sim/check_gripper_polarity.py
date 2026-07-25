#!/usr/bin/env python
"""Polarity check: does grasp=0 physically close the jaw and grasp=1 open it?

Holds the arm still while driving grasp to each extreme, renders a frame per
extreme, and prints the gripper ctrl radians so the mapping can be eyeballed.
"""
import sys

import gymnasium as gym
import mujoco
import numpy as np
from PIL import Image

import lerobot_env_so101  # noqa: F401  registers the env

WIDTH, HEIGHT = 640, 480


def main(out_prefix: str) -> None:
    env = gym.make("lerobot_env_so101/SO101PickCube-v0", action_scale=0.05).unwrapped
    env.reset(seed=3)
    model, data = env._model, env._data
    model.vis.global_.offwidth, model.vis.global_.offheight = WIDTH, HEIGHT
    renderer = mujoco.Renderer(model, height=HEIGHT, width=WIDTH)

    cam = mujoco.MjvCamera()
    cam.distance, cam.azimuth, cam.elevation = 0.18, 90, -35

    gripper_range = model.actuator("gripper").ctrlrange
    gid = env._gripper_ctrl_id
    print(f"gripper ctrlrange = {gripper_range}")

    cam.lookat[:] = data.sensor("so101/ee_pos").data.copy()  # fixed frame, captured once

    for grasp in (0.0, 1.0):
        for _ in range(60):  # arm still, hold grasp to settle
            env.step(np.array([0.0, 0.0, 0.0, grasp], dtype=np.float32))
        renderer.update_scene(data, camera=cam)
        img = renderer.render().copy()
        path = f"{out_prefix}_grasp{int(grasp)}.png"
        Image.fromarray(img).save(path)
        print(f"grasp={grasp}: ctrl={data.ctrl[gid]:.4f} rad  -> saved {path}")

    renderer.close()
    env.close()


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "/tmp/gripper_polarity")
