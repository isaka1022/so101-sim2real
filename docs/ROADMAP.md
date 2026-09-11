# Roadmap

Direction for `lerobot_env_so101` and the surrounding sim2real work. Dates are
intentionally omitted — this is a personal project worked on in bounded time,
so the ordering is a priority list, not a schedule.

## What this roadmap assumes about upstream

Two upstream developments will decide how much of this package stays useful.
Rather than treat them as risks to plan around, the ordering below assumes they
land, and moves weight toward what they do not cover.

- **[lerobot#4492](https://github.com/huggingface/lerobot/pull/4492)** registers
  SO-101 as a first-party `EnvConfig`. Open and unreviewed by the core team as
  of 2026-09-07. Its scope is deliberately narrow — joint-space infrastructure,
  no rewards and no tasks — so if it lands, the *foundation* moves upstream
  while the task layer, the reward shaping, and the identified physics stay
  here.
- **[EnvHub](https://huggingface.co/docs/lerobot/envhub)** loads an `env.py`
  from the Hub in one line, without packaging. Over time this erodes the value
  of being the only package on the `lerobot_env_*` pip path — which is, today,
  one of the three things that separate this package from the alternatives
  (see `notes/references.md`).

**Packaging is not a moat. Verified physics and real-hardware evidence are.**
That is why Phase 2 below is not optional polish: it is the first item on this
list that upstream cannot absorb by writing more infrastructure, because it
requires the physical arm.

## Near-term (sim, v0.1.x → v0.3.x)

- **Gripper unit mapping. Done (v0.2.0).** `grasp` is now an absolute,
  normalized `[0, 1]` command (0=closed, 1=open), mapped onto the MJCF's
  native radian `ctrlrange` by `gripper.normalized_to_ctrl` — see the package
  README's *Action space* section. Breaking change: `grasp` was previously a
  normalized increment, not an absolute target.
- **Arm position control. Done (v0.3.0).** The arm's `<position>` actuators
  now receive the IK target joint angles on `ctrl` instead of a joint-space PD
  torque, and the IK is solved once per control step rather than once per
  physics substep — see *Limitations* for the failure it replaced.
- **Orientation-aware IK for top-down grasp.** The gripper's fixed jaw
  (including the wrist_roll_follower mesh in the wrist servo bracket) hits
  the block before the moving jaw can descend far enough to straddle it. A
  correct vertical-approach grasp pose exists kinematically, but the
  position-only IK converges monotonically from HOME onto a different
  solution branch (approach axis tilted ~36° from vertical) and never
  reaches it — this is a limitation of solving for position only, not a
  workspace/reachability issue. Two candidate designs, both scoped to
  `ik_control.py` at roughly 50-100 lines:
  - (a) Add an orientation target to the IK objective and fix the approach
    axis pointing straight down, so the solver only searches yaw/position.
  - (b) Branch-aware multi-seed IK: solve from several seed
    configurations and select the solution branch that reaches the
    vertical-approach pose, instead of always continuing from HOME.
- **Denser reward shaping.** The default is `sparse`; a well-shaped `dense`
  reward (reach → align → grasp → lift) would make RL from scratch tractable.
- **Revisit the default action scale.** `action_scale` landed in v0.1.1 with a
  backward-compatible default of `1.0` (unscaled metres). Once a good working
  value is validated, document a recommended preset for RL callers.

## Sim expansion (v0.2.x+)

- **More tasks beyond pick-cube.** Add `place` and `stack` tasks, keeping each
  as a separate `gym.register` id under the same plugin so downstream configs
  can select them by task name.

## Phase 2 — real-robot system identification (planned, not started)

Measuring the SO-101's actual physics to replace the currently unverified
motor parameters (`damping` / `frictionloss` / `armature`, carried over from
the upstream MJCF, which itself borrowed them from an unrelated robot — see
`notes/references.md`).

- **Status:** planned. Start date is undecided; it requires recording real
  trajectories on hardware, which is a separate effort from the sim work above.
- The path exists: `mujoco_menagerie`'s CONTRIBUTING explicitly welcomes
  sysid-based realism improvements, and MuJoCo ships a `python/mujoco/sysid`
  toolkit.

## Phase 3 — closing the loop the repository name promises (planned, not started)

The repository is called `so101-sim2real` and currently ships only the sim half.

- Train a policy in this environment, run it on the physical SO-101, and report
  what transfers and what does not — including the gap that Phase 2's
  identification fails to close.
- Publish the replication recipe end to end on macOS without CUDA. Every
  strong alternative in this space (so101-nexus's MuJoCo Warp, ManiSkill,
  Isaac Lab) requires a CUDA GPU, so a Mac-only path is worth writing down
  even if the results are modest.

**Depends on** the orientation-aware IK above (a grasp that actually works) and
Phase 2 (physics worth transferring from). Running it earlier would produce a
result that says more about the unfixed IK than about sim2real.

## Non-goals

Kept out of scope on purpose, to keep the package focused:

- **Teleop / HIL infrastructure** (gamepad, keyboard, viewer wrappers) — use
  [gym-hil](https://github.com/huggingface/gym-hil) upstream.
- **Robots other than SO-101.**
