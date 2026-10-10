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
Uses numerical IK to compute the target joint angles for a Cartesian target.
The angles are written to the arm's ``<position>`` actuators, which perform
proportional position tracking themselves (``kp`` only; damping comes from the
passive joint damping); this module computes no torques.

This approach avoids the problematic task-space inertia matrix and works well
for 5-DOF planar arms like SO-101.

Two task definitions share the solver. The default constrains the site
position only (3 rows). Passing ``approach_axis`` adds 2 rows that point one
axis of the site frame along ``approach_dir``; the rotation about that axis is
left free, because a 5-DOF arm cannot track a full orientation.
"""

import mujoco
import numpy as np

DOWN = np.asarray([0.0, 0.0, -1.0])

# Metres of position error that one radian of approach-axis tilt is traded
# against in the least-squares objective.
DEFAULT_ORIENTATION_WEIGHT = 0.1


def control_point(
    data: mujoco.MjData, site_id: int, point_offset: np.ndarray | None = None
) -> np.ndarray:
    """World position of the point the IK drives: the site origin plus a site-frame offset."""
    pos = data.site_xpos[site_id].copy()
    if point_offset is None:
        return pos
    return pos + data.site_xmat[site_id].reshape(3, 3) @ point_offset


def approach_tilt(
    data: mujoco.MjData, site_id: int, approach_axis: int, approach_dir: np.ndarray = DOWN
) -> float:
    """Angle in radians between a site axis and the direction it should point along."""
    axis = data.site_xmat[site_id].reshape(3, 3)[:, approach_axis]
    return float(np.arctan2(np.linalg.norm(np.cross(axis, approach_dir)), axis @ approach_dir))


def roll_to_align_axis(
    data: mujoco.MjData, site_id: int, joint_id: int, site_axis: int, direction: np.ndarray
) -> float:
    """Signed angle to add to a hinge joint so a site axis turns toward ``direction``.

    Both vectors are projected onto the plane normal to the joint axis, so the
    result is exact when the joint axis is the free rotation axis of the task
    and an approximation otherwise.
    """
    hinge = data.xaxis[joint_id]
    current = data.site_xmat[site_id].reshape(3, 3)[:, site_axis]
    current = current - (current @ hinge) * hinge
    wanted = direction - (direction @ hinge) * hinge
    return float(np.arctan2(np.cross(current, wanted) @ hinge, current @ wanted))


def _task_error_and_jacobian(
    model: mujoco.MjModel,
    data: mujoco.MjData,
    site_id: int,
    dof_ids: np.ndarray,
    target_pos: np.ndarray,
    point_offset: np.ndarray | None,
    approach_axis: int | None,
    approach_dir: np.ndarray,
    orientation_weight: float,
) -> tuple[np.ndarray, np.ndarray]:
    """Task-space error and Jacobian at the current ``data`` kinematics.

    Returns 3 rows (position) or, when ``approach_axis`` is given, 5 rows
    (position plus the two tilt components of that site axis).
    """
    J_v = np.zeros((3, model.nv))
    J_w = np.zeros((3, model.nv))
    if point_offset is None:
        error = target_pos - data.site_xpos[site_id].copy()
        mujoco.mj_jacSite(model, data, J_v, J_w, site_id)
    else:
        point = control_point(data, site_id, point_offset)
        error = target_pos - point
        mujoco.mj_jac(model, data, J_v, J_w, point, model.site_bodyid[site_id])
    J = J_v[:, dof_ids]
    if approach_axis is None:
        return error, J

    site_axes = data.site_xmat[site_id].reshape(3, 3)
    axis = site_axes[:, approach_axis]
    rotation = np.cross(axis, approach_dir)
    sin_tilt = np.linalg.norm(rotation)
    if sin_tilt > 1e-9:
        # Rotation vector taking the axis onto approach_dir, so the error stays
        # proportional to the angle beyond 90 degrees instead of shrinking.
        rotation *= np.arctan2(sin_tilt, axis @ approach_dir) / sin_tilt
    # Projecting on the two other site axes drops the rotation about the
    # approach axis itself, which is the unconstrained direction.
    tangent = np.delete(site_axes, approach_axis, axis=1).T
    error = np.concatenate([error, orientation_weight * (tangent @ rotation)])
    J = np.vstack([J, orientation_weight * (tangent @ J_w[:, dof_ids])])
    return error, J


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
    point_offset: np.ndarray | None = None,
    approach_axis: int | None = None,
    approach_dir: np.ndarray = DOWN,
    orientation_weight: float = DEFAULT_ORIENTATION_WEIGHT,
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
        point_offset: Offset of the controlled point from the site origin, in
            the site frame (3,). ``None`` controls the site origin.
        approach_axis: Index (0, 1, 2) of the site-frame axis to point along
            ``approach_dir``. ``None`` solves for position only.
        approach_dir: Unit world direction for the approach axis (3,)
        orientation_weight: Metres of position error equivalent to one radian
            of approach-axis tilt

    Returns:
        Target joint angles (n,)
    """
    q = current_q.copy()

    for _iteration in range(max_iterations):
        # Set joint angles and update kinematics
        data.qpos[dof_ids] = q
        mujoco.mj_forward(model, data)

        error, J = _task_error_and_jacobian(
            model,
            data,
            site_id,
            dof_ids,
            target_pos,
            point_offset,
            approach_axis,
            approach_dir,
            orientation_weight,
        )
        error_norm = np.linalg.norm(error)

        # Check convergence
        if error_norm < tolerance:
            break

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


