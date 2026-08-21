# Getting started

This page gets a first episode running with plain `gymnasium`. lerobot is not
needed for any of it — see [Using it with lerobot](lerobot-integration.md) if
you want the plugin path.

## Requirements

- Python 3.10–3.13
- `mujoco>=3.0.0,<4.0.0` (verified against 3.10.0), `gymnasium`, `numpy` —
  all installed automatically

Apple Silicon runs natively; there are a few platform quirks worth knowing
before you hit them, collected in
[Limitations and troubleshooting](limitations.md#macos).

## Install

```bash
pip install lerobot-env-so101
```

For development against a checkout of the repository:

```bash
git clone https://github.com/isaka1022/so101-sim2real.git
cd so101-sim2real
pip install -e packages/lerobot_env_so101
```

## Your first episode

Importing the package registers the environment ID with `gymnasium`, so the
import is required even though the name is never referenced directly:

```python
import gymnasium as gym
import numpy as np

import lerobot_env_so101  # registers the env

env = gym.make("lerobot_env_so101/SO101PickCube-v0", render_mode="rgb_array")
obs, info = env.reset(seed=0)
for _ in range(100):
    action = env.action_space.sample() * 0.1  # keep deltas small — see below
    obs, reward, terminated, truncated, info = env.step(action)
    if terminated or truncated:
        obs, info = env.reset()
env.close()
```

!!! warning "Why `* 0.1` and not a raw sample"

    With the default `action_scale=1.0`, an action component of `1.0` is added
    to the end-effector target as **1.0 metres**, while the whole reachable
    workspace spans at most 0.6 m. Sampling the raw action space therefore
    behaves closer to bang-bang control than to a proportional delta. For
    anything beyond a smoke test, set `action_scale` explicitly — see
    [Action deltas default to unscaled metres](limitations.md#action-deltas-default-to-unscaled-metres).

## Configuring the environment

`gym.make` accepts the following keyword arguments:

| Argument | Default | Effect |
|---|---|---|
| `action_scale` | `1.0` | Metres per unit of position action. Affects `dx, dy, dz` only; `grasp` is absolute and unaffected. |
| `image_obs` | `False` | Adds a `pixels.front` camera view to the observation dict. |
| `reward_type` | `"sparse"` | `"sparse"` or `"dense"`. |
| `random_block_position` | `False` | Randomizes the block's starting position on reset. |
| `render_mode` | `"rgb_array"` | `"rgb_array"` or `"human"`. |
| `render_spec` | `GymRenderingSpec()` | Frame height, width, and camera used for rendering. |
| `seed` | `0` | Seeds the environment's own RNG. |
| `control_dt` | `0.1` | Seconds per control step (10 Hz). |
| `physics_dt` | `0.002` | MuJoCo integration step. |

A practical configuration for RL, with a scaled action and dense reward:

```python
env = gym.make(
    "lerobot_env_so101/SO101PickCube-v0",
    action_scale=0.025,
    reward_type="dense",
)
```

The full signature is in the [API reference](api.md#lerobot_env_so101.SO101PickCubeGymEnv).

## Observations and actions at a glance

The action space is `Box([-1, -1, -1, 0], 1.0, (4,), float32)`. Note the
asymmetric lower bound: the three position deltas run `[-1, 1]`, while `grasp`
runs `[0, 1]` because it is an absolute target rather than a delta — `0` fully
closed, `1` fully open. The reasoning behind this shape is in
[Action space](action-space.md).

The observation is a dict whose contents depend on `image_obs`:

=== "`image_obs=False` (default)"

    ```python
    {
        "agent_pos": Box(-inf, inf, (14,), float32),
        "environment_state": Box(-inf, inf, (3,), float32),
    }
    ```

=== "`image_obs=True`"

    ```python
    {
        "pixels": {"front": Box(0, 255, (H, W, 3), uint8)},
        "agent_pos": Box(-inf, inf, (14,), float32),
    }
    ```

`agent_pos` is `[qpos(5), qvel(5), gripper_pose(1), ee_pos(3)]`, where
`gripper_pose` is normalized to `[-1, 1]` (a different convention from the
`grasp` **action**, which is `[0, 1]`). `environment_state` is the block's
position.

!!! warning "`image_obs=True` removes `environment_state`"

    Turning on pixel observations does not simply add a camera view — it also
    drops `environment_state` from the dict, on the assumption that a
    pixel-based policy should infer the block position from the image rather
    than read it directly. If you want both, you will need to override
    `_compute_observation()`.

## Rendering

`render_mode="rgb_array"` returns frames you can write to a video yourself.
`render_mode="human"` opens a MuJoCo viewer — on macOS this interacts with the
`mjpython` launcher in a way that is easy to get wrong; see
[macOS](limitations.md#macos).

## Next steps

- [Using it with lerobot](lerobot-integration.md) — plugin discovery and the CLI
- [Action space](action-space.md) — what each dimension does and why there are four
- [Limitations and troubleshooting](limitations.md) — read before filing a bug
