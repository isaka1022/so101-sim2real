# Limitations and troubleshooting

Known limitations of this environment, and the platform quirks that produce
confusing failures. Worth reading before filing a bug — most of what follows
is deliberate, inherited, or a MuJoCo-level constraint rather than something
this package can fix.

## Action deltas default to unscaled metres

**Symptom.** A policy sampling the action space behaves erratically, saturating
against the workspace bounds instead of making smooth approaches.

**Cause.** With the default `action_scale=1.0`, an action component of
magnitude `1.0` is added directly to the end-effector target as **1.0 metres**,
while the reachable workspace spans at most 0.6 m. Over most of the declared
`[-1, 1]` range the action therefore behaves closer to bang-bang than to a
proportional delta. The default is inherited from gym-hil, where actions came
from human teleoperation and were naturally small.

**Fix.** Pass `action_scale` explicitly (metres per unit action):

```python
env = gym.make("lerobot_env_so101/SO101PickCube-v0", action_scale=0.025)
```

```bash
lerobot-eval --env.type=so101 --env.action_scale=0.025
```

Position deltas only — `grasp` is absolute and unaffected. Available since
v0.1.1.

## `grasp=0` closes the gripper instead of leaving it alone

**Symptom.** Code that worked before v0.2.0 now holds the gripper shut for the
whole episode.

**Cause.** `grasp` became an **absolute** target in v0.2.0. It used to be a
normalized increment added to the current position each step, where `0` meant
"no change"; it now means "fully closed".

**Fix.** Command the gripper state you want rather than a change to it — `1`
to hold it open, `0` to close. Full detail in
[Action space](action-space.md#the-gripper-is-absolute-and-that-is-a-breaking-change).

## The gripper polarity was inverted (fixed in v0.4.0)

**Symptom.** `grasp=1` ("open") closed the jaw and `grasp=0` ("closed") opened it.

**Cause.** `GRIPPER_CLOSED_AT_CTRL_LOW` was `False`, but the `gripper` joint
closes at its lower limit and is fully open at its upper limit. The earlier
check rendered an image and judged it by eye; the new regression test
(`test_grasp_zero_physically_closes_the_jaw`) measures the distance from the
moving jaw's mesh to the `gripperframe` site instead.

**Fix.** `GRIPPER_CLOSED_AT_CTRL_LOW = True`. `gripper_pose` in the observation
is now `-1` when closed and `+1` when open, and the browser viewer's mapping
and golden file follow, and the reach-and-close policy was retrained under the
corrected polarity.

## Arm ctrl was interpreted as PD torque, not a target angle (fixed in v0.3.0)

**Symptom.** Before v0.3.0, inspecting `data.ctrl` for the arm actuators after a
step showed values far outside the declared `ctrlrange` — magnitudes past 100
against a range of roughly ±1.7 rad. The arm still moved toward its Cartesian
target, but the actuators were saturated rather than tracking proportionally.

**Cause.** The arm actuators are `<position>` actuators in the MJCF
(`kp="17.8"`, `forcerange="-3.35 3.35"`), so their `ctrl` is a **target joint
angle**. The controller inherited from gym-hil computed a joint-space PD torque
plus gravity compensation and wrote that into `ctrl` — correct for the Panda
`<motor>` actuators it was originally written against, meaningless for a
position actuator. MuJoCo clamps the out-of-range command, so the actuator ran
at its force limit in whichever direction the "torque" pointed: bang-bang
control rather than proportional tracking.

**Fix.** Fixed in v0.3.0. `solve_ik` (renamed from `ik_control`) returns the
target joint angles, and `apply_action()` writes them to the arm `ctrl`; the
`<position>` actuators do proportional position tracking themselves (`kp`
only; damping comes from the passive joint damping). The IK is solved once
per control step and the target angle is held across the physics substeps.

## The arm settles below its target under gravity

**Symptom.** Holding a fixed target with the zero action for 100 steps from
the home pose leaves a steady-state gap between `ctrl` (the commanded angle)
and `qpos` (the actual angle): shoulder_lift ≈ −0.028 rad, elbow_flex ≈
−0.022 rad, wrist_flex ≈ −0.009 rad, shoulder_pan and wrist_roll ≈ 0 (they
carry no gravity load at the home pose). The end-effector site settles about
17 mm below the commanded Cartesian target.

**Cause.** The `<position>` actuators are proportional only (`kp="17.8"`, no
integral term), so a joint under a constant gravity torque τ settles at a
residual offset of τ/kp rather than closing the error to zero. The
gravity-compensation term in the upstream controller (see the fix above) never
actually offset this, since it was written into a position actuator's `ctrl`
instead of applied as a torque.

**Fix.** Not fixed. Closed-loop policies that observe `ee_pos` compensate for
it; an open-loop consumer must not assume `qpos == ctrl`. Whether the real
STS3215 firmware has an integral term is part of the servo model verification
in the [Roadmap](ROADMAP.md).

## `SO101GymEnv` has no `step()` or `reset()`

**Symptom.** `AttributeError` or a silently non-functional environment after
instantiating `SO101GymEnv` directly.

**Cause.** `SO101GymEnv` is a base class. It implements robot control but not
the task loop.

**Fix.** Instantiate `SO101PickCubeGymEnv`, or better,
`gym.make("lerobot_env_so101/SO101PickCube-v0")`.

## Top-down grasp is not reachable with the default IK

**Symptom.** In `SO101PickCube-v0` the arm reaches the block and closes the
gripper, but never straddles it — the jaws meet above or beside the block
rather than around it. This is what the demo animation on the
[home page](index.md) shows.

**Cause.** The gripper's fixed jaw (including the `wrist_roll_follower` mesh in
the wrist servo bracket) hits the block's top face before the moving jaw can
descend far enough to straddle it. A correct grasp pose — approaching
vertically, gripper straddling the block — does exist kinematically. The
position-only IK in this package, however, tracks a continuous Cartesian path
from the HOME pose and converges monotonically onto a different solution
branch, with the approach axis tilted roughly 36° from vertical.

