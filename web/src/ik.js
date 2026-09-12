// Levenberg-Marquardt position IK, a port of
// lerobot_env_so101/ik_control.py::compute_ik_levenberg_marquardt. Numbers must
// match the Python solver step for step; see web/tests/check_golden.mjs.

const DEFAULT_DAMPING = 0.1;
const DEFAULT_MAX_ITERATIONS = 20;
const DEFAULT_TOLERANCE = 1e-4;

/** Solve `A x = b` in place by Gauss elimination with partial pivoting. */
function solveLinearSystem(A, b, n) {
  for (let col = 0; col < n; col++) {
    let pivot = col;
    let best = Math.abs(A[col * n + col]);
    for (let row = col + 1; row < n; row++) {
      const candidate = Math.abs(A[row * n + col]);
      if (candidate > best) {
        best = candidate;
        pivot = row;
      }
    }
    if (best === 0) throw new Error("IK normal equations are singular");

    if (pivot !== col) {
      for (let k = col; k < n; k++) {
        const tmp = A[col * n + k];
        A[col * n + k] = A[pivot * n + k];
        A[pivot * n + k] = tmp;
      }
      const tmp = b[col];
      b[col] = b[pivot];
      b[pivot] = tmp;
    }

    const diag = A[col * n + col];
    for (let row = col + 1; row < n; row++) {
      const factor = A[row * n + col] / diag;
      if (factor === 0) continue;
      for (let k = col; k < n; k++) A[row * n + k] -= factor * A[col * n + k];
      b[row] -= factor * b[col];
    }
  }

  const x = new Float64Array(n);
  for (let row = n - 1; row >= 0; row--) {
    let sum = b[row];
    for (let k = row + 1; k < n; k++) sum -= A[row * n + k] * x[k];
    x[row] = sum / A[row * n + row];
  }
  return x;
}

/**
 * Joint angles that put `siteId` at `targetPos`, for the joints in `dofIds`.
 *
 * `data.qpos` is used as scratch and restored (followed by `mj_forward`) before
 * returning, exactly as Python's `solve_ik` does.
 *
 * @param {object} mujoco loaded MuJoCo wasm module
 * @param {object} model MjModel
 * @param {object} data MjData
 * @param {number} siteId end-effector site id
 * @param {ArrayLike<number>} dofIds joint ids of the controlled joints
 * @param {ArrayLike<number>} targetPos desired Cartesian position (3)
 * @returns {Float64Array} target joint angles (dofIds.length)
 */
export function solveIk(
  mujoco,
  model,
  data,
  siteId,
  dofIds,
  targetPos,
  { damping = DEFAULT_DAMPING, maxIterations = DEFAULT_MAX_ITERATIONS, tolerance = DEFAULT_TOLERANCE } = {}
) {
  const n = dofIds.length;
  const nv = model.nv;

  const currentQ = new Float64Array(n);
  for (let i = 0; i < n; i++) currentQ[i] = data.qpos[dofIds[i]];
  const q = Float64Array.from(currentQ);

  const jacp = new mujoco.DoubleBuffer(3 * nv);
  const jacr = new mujoco.DoubleBuffer(3 * nv);
  const J = new Float64Array(3 * n);
  const JTJ = new Float64Array(n * n);
  const rhs = new Float64Array(n);
  const error = new Float64Array(3);

  try {
    for (let iteration = 0; iteration < maxIterations; iteration++) {
      for (let i = 0; i < n; i++) data.qpos[dofIds[i]] = q[i];
      mujoco.mj_forward(model, data);

      let errorNorm = 0;
      for (let axis = 0; axis < 3; axis++) {
        error[axis] = targetPos[axis] - data.site_xpos[siteId * 3 + axis];
        errorNorm += error[axis] * error[axis];
      }
      if (Math.sqrt(errorNorm) < tolerance) break;

      mujoco.mj_jacSite(model, data, jacp, jacr, siteId);
      const jacpView = jacp.GetView();
      for (let row = 0; row < 3; row++) {
        for (let i = 0; i < n; i++) J[row * n + i] = jacpView[row * nv + dofIds[i]];
      }

      for (let i = 0; i < n; i++) {
        let acc = 0;
        for (let row = 0; row < 3; row++) acc += J[row * n + i] * error[row];
        rhs[i] = acc;
        for (let j = 0; j < n; j++) {
          let dot = 0;
          for (let row = 0; row < 3; row++) dot += J[row * n + i] * J[row * n + j];
          JTJ[i * n + j] = dot + (i === j ? damping : 0);
        }
      }

      const deltaQ = solveLinearSystem(JTJ, rhs, n);
      for (let i = 0; i < n; i++) {
        let value = q[i] + deltaQ[i];
        const lo = model.jnt_range[dofIds[i] * 2];
        const hi = model.jnt_range[dofIds[i] * 2 + 1];
        if (lo < hi) value = Math.min(Math.max(value, lo), hi);
        q[i] = value;
      }
    }
  } finally {
    jacp.delete();
    jacr.delete();
  }

  for (let i = 0; i < n; i++) data.qpos[dofIds[i]] = currentQ[i];
  mujoco.mj_forward(model, data);

  return q;
}
