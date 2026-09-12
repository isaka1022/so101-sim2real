#!/usr/bin/env python
"""Export a trained reach-and-close checkpoint to ONNX for the browser viewer.

    python sim/export_onnx.py sim/data/bc_reach_close.pt

Also refreshes ``web/assets/policies/manifest.json``, which the viewer reads to
discover available policies. ``success_rate`` is left null here and filled in by
``sim/eval_reachclose_policy.py --update-manifest``.
"""

import argparse
import json
from pathlib import Path

from lerobot_env_so101.policy import ACTION_DIM, OBS_DIM
from lerobot_env_so101.policy.bc_model import load_checkpoint
from lerobot_env_so101.policy.onnx_export import export_onnx

REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_CHECKPOINT = Path(__file__).parent / "data" / "bc_reach_close.pt"
DEFAULT_OUT = REPO_ROOT / "web" / "assets" / "policies" / "reach_close.onnx"
POLICY_ID = "reach-close"
POLICY_NAME = "Reach and close (BC)"


def write_manifest(manifest_path: Path, onnx_path: Path, action_scale: float) -> None:
    """Upsert this policy's entry, preserving any other entries already listed."""
    entries = []
    if manifest_path.exists():
        entries = [e for e in json.loads(manifest_path.read_text()) if e.get("id") != POLICY_ID]

    entries.append(
        {
            "id": POLICY_ID,
            "name": POLICY_NAME,
            "file": onnx_path.name,
            "action_scale": action_scale,
            "obs_dim": OBS_DIM,
            "action_dim": ACTION_DIM,
            "success_rate": None,
        }
    )
    manifest_path.write_text(json.dumps(entries, indent=2) + "\n")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("checkpoint", type=Path, nargs="?", default=DEFAULT_CHECKPOINT)
    parser.add_argument("--out", type=Path, default=DEFAULT_OUT)
    args = parser.parse_args()

    model, metadata = load_checkpoint(args.checkpoint)
    missing = {"action_scale", "env_version", "train_commit"} - metadata.keys()
    if missing:
        raise SystemExit(
            f"{args.checkpoint} predates the provenance metadata (missing {sorted(missing)}); "
            "retrain with sim/train_bc.py"
        )

    action_scale = float(metadata["action_scale"])
    out_path = export_onnx(
        model, args.out, action_scale, metadata["env_version"], metadata["train_commit"]
    )
    manifest_path = out_path.parent / "manifest.json"
    write_manifest(manifest_path, out_path, action_scale)

    print(f"trained for {metadata.get('epochs')} epochs, val loss {metadata.get('val_loss')}")
    print(
        f"provenance: action_scale={action_scale} env_version={metadata['env_version']} "
        f"train_commit={metadata['train_commit']}"
    )
    print(f"saved {out_path} ({out_path.stat().st_size} bytes)")
    print(f"saved {manifest_path}")


if __name__ == "__main__":
    main()
