# Using it with lerobot

Installing the package is all the wiring you need. lerobot's
`register_third_party_plugins()` discovers any installed `lerobot_env_*`
distribution at startup and imports it, which registers the env config under
the type name **`so101`**.

```bash
pip install lerobot lerobot-env-so101
```

```bash
lerobot-eval --policy.path=<your_policy> --env.type=so101
```

Requires lerobot v0.6.0+, which is where plugin auto-discovery landed
([lerobot#3823](https://github.com/huggingface/lerobot/pull/3823)).

## Config fields

Every field is settable as `--env.<field>` on the CLI, and is defined in
`configuration_so101.py`:

| Field | Default | Notes |
|---|---|---|
| `task` | `SO101PickCube-v0` | The registered gym ID to instantiate. |
| `fps` | `10` | Matches the env's 0.1 s control step. |
| `episode_length` | `100` | Steps before truncation. |
| `image_obs` | `False` | See the [observation warning](getting-started.md#observations-and-actions-at-a-glance). |
| `render_mode` | `"rgb_array"` | `"rgb_array"` or `"human"`. |
| `reward_type` | `"sparse"` | `"sparse"` or `"dense"`. |
| `random_block_position` | `False` | Randomize block placement on reset. |
| `action_scale` | `1.0` | Metres per unit position action — [almost always worth setting](action-space.md#scaling-deltas-for-rl). |

## How plugin discovery actually works

If you are writing your own `lerobot_env_*` package, this is the part that is
easy to get wrong.

lerobot enumerates installed distributions and tests the **raw `Name`** from
`importlib.metadata` with `.startswith("lerobot_env_")`. That name is
whatever you declared in `pyproject.toml`, preserved verbatim.

!!! danger "Underscores are required, not stylistic"

    ```toml
    [project]
    name = "lerobot_env_so101"   # discovered
    # name = "lerobot-env-so101" # NEVER discovered
    ```

    A hyphenated distribution name is normalized for PyPI's URL
    (`pypi.org/project/lerobot-env-so101/`) but the raw `Name` is what the
    prefix test sees. Declare it with underscores or the plugin silently does
    nothing — no error, just an env type that never appears.

The second half of the contract is that the package must register its
`EnvConfig` subclass at import time. Since lerobot depends on torch and this
package does not, the import is guarded so that the standalone gym path stays
dependency-free:

```python
# lerobot_env_so101/__init__.py
if importlib.util.find_spec("lerobot") is not None:
    from lerobot_env_so101 import configuration_so101  # registers @EnvConfig.register_subclass
```

## Why a standalone plugin, not an upstream PR

gym-hil and the other single-environment repositories (`gym-pusht`,
`gym-aloha`, `gym-xarm`) have been in maintenance-only mode for over a year,
while lerobot now provides gatekeeper-free publishing paths — EnvHub and
`lerobot_env_*` plugin auto-discovery. This package uses the latter, which
means it can be corrected and released without waiting on a review queue that
has not been moving.

## What changed vs. the upstream port

Ported from
[lohpaul9/gym-hil `SO-101` branch](https://github.com/lohpaul9/gym-hil/tree/SO-101)
(Apache-2.0), submitted upstream as
[huggingface/gym-hil#36](https://github.com/huggingface/gym-hil/pull/36) and
[#37](https://github.com/huggingface/gym-hil/pull/37), and self-closed by the
author without review.

### Fixed

- **Action space narrowed from 7-dim to native 4-dim.** Three of seven
  dimensions were dead upstream. See [Action space](action-space.md). The
  7→4 adapter (`wrappers.py`) is new.
- **Dead mocap body.** Upstream's `SO101GymEnv.reset_robot()` wrote
  `mocap_pos`/`mocap_quat`, but `apply_action()` never read them — the IK
  controller tracks its target in a plain Python attribute
  (`self._target_ee_pos`), not a MuJoCo mocap body. Both the writes and the
  unused `mocap="true"` `target` body in `pick_scene.xml` are gone.
- **Gripper is an absolute, normalized command (v0.2.0).** Details and the
  breaking-change note are in
  [Action space](action-space.md#the-gripper-is-absolute-and-that-is-a-breaking-change).
- **Sparse-mode success no longer ignores the gripper.** Upstream gym-hil —
  both its Panda environments and the SO-101 port — computes a strict success
  check and then discards it in sparse mode, replacing it with a lift-only
  test. A block knocked upward without ever being grasped terminated the
  episode as a success. Measured on this environment before the fix: gripper
  0.092 m from the block (threshold 0.05 m) with the block lifted 0.20 m still
  reported success. Sparse mode now also requires the gripper to be near the
  block.

### Dropped

- **`FrankaGymEnv` and the `RobotGymEnv` abstract base.** `RobotGymEnv` only
  ever had one concrete subclass (`SO101GymEnv`), so it added an abstraction
  layer without abstracting anything. `SO101GymEnv` now inherits directly from
  `MujocoGymEnv`, and no Panda/Franka code is present.
- **Teleop/HIL infrastructure**: gamepad and keyboard wrappers,
  `PassiveViewerWrapper`, `GripperPenaltyWrapper`, `ResetDelayWrapper`,
  `EEActionWrapper`, `InputsControlWrapper`, and the `wrap_env`/`make_env`
  factory. These are orthogonal to the environment itself. Only the base env,
  the pick-cube task, and the 7→4 action adapter were ported.
- **`joints_properties.xml`.** Its contents are already inlined into
  `so101_new_calib.xml` upstream and no MJCF file `<include>`s it separately —
  it was dead weight in the source repo.

### Inherited as-is

- **Unverified motor parameters.** `damping` / `frictionloss` / `armature` for
  the STS3215 servos are carried over unchanged from the upstream MJCF, which
  itself adapted them from the
  [Open Duck Mini project](https://github.com/apirrone/Open_Duck_Mini) rather
  than measuring an actual SO-101. The repository's `notes/references.md`
  records the cross-check against `mujoco_menagerie/robotstudio_so101` — same
  values, same unverified lineage. System identification is out of scope for
  this package; see the [Roadmap](ROADMAP.md).
- **`mujoco>=3.0.0,<4.0.0`**, the same major-version bump the upstream fork
  made from vanilla gym-hil's `<3.0.0`. Verified against MuJoCo 3.10.0.

## Attribution

- SO-101 MJCF/URDF and control code: ported from
  [lohpaul9/gym-hil](https://github.com/lohpaul9/gym-hil) (Apache-2.0),
  authored by **Paul Loh** ([github.com/lohpaul9](https://github.com/lohpaul9)).
- Base `gym-hil` project structure and license headers: Copyright 2024 The
  HuggingFace Inc. team (Apache-2.0).
- Asset provenance (CAD source, motor parameters): see
  [`assets/README.md`](https://github.com/isaka1022/so101-sim2real/blob/main/packages/lerobot_env_so101/lerobot_env_so101/assets/README.md).

Licensed under Apache-2.0.
