# SO-101 assets — provenance

MJCF/URDF and meshes ported from
[lohpaul9/gym-hil `SO-101` branch](https://github.com/lohpaul9/gym-hil/tree/SO-101)
(Apache-2.0), authored by Paul Loh (github.com/lohpaul9).

- Generated with [onshape-to-robot](https://github.com/Rhoban/onshape-to-robot) from a CAD
  model designed in Onshape by [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100)
  (SO-ARM100/SO-101, official hardware source).
- Motor properties for the STS3215 servos (`damping`/`frictionloss`/`armature` in the
  `sts3215` default class) are adapted from the
  [Open Duck Mini project](https://github.com/apirrone/Open_Duck_Mini), **not from measurements
  of the actual SO-101**. This is unverified upstream and unverified here — see
  `docs/references.md` in the parent repo for the cross-check against
  `mujoco_menagerie/robotstudio_so101` (byte-identical values, same unverified lineage).
- `so101_new_calib.xml` uses the "new calibration" convention: each joint's zero is the
  midpoint of its range. An "old calibration" variant (zero = fully extended) existed
  upstream but was not ported here — this package only ships one calibration.

## Changes from the upstream port

- `pick_scene.xml`: removed the `target` mocap body. It was dead geometry — nothing in this
  package's control path reads `mocap_pos`/`mocap_quat` (the IK controller tracks a target
  position kept in Python state, not a MuJoCo mocap body). See the package README for the
  matching fix in `SO101GymEnv.reset_robot()`.
- `joints_properties.xml` was not carried over: its contents are already inlined into
  `so101_new_calib.xml` (see the "Additional joints_properties.xml" comment there) and no XML
  file includes it separately — it was dead weight in the upstream repo.

## Known unresolved issue: gripper unit mismatch

In LeRobot, the gripper is represented as a linear joint where `0` = fully closed and `100` =
fully open. The MJCF/URDF gripper joint here uses a different range
(`ctrlrange="-0.17453 1.74533"`, radians) and this mapping is **not reflected** in the model.
This is inherited from the upstream port, which documented it as an open issue rather than
fixing it. Not fixed in this package either — flagged here so it isn't rediscovered from
scratch.
