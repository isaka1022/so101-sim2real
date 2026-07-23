"""Dump the physical parameters of a MuJoCo model.

Baseline for comparing MJCF values against measured hardware.
"""

import argparse
from pathlib import Path

import mujoco
import numpy as np

DEFAULT_MODEL = Path(__file__).parent.parent / "vendor/menagerie/robotstudio_so101/so101.xml"


def dump(model_path: Path) -> None:
    model = mujoco.MjModel.from_xml_path(str(model_path))

    print(f"model: {model_path.name}")
    print(f"  bodies={model.nbody}  joints={model.njnt}  actuators={model.nu}  dofs={model.nv}")
    print(f"  timestep={model.opt.timestep}  integrator={model.opt.integrator}")

    print("\nbodies (mass / diagonal inertia)")
    for i in range(model.nbody):
        name = mujoco.mj_id2name(model, mujoco.mjtObj.mjOBJ_BODY, i)
        inertia = np.array2string(model.body_inertia[i], precision=6, suppress_small=True)
        print(f"  {name:<24} mass={model.body_mass[i]:.6f}  inertia={inertia}")

    print("\njoints (range / damping / frictionloss / armature / stiffness)")
    for i in range(model.njnt):
        name = mujoco.mj_id2name(model, mujoco.mjtObj.mjOBJ_JOINT, i)
        dof = model.jnt_dofadr[i]
        lo, hi = model.jnt_range[i]
        print(
            f"  {name:<24} range=[{lo:+.4f}, {hi:+.4f}]  "
            f"damping={model.dof_damping[dof]:.6f}  "
            f"friction={model.dof_frictionloss[dof]:.6f}  "
            f"armature={model.dof_armature[dof]:.6f}  "
            f"stiffness={model.jnt_stiffness[i]:.6f}"
        )

    print("\nactuators (gain / bias / ctrlrange / forcerange)")
    for i in range(model.nu):
        name = mujoco.mj_id2name(model, mujoco.mjtObj.mjOBJ_ACTUATOR, i)
        gain = np.array2string(model.actuator_gainprm[i][:3], precision=4, suppress_small=True)
        bias = np.array2string(model.actuator_biasprm[i][:3], precision=4, suppress_small=True)
        ctrl = np.array2string(model.actuator_ctrlrange[i], precision=4, suppress_small=True)
        force = np.array2string(model.actuator_forcerange[i], precision=4, suppress_small=True)
        print(f"  {name:<24} gain={gain}  bias={bias}  ctrl={ctrl}  force={force}")

    print("\ngeom friction (sliding / torsional / rolling)")
    seen = set()
    for i in range(model.ngeom):
        friction = tuple(model.geom_friction[i])
        if friction in seen:
            continue
        seen.add(friction)
        name = mujoco.mj_id2name(model, mujoco.mjtObj.mjOBJ_GEOM, i)
        print(f"  {friction}  (first seen on: {name})")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("model", nargs="?", type=Path, default=DEFAULT_MODEL)
    args = parser.parse_args()
    dump(args.model)


if __name__ == "__main__":
    main()
