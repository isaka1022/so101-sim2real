"""Fail when the committed web meshes no longer match the package's meshes.

The viewer ships decimated copies of the package meshes. Nothing stops the two
from drifting apart, so CI runs this: it re-hashes the sources and compares them
against the manifest written when the copies were generated.

    python web/tools/check_mesh_drift.py

Regenerate with `blender --background --python web/tools/decimate_meshes.py`.
"""

import hashlib
import json
import pathlib
import sys

REPO = pathlib.Path(__file__).resolve().parents[2]
SRC = REPO / "packages/lerobot_env_so101/lerobot_env_so101/assets/assets"
OUT = REPO / "web/assets/meshes"
MANIFEST = REPO / "web/assets/meshes.manifest.json"

REGENERATE = "blender --background --python web/tools/decimate_meshes.py"


def main() -> int:
    if not MANIFEST.is_file():
        print(f"missing manifest: {MANIFEST}\nrun: {REGENERATE}")
        return 1

    manifest = json.loads(MANIFEST.read_text())
    sources = {p.name: p for p in SRC.glob("*.stl")}
    problems = []

    for name in sorted(set(manifest) | set(sources)):
        if name not in sources:
            problems.append(f"{name}: in the manifest but no longer in the package")
            continue
        if name not in manifest:
            problems.append(f"{name}: new package mesh, missing from the manifest")
            continue
        digest = hashlib.sha256(sources[name].read_bytes()).hexdigest()
        if digest != manifest[name]["source_sha256"]:
            problems.append(f"{name}: package mesh changed since the web copy was built")
        if not (OUT / name).is_file():
            problems.append(f"{name}: listed in the manifest but web/assets/meshes/{name} is missing")

    if problems:
        print("web meshes are out of date:")
        for problem in problems:
            print(f"  - {problem}")
        print(f"\nrun: {REGENERATE}")
        return 1

    print(f"web meshes match the package ({len(manifest)} files)")
    return 0


sys.exit(main())
