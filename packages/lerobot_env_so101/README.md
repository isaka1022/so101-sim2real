# lerobot_env_so101

[![PyPI](https://img.shields.io/pypi/v/lerobot-env-so101)](https://pypi.org/project/lerobot-env-so101/)
[![Python](https://img.shields.io/pypi/pyversions/lerobot-env-so101)](https://pypi.org/project/lerobot-env-so101/)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue)](https://github.com/isaka1022/so101-sim2real/blob/main/packages/lerobot_env_so101/LICENSE)

A standalone SO-101 (SO-ARM101) pick-cube MuJoCo environment, packaged as a
`lerobot_env_*` plugin (auto-detected by lerobot v0.6.0+ via
`@EnvConfig.register_subclass`, see
[lerobot#3823](https://github.com/huggingface/lerobot/pull/3823)) and usable
standalone as a plain `gymnasium` environment.

![SO-101 pick-cube environment](https://raw.githubusercontent.com/isaka1022/so101-sim2real/main/docs/media/so101_pick_cube.gif)

## Installation

```bash
pip install lerobot-env-so101
```

Or from a checkout of the parent repo, for development:

```bash
pip install -e packages/lerobot_env_so101
```

## Usage

### Standalone (plain gymnasium)

Works without lerobot installed — only `mujoco`, `gymnasium`, and `numpy`:

```python
import gymnasium as gym
import numpy as np

import lerobot_env_so101  # registers the env

env = gym.make("lerobot_env_so101/SO101PickCube-v0", render_mode="rgb_array")
obs, info = env.reset(seed=0)
for _ in range(100):
    action = env.action_space.sample() * 0.1  # keep deltas small, see Known limitations
    obs, reward, terminated, truncated, info = env.step(action)
    if terminated or truncated:
        obs, info = env.reset()
env.close()
```

`gym.make` kwargs: `image_obs` (add a `pixels.front` camera view to the
observation), `reward_type` (`"sparse"` or `"dense"`), and
`random_block_position`.

### With lerobot (v0.6.0+)

Installing the package is all the wiring you need. lerobot's
`register_third_party_plugins()` discovers any installed `lerobot_env_*`
distribution at startup and imports it, which registers the env config under
the type name **`so101`**:

```bash
pip install lerobot lerobot-env-so101
```

```bash
lerobot-eval --policy.path=<your_policy> --env.type=so101
```

Config fields (`--env.<field>` on the CLI) are defined in
`configuration_so101.py`: `task` (default `SO101PickCube-v0`), `fps` (10,
matching the env's 0.1 s control step), `episode_length` (100), `image_obs`,
`reward_type`, `random_block_position`.

### Driving it from 7-dim teleop tooling

```python
import gymnasium as gym

import lerobot_env_so101
from lerobot_env_so101.wrappers import SevenDofToFourDofAdapter

env = SevenDofToFourDofAdapter(gym.make("lerobot_env_so101/SO101PickCube-v0"))
# env now accepts [dx, dy, dz, drx, dry, drz, grasp]; drx/dry/drz are
# explicitly discarded (documented in the class docstring, not silent).
```

## Action space

The native action space is **4-dim**: `[dx, dy, dz, grasp]`.

SO-101's arm has 5 DOF (6 joints, one of which is the gripper), and the IK
controller in this package only solves for end-effector *position*. A 6-dim
Cartesian pose target (position + orientation) is not something this
robot/controller pair can track, so orientation deltas are not part of the
action space at all — there is no dead dimension to silently ignore. This was
verified with `sim/check_dead_action_dims.py` in the parent repo: all 4
dims move the state (0/4 dead).

Contrast with the upstream `gym-hil` design this was ported from, which kept
the Panda-derived 7-dim `[dx,dy,dz,drx,dry,drz,grasp]` action space and
silently dropped `drx,dry,drz` inside the IK solver — 3 of 7 dimensions were
dead, meaning a policy could learn to depend on inputs that had zero effect
on the simulation.

### 7-dim adapter

Teleop devices and HIL tooling written against the 7-dim Panda convention can
still be used via `lerobot_env_so101.wrappers.SevenDofToFourDofAdapter`,
which wraps a native env and accepts 7-dim actions, **explicitly discarding**
`drx, dry, drz` (see the class docstring — the discard is documented, not
silent).

## What changed vs. the upstream port

Ported from
[lohpaul9/gym-hil `SO-101` branch](https://github.com/lohpaul9/gym-hil/tree/SO-101)
(Apache-2.0), submitted upstream as
[huggingface/gym-hil#36](https://github.com/huggingface/gym-hil/pull/36) /
[#37](https://github.com/huggingface/gym-hil/pull/37) and self-closed by the
author without review. Authored by **Paul Loh** (github.com/lohpaul9). See
the parent repo's `README.md` and `docs/references.md` for the full context
on why this became a standalone package instead of an upstream PR.

- **Action space narrowed from 7-dim to native 4-dim** (see above). The
  7→4 adapter (`wrappers.py`) is new.
- **`FrankaGymEnv` and the `RobotGymEnv` abstract base were dropped.**
  `RobotGymEnv` only ever had one concrete subclass (`SO101GymEnv`), so it
  added an abstraction layer without abstracting anything; `SO101GymEnv` now
  inherits directly from `MujocoGymEnv`. No Panda/Franka code is present in
  this package.
- **Fixed: dead mocap body.** Upstream's `SO101GymEnv.reset_robot()` wrote
  `mocap_pos`/`mocap_quat`, but `apply_action()` never read them — the IK
  controller tracks its target in a plain Python attribute
  (`self._target_ee_pos`), not a MuJoCo mocap body. This package removes the
  mocap writes from `reset_robot()` and removes the corresponding unused
  `mocap="true"` `target` body from `pick_scene.xml`.
- **Not fixed, inherited as-is: gripper unit mismatch.** LeRobot represents
  the gripper as a linear joint (`0` = closed, `100` = open). The MJCF/URDF
  gripper joint here still uses its native radian range
  (`ctrlrange="-0.17453 1.74533"`) with no mapping layer. This was already an
  open issue in the upstream assets (documented in the original
  `assets/SO101/README.md`); it is reproduced in
  `lerobot_env_so101/assets/README.md` here rather than silently dropped.
- **Not fixed, inherited as-is: unverified motor parameters.** `damping` /
  `frictionloss` / `armature` for the STS3215 servos are carried over
  unchanged from the upstream MJCF, which itself adapted them from the
  [Open Duck Mini project](https://github.com/apirrone/Open_Duck_Mini) rather
  than measuring the actual SO-101. See the parent repo's
  `docs/references.md` for the cross-check against
  `mujoco_menagerie/robotstudio_so101` (same values, same unverified
  lineage). System identification is out of scope for this package (see the
  parent repo's Phase 2 notes).
- **Dropped: teleop/gamepad/keyboard wrappers, `PassiveViewerWrapper`,
  `GripperPenaltyWrapper`, `ResetDelayWrapper`, `EEActionWrapper`,
  `InputsControlWrapper`, and the `wrap_env`/`make_env` factory.** These are
  HIL-teleop infrastructure orthogonal to the environment itself and out of
  scope for this package; only the base env, the pick-cube task, and the
  7→4 action adapter were ported.
- **Dropped: `joints_properties.xml`.** Its contents are already inlined
  into `so101_new_calib.xml` upstream (see the comment there) and no MJCF
  file `<include>`s it separately — it was dead weight in the source repo.
- **`mujoco>=3.0.0,<4.0.0`** (same major-version bump the upstream fork made
  from vanilla `gym-hil`'s `<3.0.0`). Verified working against MuJoCo 3.10.0.
- **Fixed: sparse-mode success no longer ignores the gripper.** Upstream
  gym-hil (both its Panda environments and the SO-101 port) computes a strict
  success check and then discards it in sparse mode, replacing it with a
  lift-only test — so a block knocked upward without ever being grasped
  terminates the episode as a success. Measured on this environment before
  the fix: gripper 0.092 m from the block (threshold 0.05 m) with the block
  lifted 0.20 m still reported success. Sparse mode now also requires the
  gripper to be near the block.

## Known limitations

- **Action deltas default to unscaled metres.** With the default
  `action_scale=1.0`, an action component of magnitude 1.0 is added directly
  to the end-effector target as 1.0 metres, while the reachable workspace
  spans at most 0.6 m — over most of the declared [-1, 1] range the action
  behaves closer to bang-bang than to a proportional delta. This default is
  inherited from gym-hil, where actions come from human teleoperation and are
  naturally small. Since v0.1.1, pass `action_scale` (metres per unit action;
  position deltas only, the grasp increment is unaffected) to make the full
  [-1, 1] range meaningful for an RL policy:

  ```python
  env = gym.make("lerobot_env_so101/SO101PickCube-v0", action_scale=0.025)
  # or on the lerobot CLI: --env.type=so101 --env.action_scale=0.025
  ```
- **`SO101GymEnv` is a base class, not a usable environment.** It implements
  robot control but not `step()`/`reset()`; instantiate `SO101PickCubeGymEnv`
  (or `gym.make("lerobot_env_so101/SO101PickCube-v0")`) instead.

## Attribution

- SO-101 MJCF/URDF and control code: ported from
  [lohpaul9/gym-hil](https://github.com/lohpaul9/gym-hil) (Apache-2.0),
  authored by **Paul Loh** (github.com/lohpaul9).
- Base `gym-hil` project structure and license headers: Copyright 2024 The
  HuggingFace Inc. team (Apache-2.0).
- Asset provenance (CAD source, motor parameters): see
  `lerobot_env_so101/assets/README.md`.

Licensed under Apache-2.0 — see `LICENSE`.

## Testing

```bash
pip install -e "packages/lerobot_env_so101[test]"
pytest packages/lerobot_env_so101/tests -q
```
