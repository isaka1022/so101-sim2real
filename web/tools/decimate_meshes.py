"""Shrink the package's collision/visual STLs for web delivery.

Run with:  blender --background --python web/tools/decimate_meshes.py
The canonical meshes stay untouched; this writes reduced copies plus a
manifest that CI compares against the sources to catch drift.
"""

import hashlib
import json
import pathlib
import sys

import bpy

REPO = pathlib.Path(__file__).resolve().parents[2]
SRC = REPO / "packages/lerobot_env_so101/lerobot_env_so101/assets/assets"
OUT = REPO / "web/assets/meshes"
MANIFEST = REPO / "web/assets/meshes.manifest.json"

# Keeping 12% of the faces holds the silhouette at the sizes the viewer
# renders while cutting the download by roughly an order of magnitude.
RATIO = 0.12
# Below this face count the decimator costs more shape than it saves bytes.
FLOOR = 800


def reset_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)


def decimate(path: pathlib.Path) -> pathlib.Path:
    reset_scene()
    bpy.ops.wm.stl_import(filepath=str(path))
    obj = bpy.context.selected_objects[0]
    faces = len(obj.data.polygons)

    if faces > FLOOR:
        mod = obj.modifiers.new(name="decimate", type="DECIMATE")
        mod.ratio = max(RATIO, FLOOR / faces)
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.modifier_apply(modifier=mod.name)

    OUT.mkdir(parents=True, exist_ok=True)
    dest = OUT / path.name
    bpy.ops.wm.stl_export(filepath=str(dest), export_selected_objects=False, ascii_format=False)
    return dest


def main():
    if not SRC.is_dir():
        sys.exit(f"source meshes not found: {SRC}")

    manifest = {}
    for src in sorted(SRC.glob("*.stl")):
        dest = decimate(src)
        manifest[src.name] = {
            "source_sha256": hashlib.sha256(src.read_bytes()).hexdigest(),
            "source_bytes": src.stat().st_size,
            "web_bytes": dest.stat().st_size,
        }
        print(f"{src.name}: {src.stat().st_size} -> {dest.stat().st_size}")

    MANIFEST.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    print(f"wrote {MANIFEST}")


main()
