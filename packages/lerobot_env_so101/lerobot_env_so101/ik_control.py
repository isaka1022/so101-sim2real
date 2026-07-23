#!/usr/bin/env python3

# Copyright 2024 The HuggingFace Inc. team. All rights reserved.
# Copyright 2026 Amane INOUE.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Inverse kinematics control for the SO-101 arm.

Ported from lohpaul9/gym-hil (Apache-2.0, `SO-101` branch,
https://github.com/huggingface/gym-hil/pull/36), authored by Paul Loh
(github.com/lohpaul9).

Based on: https://alefram.github.io/posts/Basic-inverse-kinematics-in-Mujoco
Uses numerical IK to compute target joint angles, then applies joint-space PD control.

This approach avoids the problematic task-space inertia matrix and works well
for 5-DOF planar arms like SO-101.
"""

import mujoco
import numpy as np


def compute_ik_levenberg_marquardt(
    model: mujoco.MjModel,
    data: mujoco.MjData,
    site_id: int,
    dof_ids: np.ndarray,
    target_pos: np.ndarray,
    current_q: np.ndarray,
    damping: float = 0.1,
    max_iterations: int = 20,
    tolerance: float = 1e-4,
) -> np.ndarray:
    """
    Compute target joint angles using Levenberg-Marquardt IK.

    Args:
        model: MuJoCo model
        data: MuJoCo data
        site_id: Site ID for end-effector
        dof_ids: DOF IDs for controlled joints
        target_pos: Desired Cartesian position (3,)
        current_q: Current joint angles (n,)
        damping: Damping factor (lambda in LM algorithm)
        max_iterations: Maximum IK iterations
        tolerance: Convergence tolerance

    Returns:
        Target joint angles (n,)
    """
    q = current_q.copy()

    for _iteration in range(max_iterations):
        # Set joint angles and update kinematics
        data.qpos[dof_ids] = q
        mujoco.mj_forward(model, data)

        # Compute error
        current_pos = data.site_xpos[site_id].copy()
        error = target_pos - current_pos
        error_norm = np.linalg.norm(error)

        # Check convergence
        if error_norm < tolerance:
            break

        # Compute Jacobian (position part only)
        J_v = np.zeros((3, model.nv))
        J_w = np.zeros((3, model.nv))
        mujoco.mj_jacSite(model, data, J_v, J_w, site_id)
        J = J_v[:, dof_ids]  # Only position Jacobian, only relevant DOFs

        # Levenberg-Marquardt update: delta_q = (J^T*J + λI)^-1 * J^T * error
        JTJ = J.T @ J
        lambda_I = damping * np.eye(len(dof_ids))
        delta_q = np.linalg.solve(JTJ + lambda_I, J.T @ error)

        # Update joint angles
        q = q + delta_q

        # Optional: enforce joint limits
        for i, dof_id in enumerate(dof_ids):
            joint_range = model.jnt_range[dof_id]
            if joint_range[0] < joint_range[1]:  # Has limits
                q[i] = np.clip(q[i], joint_range[0], joint_range[1])

    return q


def compute_ik_pseudoinverse(
    model: mujoco.MjModel,
    data: mujoco.MjData,
    site_id: int,
    dof_ids: np.ndarray,
    target_pos: np.ndarray,
    current_q: np.ndarray,
    max_iterations: int = 20,
    tolerance: float = 1e-4,
    step_size: float = 1.0,
) -> np.ndarray:
    """
    Compute target joint angles using pseudoinverse (Gauss-Newton) IK.

    Faster but less robust than Levenberg-Marquardt.
    """
    q = current_q.copy()

    for _iteration in range(max_iterations):
        data.qpos[dof_ids] = q
        mujoco.mj_forward(model, data)

        current_pos = data.site_xpos[site_id].copy()
        error = target_pos - current_pos

        if np.linalg.norm(error) < tolerance:
            break

        J_v = np.zeros((3, model.nv))
        J_w = np.zeros((3, model.nv))
        mujoco.mj_jacSite(model, data, J_v, J_w, site_id)
        J = J_v[:, dof_ids]

        # Pseudoinverse update: delta_q = J^† * error
        J_pinv = np.linalg.pinv(J)
        delta_q = J_pinv @ error

        q = q + step_size * delta_q

    return q


def ik_control(
    model: mujoco.MjModel,
    data: mujoco.MjData,
    site_id: int,
    dof_ids: np.ndarray,
    target_pos: np.ndarray,
    joint_kp: float = 200.0,
    joint_kd: float = 20.0,
    ik_method: str = "levenberg_marquardt",
    ik_damping: float = 0.1,
    ik_iterations: int = 20,
    gravity_comp: bool = True,
) -> np.ndarray:
    """
    IK-based Cartesian control: Compute target joint angles via IK,
    then apply joint-space PD control.

    Args:
        model: MuJoCo model
        data: MuJoCo data
        site_id: Site ID for end-effector
        dof_ids: DOF IDs for controlled joints
        target_pos: Desired Cartesian position (3,)
        joint_kp: Joint-space proportional gain
        joint_kd: Joint-space derivative gain
        ik_method: "levenberg_marquardt" or "pseudoinverse"
        ik_damping: Damping for LM (if used)
        ik_iterations: Max IK iterations
        gravity_comp: Whether to add gravity compensation

    Returns:
        Joint torques (len(dof_ids),)
    """
    # Get current state
    current_q = data.qpos[dof_ids].copy()
    current_dq = data.qvel[dof_ids].copy()

    # Compute target joint angles via IK
    if ik_method == "levenberg_marquardt":
        target_q = compute_ik_levenberg_marquardt(
            model=model,
            data=data,
            site_id=site_id,
            dof_ids=dof_ids,
            target_pos=target_pos,
            current_q=current_q,
            damping=ik_damping,
            max_iterations=ik_iterations,
        )
    elif ik_method == "pseudoinverse":
        target_q = compute_ik_pseudoinverse(
            model=model,
            data=data,
            site_id=site_id,
            dof_ids=dof_ids,
            target_pos=target_pos,
            current_q=current_q,
            max_iterations=ik_iterations,
        )
    else:
        raise ValueError(f"Unknown IK method: {ik_method}")

    # Restore current state (IK changed qpos for computation)
    data.qpos[dof_ids] = current_q
    mujoco.mj_forward(model, data)

    # Joint-space PD control
    q_error = target_q - current_q
    tau = joint_kp * q_error - joint_kd * current_dq

    # Gravity compensation
    if gravity_comp:
        tau += data.qfrc_bias[dof_ids]

    return tau
