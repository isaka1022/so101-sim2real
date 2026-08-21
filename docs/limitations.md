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

## `SO101GymEnv` has no `step()` or `reset()`

**Symptom.** `AttributeError` or a silently non-functional environment after
instantiating `SO101GymEnv` directly.

**Cause.** `SO101GymEnv` is a base class. It implements robot control but not
the task loop.

**Fix.** Instantiate `SO101PickCubeGymEnv`, or better,
`gym.make("lerobot_env_so101/SO101PickCube-v0")`.

## Top-down grasp is not reachable

**Symptom.** The arm reaches the block and closes the gripper, but never
straddles it — the jaws meet above or beside the block rather than around it.
This is what the demo animation on the [home page](index.md) shows.

**Cause.** The gripper's fixed jaw (including the `wrist_roll_follower` mesh in
the wrist servo bracket) hits the block's top face before the moving jaw can
descend far enough to straddle it. A correct grasp pose — approaching
vertically, gripper straddling the block — does exist kinematically. The
position-only IK in this package, however, tracks a continuous Cartesian path
from the HOME pose and converges monotonically onto a different solution
branch, with the approach axis tilted roughly 36° from vertical.

**Fix.** None available in this package. Reaching the vertical-approach branch
requires orientation-aware IK, which is on the [Roadmap](ROADMAP.md).

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
