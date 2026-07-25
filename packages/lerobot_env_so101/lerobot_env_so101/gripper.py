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

"""Gripper unit conversion: normalized [0, 1] (0=closed, 1=open) <-> MJCF radian ctrl.

Pure functions only: no MuJoCo objects, no side effects. ``ctrlrange`` is always
passed in by the caller rather than looked up here, so these are trivial to
unit test without a physics model.
"""

import numpy as np

# Whether the physically "closed" jaw position is the low end of the
# actuator's ctrlrange. This is the single switch to flip if a rendering
# check finds the polarity backwards; see the caller for how it is verified.
GRIPPER_CLOSED_AT_CTRL_LOW: bool = False


def normalized_to_ctrl(norm: float, ctrlrange) -> float:
    """Map a normalized gripper command in [0, 1] (0=closed, 1=open) to ctrl radians.

    Out-of-range input is clipped to [0, 1] before mapping.
    """
    norm = np.clip(norm, 0.0, 1.0)
    lo, hi = ctrlrange
    if not GRIPPER_CLOSED_AT_CTRL_LOW:
        norm = 1.0 - norm
    return lo + norm * (hi - lo)


def ctrl_to_normalized(ctrl: float, ctrlrange) -> float:
    """Inverse of ``normalized_to_ctrl``: ctrl radians -> normalized [0, 1]."""
    lo, hi = ctrlrange
    norm = (ctrl - lo) / (hi - lo)
    if not GRIPPER_CLOSED_AT_CTRL_LOW:
        norm = 1.0 - norm
    return norm