**Fix.** Pass `top_down_ik=True`, or use `SO101PickPlace-v0`, which sets it.
The IK then also holds the gripper's approach axis straight down and moves the
grasp point between the jaws instead of `gripperframe`. The default is
unchanged, so the pick-cube task, its scripted controller, and the BC policy
still show the symptom above.

## Pick-and-place grasps with collision pads the real gripper does not have

**Symptom.** In `SO101PickPlace-v0` the block is held by two invisible box
geoms at the fingertips, so a rendered frame shows a gap of a few millimetres
between the fixed finger and the block.

**Cause.** MuJoCo collides each jaw mesh as its convex hull. The two hulls form
a V-shaped mouth that touches a block at one or two points per jaw, and the
block pivots out of it during the lift. `jaw_pads=True` enables a box pad on
each fingertip (`fixed_jaw_pad`, `moving_jaw_pad` in `so101_new_calib.xml`),
standing roughly 5 to 7 mm proud of the mesh surface (read off the geometry,
not measured in a run). Mass, friction, contact parameters, and the gripper
actuator are unchanged.

Measured with the scripted controller over seeds 1000 to 1199:

| Command | Placed | Both jaws on the block, median share of the carry |
|---|---|---|
| `python sim/eval_pick_place.py --episodes 200 --seed 1000 --no-jaw-pads` | 36 of 200 | 0.05 |
| `python sim/eval_pick_place.py --episodes 200 --seed 1000` | 200 of 200 | 1.00 |

**Fix.** None. The pads are a stand-in for a flat fingertip and are not a
measurement of the real gripper, so a grasp that holds here says nothing yet
about the real one. They are off by default and do not collide in
`SO101PickCube-v0`.

## Pick-and-place loses the vertical approach past x = 0.30 m

**Symptom.** Far from the base the gripper tilts while carrying, and at the far
corners the block is not picked up.

**Cause.** The wrist runs out of travel. In single rollouts with the block at
a fixed position and the goal at (0.22, -0.09), the largest approach-axis tilt
during the lift and carry was roughly 4° to 8° for a block at x = 0.15 to
0.25 m, 9° to 11° at x = 0.30 m, and 17° to 22° at x = 0.34 m. These come
from a one-off script, not from anything in `sim/`, so read them as
approximate. In the same kind of rollout a block at (0.34, ±0.14) was either
dropped on the way or not lifted at all, while every position tried from
x = 0.12 to 0.32 m, y = ±0.14 m, was placed.

**Fix.** `SO101PickPlace-v0` samples block and goal from x = 0.15 to 0.30 m,
y = ±0.10 m, which is nearer the base than the pick task's box.

## A LeRobot policy ignores the grasp convention

**Symptom.** The gripper behaves as though the `[0, 1]` absolute convention
does not exist, even though the environment declares it.

**Cause.** LeRobot's policy eval does not read a gym env's `action_space`
bounds. It scales actions using the training dataset's own normalization
statistics. Making `grasp` absolute is correct for this package as a plain
gym/RL environment, but it does not retroactively change what a policy learned.

**Fix.** A LeRobot policy only trains against this convention if its dataset
was collected or labeled that way. Check your dataset, not the environment.

## Unverified motor parameters

`damping` / `frictionloss` / `armature` for the STS3215 servos were never
measured against real hardware — they are carried over from the upstream MJCF,
which adapted them from the
[Open Duck Mini project](https://github.com/apirrone/Open_Duck_Mini). The same
values appear in `mujoco_menagerie/robotstudio_so101` with the same lineage.

Treat sim-to-real transfer results accordingly. System identification is out
of scope for this package; the repository's `notes/references.md` records the
cross-check, and Phase 2 in the [Roadmap](ROADMAP.md) covers the intent.

## macOS

Apple Silicon runs natively — `pip install mujoco`, verified with 3.10.0. Four
things behave differently than you might expect.

!!! warning "`mjpython` is only required for `launch_passive()`"

    Run the blocking `launch()` with plain `python`. Getting this backwards
    crashes with `RuntimeError: Caught an unknown exception!`
    ([mujoco#742](https://github.com/google-deepmind/mujoco/issues/742)) — an
    error message that gives no hint about the launcher being the cause.

- **`mjpython` and offscreen rendering cannot be combined.** Record videos
  from a separate script rather than trying to do both in one process.
- **MJX (GPU-parallel) is not a realistic option on Mac.** The JAX Metal
  backend has been experimental and unmaintained since 2024-10.
- **Isaac Sim / Isaac Lab do not run on Mac** at all, if you were considering
  them as an alternative path.

## Headless Linux and CI

Rendering needs an OSMesa context. The repository's own CI installs
`libosmesa6` and sets `MUJOCO_GL=osmesa`:

```bash
sudo apt-get install -y libosmesa6
export MUJOCO_GL=osmesa
```
