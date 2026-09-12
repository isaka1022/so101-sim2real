// Cartesian position control, a port of
// lerobot_env_so101/mujoco_env.py::SO101GymEnv.apply_action and reset_robot.
// Physics stepping is left to the caller so the render loop owns the clock.

import { solveIk } from "./ik.js";

export const ARM_JOINT_NAMES = [
  "shoulder_pan",
  "shoulder_lift",
  "elbow_flex",
  "wrist_flex",
  "wrist_roll",
];
export const GRIPPER_ACTUATOR_NAME = "gripper";
export const EE_SITE_NAME = "gripperframe";
export const EE_POS_SENSOR_NAME = "so101/ee_pos";
export const BLOCK_JOINT_NAME = "block";
export const BLOCK_GEOM_NAME = "block";

export const CARTESIAN_BOUNDS = [
  [0.1, -0.3, 0.0],
  [0.5, 0.3, 0.4],
];
export const ZERO_ACTION_TOLERANCE = 1e-6;
export const N_SUBSTEPS = 50; // control_dt 0.1 s / physics_dt 0.002 s
export const HOME_POSITION = [0, 0, 0, 0, 0];

const IK_DAMPING = 0.1;
const IK_ITERATIONS = 20;

export function nameToId(mujoco, model, objType, name) {
  const id = mujoco.mj_name2id(model, mujoco.mjtObj[objType].value, name);
  if (id < 0) throw new Error(`${objType} "${name}" is not in the model`);
  return id;
}

/** Map a normalized gripper command in [0, 1] (0=closed, 1=open) to ctrl radians. */
export function normalizedToCtrl(norm, lo, hi) {
  // GRIPPER_CLOSED_AT_CTRL_LOW is false in lerobot_env_so101/gripper.py.
  const clipped = 1.0 - Math.min(Math.max(norm, 0.0), 1.0);
  return lo + clipped * (hi - lo);
}

/**
 * @param {object} mujoco loaded MuJoCo wasm module
 * @param {object} model MjModel
 * @param {object} data MjData
 * @param {{actionScale: number}} opts metres per unit position action
 */
export function createController(mujoco, model, data, { actionScale }) {
  if (!(actionScale > 0)) throw new Error(`actionScale must be positive, got ${actionScale}`);

  // Python indexes qpos/qvel/jnt_range with joint ids; for this model the arm
  // joints are scalar hinges declared first, so id == qposadr == dofadr.
  const armJointIds = ARM_JOINT_NAMES.map((name) => nameToId(mujoco, model, "mjOBJ_JOINT", name));
  const armCtrlIds = ARM_JOINT_NAMES.map((name) =>
    nameToId(mujoco, model, "mjOBJ_ACTUATOR", name)
  );
  const gripperCtrlId = nameToId(mujoco, model, "mjOBJ_ACTUATOR", GRIPPER_ACTUATOR_NAME);
  const eeSiteId = nameToId(mujoco, model, "mjOBJ_SITE", EE_SITE_NAME);
  const eePosSensorId = nameToId(mujoco, model, "mjOBJ_SENSOR", EE_POS_SENSOR_NAME);
  const eePosAdr = model.sensor_adr[eePosSensorId];
  const gripperLo = model.actuator_ctrlrange[gripperCtrlId * 2];
  const gripperHi = model.actuator_ctrlrange[gripperCtrlId * 2 + 1];

  const targetEePos = new Float64Array(3);
  let lastActionWasZero = false;

  function reset() {
    mujoco.mj_resetData(model, data);
    for (let i = 0; i < armJointIds.length; i++) {
      data.qpos[armJointIds[i]] = HOME_POSITION[i];
      data.ctrl[armCtrlIds[i]] = HOME_POSITION[i];
    }
    mujoco.mj_forward(model, data);
    for (let axis = 0; axis < 3; axis++) targetEePos[axis] = data.sensordata[eePosAdr + axis];
    lastActionWasZero = false;
  }

  function applyAction(action) {
    const [x, y, z, graspCommand] = action;

    // Zero-action detection uses the raw input, so the hold behaviour does not
    // depend on actionScale.
    const rawNorm = Math.sqrt(x * x + y * y + z * z);
    const actionIsZero = rawNorm < ZERO_ACTION_TOLERANCE;

    if (actionIsZero && !lastActionWasZero) {
      for (let axis = 0; axis < 3; axis++) targetEePos[axis] = data.site_xpos[eeSiteId * 3 + axis];
    } else if (!actionIsZero) {
      targetEePos[0] += x * actionScale;
      targetEePos[1] += y * actionScale;
      targetEePos[2] += z * actionScale;
    }
    lastActionWasZero = actionIsZero;

    for (let axis = 0; axis < 3; axis++) {
      targetEePos[axis] = Math.min(
        Math.max(targetEePos[axis], CARTESIAN_BOUNDS[0][axis]),
        CARTESIAN_BOUNDS[1][axis]
      );
    }

    data.ctrl[gripperCtrlId] = normalizedToCtrl(graspCommand, gripperLo, gripperHi);

    const targetQ = solveIk(mujoco, model, data, eeSiteId, armJointIds, targetEePos, {
      damping: IK_DAMPING,
      maxIterations: IK_ITERATIONS,
    });
    for (let i = 0; i < armCtrlIds.length; i++) {
      const ctrlId = armCtrlIds[i];
      const lo = model.actuator_ctrlrange[ctrlId * 2];
      const hi = model.actuator_ctrlrange[ctrlId * 2 + 1];
      data.ctrl[ctrlId] = Math.min(Math.max(targetQ[i], lo), hi);
    }
    return targetQ;
  }

  return { reset, applyAction, armJointIds, armCtrlIds, eeSiteId, targetEePos };
}
