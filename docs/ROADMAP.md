# Roadmap

Direction for `lerobot_env_so101` and the surrounding sim2real work. Dates are
intentionally omitted — this is a personal project worked on in bounded time,
so the ordering is a priority list, not a schedule.

## Near-term (sim, v0.1.x → v0.2.x)

- **Gripper unit mapping. Done (v0.2.0).** `grasp` is now an absolute,
  normalized `[0, 1]` command (0=closed, 1=open), mapped onto the MJCF's
  native radian `ctrlrange` by `gripper.normalized_to_ctrl` — see the package
  README's *Action space* section. Breaking change: `grasp` was previously a
  normalized increment, not an absolute target.
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
`docs/references.md`).

- **Status:** planned. Start date is undecided; it requires recording real
  trajectories on hardware, which is a separate effort from the sim work above.
- The path exists: `mujoco_menagerie`'s CONTRIBUTING explicitly welcomes
  sysid-based realism improvements, and MuJoCo ships a `python/mujoco/sysid`
  toolkit.

## Non-goals

Kept out of scope on purpose, to keep the package focused:

- **Teleop / HIL infrastructure** (gamepad, keyboard, viewer wrappers) — use
  [gym-hil](https://github.com/huggingface/gym-hil) upstream.
- **Robots other than SO-101.**