def solve_ik(
    model: mujoco.MjModel,
    data: mujoco.MjData,
    site_id: int,
    dof_ids: np.ndarray,
    target_pos: np.ndarray,
    ik_method: str = "levenberg_marquardt",
    ik_damping: float = 0.1,
    ik_iterations: int = 20,
    seed_q: np.ndarray | None = None,
    point_offset: np.ndarray | None = None,
    approach_axis: int | None = None,
    approach_dir: np.ndarray = DOWN,
    orientation_weight: float = DEFAULT_ORIENTATION_WEIGHT,
) -> np.ndarray:
    """
    Solve for the joint angles that place the end-effector at a Cartesian target.

    The returned angles are the command for the arm's ``<position>`` actuators.

    Args:
        model: MuJoCo model
        data: MuJoCo data
        site_id: Site ID for end-effector
        dof_ids: DOF IDs for controlled joints
        target_pos: Desired Cartesian position (3,)
        ik_method: "levenberg_marquardt" or "pseudoinverse"
        ik_damping: Damping for LM (if used)
        ik_iterations: Max IK iterations
        seed_q: Joint angles the iteration starts from. Defaults to the
            current ``qpos``. The solver converges to the branch nearest the
            seed, so this is how a caller selects among redundant solutions.
        point_offset: Site-frame offset of the controlled point (3,)
        approach_axis: Site-frame axis index to point along ``approach_dir``;
            ``None`` solves for position only. Levenberg-Marquardt only.
        approach_dir: Unit world direction for the approach axis (3,)
        orientation_weight: Metres of position error per radian of tilt

    Returns:
        Target joint angles (len(dof_ids),)

    Raises:
        ValueError: If ``ik_method`` is not a known solver, or if a control
            point offset or approach axis is requested from the pseudoinverse
            solver.
    """
    current_q = data.qpos[dof_ids].copy()
    if seed_q is None:
        seed_q = current_q

    # Compute target joint angles via IK
    if ik_method == "levenberg_marquardt":
        target_q = compute_ik_levenberg_marquardt(
            model=model,
            data=data,
            site_id=site_id,
            dof_ids=dof_ids,
            target_pos=target_pos,
            current_q=seed_q,
            damping=ik_damping,
            max_iterations=ik_iterations,
            point_offset=point_offset,
            approach_axis=approach_axis,
            approach_dir=approach_dir,
            orientation_weight=orientation_weight,
        )
    elif ik_method == "pseudoinverse":
        if point_offset is not None or approach_axis is not None:
            raise ValueError("point_offset and approach_axis require ik_method='levenberg_marquardt'")
        target_q = compute_ik_pseudoinverse(
            model=model,
            data=data,
            site_id=site_id,
            dof_ids=dof_ids,
            target_pos=target_pos,
            current_q=seed_q,
            max_iterations=ik_iterations,
        )
    else:
        raise ValueError(f"Unknown IK method: {ik_method}")

    # Restore current state (IK changed qpos for computation)
    data.qpos[dof_ids] = current_q
    mujoco.mj_forward(model, data)

    return target_q
