#!/usr/bin/env python

# Copyright 2026 Amane INOUE. All rights reserved.
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

"""Behaviour-cloning policy: observation layout, model, and ONNX export.

``bc_model`` and ``onnx_export`` import torch, so they are not re-exported
here: the layout below must stay importable with only the base dependencies
installed.
"""

from typing import Mapping

import numpy as np

from lerobot_env_so101.mujoco_env import _ARM_JOINT_NAMES

# The registered gym id, used by gym.register in the package __init__ so the
# string is written once.
ENV_ID = "lerobot_env_so101/SO101PickCube-v0"

# Metres per unit position action. The environment's own default is 1.0, which
# is bang-bang over most of the action range; this is the scale the scripted
# controller and the BC policy are calibrated for.
DEFAULT_ACTION_SCALE = 0.025

# Flattening order of the state-only observation: agent_pos (14) then
# environment_state (3). The browser viewer builds its input vector from this
# list, which is why it ships inside the exported ONNX metadata.
OBS_FIELD_NAMES: tuple[str, ...] = (
    *(f"qpos_{name}" for name in _ARM_JOINT_NAMES),
    *(f"qvel_{name}" for name in _ARM_JOINT_NAMES),
    "gripper_pose",
    "ee_x",
    "ee_y",
    "ee_z",
    "block_x",
    "block_y",
    "block_z",
)
OBS_DIM = len(OBS_FIELD_NAMES)
ACTION_DIM = 4


def _span(first: str, last: str) -> slice:
    return slice(OBS_FIELD_NAMES.index(first), OBS_FIELD_NAMES.index(last) + 1)


# Derived rather than written out so reordering OBS_FIELD_NAMES cannot leave a
# consumer reading the wrong fields.
GRIPPER_POSE_INDEX = OBS_FIELD_NAMES.index("gripper_pose")
EE_POS_SLICE = _span("ee_x", "ee_z")
BLOCK_POS_SLICE = _span("block_x", "block_z")


def flatten_observation(obs: Mapping[str, np.ndarray]) -> np.ndarray:
    """Flatten a state-only ``SO101PickCube-v0`` observation into ``OBS_FIELD_NAMES`` order.

    Raises:
        KeyError: If ``obs`` came from an ``image_obs=True`` environment, which
            replaces ``environment_state`` with a camera view.
    """
    flat = np.concatenate([obs["agent_pos"], obs["environment_state"]]).astype(np.float32)
    if flat.shape != (OBS_DIM,):
        raise ValueError(f"expected a {OBS_DIM}-dim observation, got {flat.shape}")
    return flat


__all__ = [
    "ACTION_DIM",
    "BLOCK_POS_SLICE",
    "DEFAULT_ACTION_SCALE",
    "EE_POS_SLICE",
    "ENV_ID",
    "GRIPPER_POSE_INDEX",
    "OBS_DIM",
    "OBS_FIELD_NAMES",
    "flatten_observation",
]
