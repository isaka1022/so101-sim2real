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

"""Export a trained ``ReachClosePolicy`` to ONNX for the browser viewer.

Requires the ``train`` extra.
"""

import json
import subprocess
from importlib.metadata import PackageNotFoundError, version
from pathlib import Path

import onnx
import torch

from lerobot_env_so101.policy import OBS_DIM, OBS_FIELD_NAMES
from lerobot_env_so101.policy.bc_model import ReachClosePolicy

INPUT_NAME = "obs"
OUTPUT_NAME = "actions"
OPSET_VERSION = 18


def _env_version() -> str:
    try:
        return version("lerobot_env_so101")
    except PackageNotFoundError:
        return "unknown"


def _git_commit() -> str:
    try:
        return subprocess.run(
            ["git", "rev-parse", "--short", "HEAD"],
            cwd=Path(__file__).resolve().parent,
            capture_output=True,
            text=True,
            check=True,
        ).stdout.strip()
    except (OSError, subprocess.CalledProcessError):
        return "unknown"


def export_onnx(model: ReachClosePolicy, out_path, action_scale: float) -> Path:
    """Write ``model`` to ``out_path`` as ONNX, tagged with the obs layout.

    ``obs_order`` travels with the graph so a consumer cannot silently feed the
    17 fields in the wrong order — the resulting actions would look plausible.
    """
    out_path = Path(out_path)
    out_path.parent.mkdir(parents=True, exist_ok=True)

    model.eval()
    torch.onnx.export(
        model,
        torch.zeros(1, OBS_DIM, dtype=torch.float32),
        out_path.as_posix(),
        opset_version=OPSET_VERSION,
        input_names=[INPUT_NAME],
        output_names=[OUTPUT_NAME],
        dynamo=False,
    )

    graph = onnx.load(out_path.as_posix())
    metadata = {
        "obs_order": json.dumps(list(OBS_FIELD_NAMES)),
        "action_scale": str(action_scale),
        "env_version": _env_version(),
        "train_commit": _git_commit(),
    }
    for key, value in metadata.items():
        entry = graph.metadata_props.add()
        entry.key, entry.value = key, value
    onnx.save(graph, out_path.as_posix())

    return out_path
