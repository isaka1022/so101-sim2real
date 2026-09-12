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

"""ONNX export contract. Skipped unless the `train` extra is installed."""

import importlib.util
import json

import numpy as np
import pytest

if any(importlib.util.find_spec(name) is None for name in ("torch", "onnx", "onnxruntime")):
    pytest.skip("train extra not installed", allow_module_level=True)

import onnx  # noqa: E402
import onnxruntime as ort  # noqa: E402
import torch  # noqa: E402

from lerobot_env_so101.policy import (  # noqa: E402
    ACTION_DIM,
    DEFAULT_ACTION_SCALE,
    OBS_DIM,
    OBS_FIELD_NAMES,
)
from lerobot_env_so101.policy.bc_model import ReachClosePolicy  # noqa: E402
from lerobot_env_so101.policy.onnx_export import (  # noqa: E402
    INPUT_NAME,
    OUTPUT_NAME,
    export_onnx,
)

ACTION_SCALE = DEFAULT_ACTION_SCALE
ENV_VERSION = "0.0.0-test"
TRAIN_COMMIT = "deadbee"
EXPECTED_METADATA_KEYS = {"obs_order", "action_scale", "env_version", "train_commit"}


def _untrained_policy() -> ReachClosePolicy:
    torch.manual_seed(0)
    model = ReachClosePolicy(np.zeros(OBS_DIM, np.float32), np.ones(OBS_DIM, np.float32))
    model.eval()
    return model


def test_onnx_io_shape_and_names(tmp_path):
    out = export_onnx(
        _untrained_policy(), tmp_path / "policy.onnx", ACTION_SCALE, ENV_VERSION, TRAIN_COMMIT
    )

    graph = onnx.load(out.as_posix())
    metadata = {entry.key: entry.value for entry in graph.metadata_props}
    assert EXPECTED_METADATA_KEYS <= metadata.keys()
    assert json.loads(metadata["obs_order"]) == list(OBS_FIELD_NAMES)
    assert metadata["action_scale"] == str(ACTION_SCALE)
    assert metadata["env_version"] == ENV_VERSION
    assert metadata["train_commit"] == TRAIN_COMMIT

    session = ort.InferenceSession(out.as_posix(), providers=["CPUExecutionProvider"])
    (model_input,) = session.get_inputs()
    (model_output,) = session.get_outputs()
    assert model_input.name == INPUT_NAME
    assert model_input.shape == [1, OBS_DIM]
    assert model_output.name == OUTPUT_NAME
    assert model_output.shape == [1, ACTION_DIM]


def test_onnx_matches_torch_output(tmp_path):
    model = _untrained_policy()
    out = export_onnx(model, tmp_path / "policy.onnx", ACTION_SCALE, ENV_VERSION, TRAIN_COMMIT)

    rng = np.random.default_rng(0)
    obs = rng.normal(size=(1, OBS_DIM)).astype(np.float32)

    with torch.no_grad():
        expected = model(torch.from_numpy(obs)).numpy()

    session = ort.InferenceSession(out.as_posix(), providers=["CPUExecutionProvider"])
    actual = session.run(None, {INPUT_NAME: obs})[0]

    np.testing.assert_allclose(actual, expected, atol=1e-5)


if __name__ == "__main__":
    raise SystemExit(pytest.main([__file__, "-q"]))
