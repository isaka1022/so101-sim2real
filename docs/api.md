# API reference

Generated from the source docstrings. The `SO101Env` lerobot config class is
not included here because importing it requires lerobot (and therefore torch);
its fields are documented in
[Using it with lerobot](lerobot-integration.md#config-fields).

## Environments

::: lerobot_env_so101.SO101PickCubeGymEnv

::: lerobot_env_so101.SO101GymEnv

::: lerobot_env_so101.MujocoGymEnv

::: lerobot_env_so101.GymRenderingSpec

## Wrappers

::: lerobot_env_so101.SevenDofToFourDofAdapter

## Gripper utilities

::: lerobot_env_so101.gripper.normalized_to_ctrl

::: lerobot_env_so101.gripper.ctrl_to_normalized

## Inverse kinematics

These back the position-only Cartesian control described in
[Action space](action-space.md#why-four-dimensions-and-not-seven). They are
internal to the environment rather than part of the intended public surface,
but are documented here because their behaviour explains several of the
[limitations](limitations.md).

::: lerobot_env_so101.ik_control.solve_ik

::: lerobot_env_so101.ik_control.compute_ik_levenberg_marquardt

::: lerobot_env_so101.ik_control.compute_ik_pseudoinverse
