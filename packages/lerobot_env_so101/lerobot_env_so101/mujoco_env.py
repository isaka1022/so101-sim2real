#!/usr/bin/env python

# Copyright 2024 The HuggingFace Inc. team. All rights reserved.
# Copyright 2026 Amane INOUE.
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

"""SO-101 MuJoCo gym environment.

Ported from lohpaul9/gym-hil (Apache-2.0, `SO-101` branch,
https://github.com/huggingface/gym-hil/pull/36), authored by Paul Loh
(github.com/lohpaul9). The Franka/Panda-specific ``FrankaGymEnv`` and the
``RobotGymEnv`` abstract base (which only ever had one concrete
implementation, SO-101) are not carried over; ``SO101GymEnv`` inherits
directly from ``MujocoGymEnv``.
"""

import logging
from dataclasses import dataclass
from pathlib import Path
from typing import Literal, Optional

import gymnasium as gym
import mujoco
import numpy as np
from gymnasium import spaces

from lerobot_env_so101.ik_control import ik_control

_logger = logging.getLogger(__name__)

ASSETS_DIR = Path(__file__).parent / "assets"

_ARM_JOINT_NAMES = ("shoulder_pan", "shoulder_lift", "elbow_flex", "wrist_flex", "wrist_roll")
HOME_POSITION = np.zeros(len(_ARM_JOINT_NAMES), dtype=np.float64)
CARTESIAN_BOUNDS = np.asarray([[0.1, -0.3, 0.0], [0.5, 0.3, 0.4]])
_ZERO_ACTION_TOLERANCE = 1e-6

_IK_JOINT_KP = 500.0
_IK_JOINT_KD = 50.0
_IK_DAMPING = 0.1
_IK_ITERATIONS = 20


@dataclass(frozen=True)
class GymRenderingSpec:
    height: int = 128
    width: int = 128
    camera_id: str | int = -1
    mode: Literal["rgb_array", "human"] = "rgb_array"


