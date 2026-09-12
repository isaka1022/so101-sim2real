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

"""MLP behaviour-cloning policy for the scripted reach-and-close task.

Requires the ``train`` extra. Normalization statistics are registered buffers
and the output squashing is part of ``forward``, so the exported ONNX graph
takes a raw observation and emits a directly executable action — the browser
viewer needs no preprocessing table of its own.
"""

from typing import Any, Dict

import numpy as np
import torch
from torch import nn

from lerobot_env_so101.policy import ACTION_DIM, OBS_DIM

HIDDEN_DIM = 128
# Guards against dividing by the std of a constant observation dimension.
_STD_FLOOR = 1e-6


class ReachClosePolicy(nn.Module):
    """Observation -> ``[dx, dy, dz, grasp]``, already in the action space's range."""

    def __init__(self, obs_mean: np.ndarray, obs_std: np.ndarray, hidden_dim: int = HIDDEN_DIM):
        super().__init__()
        self.register_buffer("obs_mean", torch.as_tensor(obs_mean, dtype=torch.float32))
        self.register_buffer(
            "obs_std", torch.clamp(torch.as_tensor(obs_std, dtype=torch.float32), min=_STD_FLOOR)
        )
        self.net = nn.Sequential(
            nn.Linear(OBS_DIM, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, ACTION_DIM),
        )

    def forward(self, obs: torch.Tensor) -> torch.Tensor:
        raw = self.net((obs - self.obs_mean) / self.obs_std)
        return torch.cat([torch.tanh(raw[..., :3]), torch.sigmoid(raw[..., 3:])], dim=-1)


def save_checkpoint(model: ReachClosePolicy, path, metadata: Dict[str, Any]) -> None:
    """Write weights, normalization statistics, and training metadata."""
    torch.save(
        {
            "state_dict": model.state_dict(),
            "obs_mean": model.obs_mean.detach().cpu().numpy(),
            "obs_std": model.obs_std.detach().cpu().numpy(),
            "metadata": metadata,
        },
        path,
    )


def load_checkpoint(path) -> tuple[ReachClosePolicy, Dict[str, Any]]:
    """Rebuild a trained policy in eval mode, with its training metadata."""
    checkpoint = torch.load(path, map_location="cpu", weights_only=False)
    model = ReachClosePolicy(checkpoint["obs_mean"], checkpoint["obs_std"])
    model.load_state_dict(checkpoint["state_dict"])
    model.eval()
    return model, checkpoint.get("metadata", {})
