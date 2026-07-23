"""Open a MuJoCo model in the interactive viewer.

Run with plain `python`. `mjpython` hands the real main thread to Cocoa and
runs the interpreter on another one, so the blocking `launch()` ends up
creating its window off the main thread and dies inside _Simulate.
`mjpython` is only for `launch_passive()`.
"""

import argparse
from pathlib import Path

import mujoco
import mujoco.viewer

DEFAULT_SCENE = Path(__file__).parent.parent / "vendor/menagerie/robotstudio_so101/scene.xml"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("scene", nargs="?", type=Path, default=DEFAULT_SCENE)
    args = parser.parse_args()

    model = mujoco.MjModel.from_xml_path(str(args.scene))
    data = mujoco.MjData(model)
    print(f"{args.scene.name}: {model.njnt} joints, {model.nu} actuators")
    mujoco.viewer.launch(model, data)


if __name__ == "__main__":
    main()