class MujocoGymEnv(gym.Env):
    """MujocoEnv with gym interface."""

    def __init__(
        self,
        xml_path: Path,
        seed: int = 0,
        control_dt: float = 0.02,
        physics_dt: float = 0.002,
        render_spec: GymRenderingSpec = GymRenderingSpec(),  # noqa: B008
    ):
        self._model = mujoco.MjModel.from_xml_path(xml_path.as_posix())
        self._model.vis.global_.offwidth = render_spec.width
        self._model.vis.global_.offheight = render_spec.height
        self._data = mujoco.MjData(self._model)
        self._model.opt.timestep = physics_dt
        self._control_dt = control_dt
        self._n_substeps = int(control_dt // physics_dt)
        self._random = np.random.RandomState(seed)
        self._viewer: Optional[mujoco.Renderer] = None
        self._render_specs = render_spec

    def render(self):
        if self._viewer is None:
            self._viewer = mujoco.Renderer(
                model=self._model,
                height=self._render_specs.height,
                width=self._render_specs.width,
            )
        self._viewer.update_scene(self._data, camera=self._render_specs.camera_id)
        return self._viewer.render()

    def close(self) -> None:
        """Release graphics resources if they exist."""
        viewer = self._viewer
        if viewer is None:
            return

        if hasattr(viewer, "close") and callable(viewer.close):
            try:
                viewer.close()
            except Exception:
                # Teardown failures must not mask the caller's own cleanup, but a
                # leaking GL context only shows up as slow growth over a long run.
                _logger.debug("viewer.close() failed", exc_info=True)

        self._viewer = None

    @property
    def model(self) -> mujoco.MjModel:
        return self._model

    @property
    def data(self) -> mujoco.MjData:
        return self._data

    @property
    def control_dt(self) -> float:
        return self._control_dt

    @property
    def physics_dt(self) -> float:
        return self._model.opt.timestep

    @property
    def random_state(self) -> np.random.RandomState:
        return self._random


class SO101GymEnv(MujocoGymEnv):
    """SO-101 pick/place base environment: 4-DOF Cartesian position IK control.

    Base class only: it implements robot control but not ``step()``/``reset()``.
    Instantiate a task subclass such as ``SO101PickCubeGymEnv``.

    Native action space is ``[dx, dy, dz, grasp]``. SO-101's 5-DOF arm cannot
    independently track a 6-DOF Cartesian pose, so the IK controller solves for
    position only and there are no orientation deltas to command. Use
    ``lerobot_env_so101.wrappers.SevenDofToFourDofAdapter`` for teleop/HIL code
    written against the upstream 7-dim convention.

    Action deltas are unscaled metres, inherited from gym-hil's teleoperation
    convention: an action of 1.0 saturates the workspace in a single step. See
    "Known limitations" in the README before training a policy against this.
    """

    # Declared on the class because gymnasium validates render_mode against it
    # at registration time, before any instance exists. render_fps depends on
    # control_dt, so __init__ refines it per instance.
    metadata = {"render_modes": ["human", "rgb_array"], "render_fps": 10}

    def __init__(
        self,
        xml_path: Path | None = None,
        seed: int = 0,
        control_dt: float = 0.02,
        physics_dt: float = 0.002,
        render_spec: GymRenderingSpec = GymRenderingSpec(),  # noqa: B008
        render_mode: Literal["rgb_array", "human"] = "rgb_array",
        image_obs: bool = False,
        home_position: np.ndarray = HOME_POSITION,
        cartesian_bounds: np.ndarray = CARTESIAN_BOUNDS,
    ):
        if xml_path is None:
            xml_path = ASSETS_DIR / "pick_scene.xml"

        self._home_position = home_position
        self._cartesian_bounds = cartesian_bounds

        super().__init__(
            xml_path=xml_path,
            seed=seed,
            control_dt=control_dt,
            physics_dt=physics_dt,
            render_spec=render_spec,
        )

        self.metadata = {
            **self.metadata,
            "render_fps": int(np.round(1.0 / self.control_dt)),
        }
        self.render_mode = render_mode
        self.image_obs = image_obs

        self._arm_dof_ids = np.asarray([self._model.joint(name).id for name in _ARM_JOINT_NAMES])
        self._arm_ctrl_ids = np.asarray([self._model.actuator(name).id for name in _ARM_JOINT_NAMES])
        self._gripper_ctrl_id = self._model.actuator("gripper").id
        self._ee_site_id = self._model.site("gripperframe").id
        self._camera_id = mujoco.mj_name2id(self._model, mujoco.mjtObj.mjOBJ_CAMERA, "front")

        self._target_ee_pos: np.ndarray | None = None
        self._last_action_was_zero = False

        base_obs_space = {
            "agent_pos": spaces.Dict(
                {
                    "tcp_pose": spaces.Box(-np.inf, np.inf, shape=(7,), dtype=np.float32),
                    "tcp_vel": spaces.Box(-np.inf, np.inf, shape=(6,), dtype=np.float32),
                    "gripper_pose": spaces.Box(-1, 1, shape=(1,), dtype=np.float32),
                }
            )
        }
        if self.image_obs:
            self.observation_space = spaces.Dict(
                {
                    **base_obs_space,
                    "pixels": spaces.Dict(
                        {
                            "front": spaces.Box(
                                low=0,
                                high=255,
                                shape=(self._render_specs.height, self._render_specs.width, 3),
                                dtype=np.uint8,
                            ),
                        }
                    ),
                }
            )
        else:
            self.observation_space = spaces.Dict(base_obs_space)

        self.action_space = spaces.Box(
            low=np.asarray([-1.0, -1.0, -1.0, -1.0], dtype=np.float32),
            high=np.asarray([1.0, 1.0, 1.0, 1.0], dtype=np.float32),
            dtype=np.float32,
        )

    def reset_robot(self):
        """Reset the robot to home position."""
        self._data.qpos[self._arm_dof_ids] = self._home_position
        self._data.ctrl[self._arm_ctrl_ids] = 0.0
        mujoco.mj_forward(self._model, self._data)

        ee_pos = self._data.sensor("so101/ee_pos").data
        self._target_ee_pos = ee_pos.copy()
        self._last_action_was_zero = False

    def apply_action(self, action):
        """Apply a native 4-dim action ``[dx, dy, dz, grasp]`` via position IK."""
        x, y, z, grasp_command = action

        delta = np.asarray([x, y, z])
        action_is_zero = np.linalg.norm(delta) < _ZERO_ACTION_TOLERANCE

        # On transition from motion to hold, lock the target to the current position
        # instead of the last accumulated (and possibly overshot) target.
        if action_is_zero and not self._last_action_was_zero:
            self._target_ee_pos = self._data.site_xpos[self._ee_site_id].copy()
        elif not action_is_zero:
            self._target_ee_pos = self._target_ee_pos + delta
        self._last_action_was_zero = action_is_zero

        self._target_ee_pos = np.clip(
            self._target_ee_pos, self._cartesian_bounds[0], self._cartesian_bounds[1]
        )

        gripper_range = self._model.actuator("gripper").ctrlrange
        current_gripper = self._data.ctrl[self._gripper_ctrl_id]
        g_norm = (current_gripper - gripper_range[0]) / (gripper_range[1] - gripper_range[0])
        ng_norm = np.clip(g_norm + grasp_command, 0.0, 1.0)
        self._data.ctrl[self._gripper_ctrl_id] = gripper_range[0] + ng_norm * (
            gripper_range[1] - gripper_range[0]
        )

        for _ in range(self._n_substeps):
            tau = ik_control(
                model=self._model,
                data=self._data,
                site_id=self._ee_site_id,
                dof_ids=self._arm_dof_ids,
                target_pos=self._target_ee_pos,
                joint_kp=_IK_JOINT_KP,
                joint_kd=_IK_JOINT_KD,
                ik_method="levenberg_marquardt",
                ik_damping=_IK_DAMPING,
                ik_iterations=_IK_ITERATIONS,
                gravity_comp=True,
            )
            self._data.ctrl[self._arm_ctrl_ids] = tau
            mujoco.mj_step(self._model, self._data)

    def get_robot_state(self):
        """Get the current state of the robot."""
        ee_pos = self._data.sensor("so101/ee_pos").data
        qpos = self.data.qpos[self._arm_dof_ids].astype(np.float32)
        qvel = self.data.qvel[self._arm_dof_ids].astype(np.float32)
        gripper_pose = self.get_gripper_pose()

        return np.concatenate([qpos, qvel, gripper_pose, ee_pos])

    def get_gripper_pose(self):
        """Get the current pose of the gripper, normalized to [-1, 1]."""
        gripper_range = self._model.actuator("gripper").ctrlrange
        gripper_pos = self._data.ctrl[self._gripper_ctrl_id]
        normalized = 2 * (gripper_pos - gripper_range[0]) / (gripper_range[1] - gripper_range[0]) - 1
        return np.array([normalized], dtype=np.float32)

    def render(self):
        """Render the front camera view.

        The renderer is built on first use: constructing it eagerly would open
        an OpenGL context on every instantiation, which fails on a headless
        host even for state-only training that never renders.
        """
        if self._viewer is None:
            self._viewer = mujoco.Renderer(
                model=self._model,
                height=self._render_specs.height,
                width=self._render_specs.width,
            )
        self._viewer.update_scene(self.data, camera=self._camera_id)
        return self._viewer.render()
