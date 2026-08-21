# lerobot_env_so101

[![PyPI](https://img.shields.io/pypi/v/lerobot-env-so101)](https://pypi.org/project/lerobot-env-so101/)
[![Python](https://img.shields.io/pypi/pyversions/lerobot-env-so101)](https://pypi.org/project/lerobot-env-so101/)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue)](https://github.com/isaka1022/so101-sim2real/blob/main/LICENSE)

A standalone SO-101 (SO-ARM101) pick-cube MuJoCo environment, packaged as a
`lerobot_env_*` plugin. It is auto-detected by
[lerobot](https://github.com/huggingface/lerobot) v0.6.0+ and works on its own
as a plain `gymnasium` environment — lerobot is not a dependency.

![SO-101 pick-cube environment](media/so101_pick_cube.gif)

*A hand-written controller driving a reach→gripper-close motion — not a
successful pick-and-lift. A top-down grasp is not yet reachable with the
position-only IK; see [Limitations](limitations.md#top-down-grasp-is-not-reachable).*

## Install

```bash
pip install lerobot-env-so101
```

Only `mujoco`, `gymnasium`, and `numpy` are pulled in.

```python
import gymnasium as gym
import lerobot_env_so101  # registers the env

env = gym.make("lerobot_env_so101/SO101PickCube-v0")
obs, info = env.reset(seed=0)
```

## What makes this environment different

It is a port of the SO-101 branch of `gym-hil`, with the design corrected in
places where the upstream code carried Panda-shaped assumptions:

- **A 4-dim action space with no dead dimensions.** The native action is
  `[dx, dy, dz, grasp]`. The upstream port kept Panda's 7-dim
  `[dx, dy, dz, drx, dry, drz, grasp]` and silently discarded the three
  orientation deltas inside the IK solver, so a policy could learn to depend
  on inputs that had zero effect on the simulation. See
  [Action space](action-space.md).
- **A gripper command that means what it says.** `grasp` is an absolute
  normalized target — `0` fully closed, `1` fully open — not an increment.
- **Sparse-mode success that actually requires a grasp.** Upstream computed a
  strict success check and then replaced it with a lift-only test in sparse
  mode, so a block knocked upward counted as success. See
  [What changed vs. the upstream port](lerobot-integration.md#what-changed-vs-the-upstream-port).

## Where to go next

| If you want to | Read |
|---|---|
| Run your first episode | [Getting started](getting-started.md) |
| Use it from lerobot's CLI or a policy | [Using it with lerobot](lerobot-integration.md) |
| Understand what the 4 action dimensions do | [Action space](action-space.md) |
| Debug a crash or a surprising result | [Limitations and troubleshooting](limitations.md) |
| Look up a class or argument | [API reference](api.md) |

## License and attribution

Apache-2.0. The SO-101 MJCF/URDF and the original control code were authored
by **Paul Loh** ([github.com/lohpaul9](https://github.com/lohpaul9)) and ported
from [lohpaul9/gym-hil](https://github.com/lohpaul9/gym-hil); the base
`gym-hil` project structure is Copyright 2024 The HuggingFace Inc. team. Full
attribution is in
[Using it with lerobot](lerobot-integration.md#attribution).
