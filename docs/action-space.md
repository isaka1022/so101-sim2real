# Action space

The native action space is **4-dim**: `[dx, dy, dz, grasp]`, typed as
`Box([-1, -1, -1, 0], 1.0, (4,), float32)`.

| Index | Name | Range | Meaning |
|---|---|---|---|
| 0–2 | `dx, dy, dz` | `[-1, 1]` | End-effector position **deltas**, multiplied by `action_scale` before being added to the target. |
| 3 | `grasp` | `[0, 1]` | An **absolute** gripper target — `0` fully closed, `1` fully open. Not a delta. |

The asymmetric lower bound is the visible consequence of that last row: a
delta needs to go both ways, an absolute target does not.

## Why four dimensions and not seven

SO-101's arm has 5 DOF (6 joints, one of which is the gripper), and the IK
controller in this package solves for end-effector **position only**. A 6-dim
Cartesian pose target (position + orientation) is not something this
robot/controller pair can track, so orientation deltas are not part of the
action space at all.

This matters more than it might look. The upstream `gym-hil` design this was
ported from kept Panda's 7-dim `[dx, dy, dz, drx, dry, drz, grasp]` action
space and silently dropped `drx, dry, drz` inside the IK solver. Three of
seven dimensions were dead: a policy could spend capacity learning a
dependency on inputs that had zero effect on the simulation, and nothing in
the environment's interface said so.

Narrowing the space to what the controller can actually act on removes that
failure mode by construction. It was verified rather than assumed — the
`sim/check_dead_action_dims.py` script in the repository perturbs each
dimension and checks that the state responds: **0 of 4 dead**.

## The gripper is absolute, and that is a breaking change

`grasp` is written directly to the gripper actuator each step, mapped from the
normalized `[0, 1]` range onto the actuator's native radian `ctrlrange` by
[`gripper.normalized_to_ctrl`](api.md#lerobot_env_so101.gripper.normalized_to_ctrl).

!!! danger "Behaviour changed in v0.2.0"

    Before v0.2.0, `grasp` was a normalized **increment** added to the current
    gripper position each step, so `grasp=0` meant *"do not move the gripper"*.
    As of v0.2.0 it means *"close the gripper fully"*. Code written against the
    old convention will hold the gripper shut instead of leaving it alone.

There is one more wrinkle that is easy to miss: `grasp` as an **action** is
`[0, 1]`, but `gripper_pose` inside the **observation** is normalized to
`[-1, 1]`. They are different conventions on purpose — the observation keeps
the symmetric range inherited from the upstream port — but do not feed one
back into the other without rescaling.

## Using 7-dim teleop tooling

Teleop devices and HIL tooling written against the 7-dim Panda convention
still work, through
[`SevenDofToFourDofAdapter`](api.md#lerobot_env_so101.SevenDofToFourDofAdapter):

```python
import gymnasium as gym

import lerobot_env_so101
from lerobot_env_so101.wrappers import SevenDofToFourDofAdapter

env = SevenDofToFourDofAdapter(gym.make("lerobot_env_so101/SO101PickCube-v0"))
# env now accepts [dx, dy, dz, drx, dry, drz, grasp]
```

The wrapper discards `drx, dry, drz` (indices 3–5) and passes `grasp` through
unchanged. The distinction from the upstream behaviour is that the discard is
**documented in the wrapper's own docstring** and visible in the type it
advertises, rather than buried in the solver. New code should prefer the
native 4-dim space.

## Scaling deltas for RL

The default `action_scale=1.0` means an action component of `1.0` moves the
target by 1.0 metres, against a reachable workspace of at most 0.6 m. That
default is inherited from gym-hil, where actions came from human
teleoperation and were naturally small. For a policy sampling the full
`[-1, 1]` range, pass something proportionate:

```python
env = gym.make("lerobot_env_so101/SO101PickCube-v0", action_scale=0.025)
```

```bash
lerobot-eval --env.type=so101 --env.action_scale=0.025
```

`action_scale` affects position deltas only — `grasp` is absolute and
unaffected. See
[Action deltas default to unscaled metres](limitations.md#action-deltas-default-to-unscaled-metres)
for the full reasoning.
