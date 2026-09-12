// The 17-dim state observation the ONNX policy expects, a port of
// SO101GymEnv.get_robot_state + SO101PickCubeGymEnv._compute_observation.

import {
  ARM_JOINT_NAMES,
  EE_POS_SENSOR_NAME,
  GRIPPER_ACTUATOR_NAME,
  nameToId,
} from "./controller.js";

const BLOCK_POS_SENSOR_NAME = "block_pos";

export const OBS_FIELD_NAMES = [
  ...ARM_JOINT_NAMES.map((name) => `qpos_${name}`),
  ...ARM_JOINT_NAMES.map((name) => `qvel_${name}`),
  "gripper_pose",
  "ee_x",
  "ee_y",
  "ee_z",
  "block_x",
  "block_y",
  "block_z",
];
export const OBS_DIM = OBS_FIELD_NAMES.length;

/** Resolve the model ids `getObservation` reads, once per model. */
export function createObservationContext(mujoco, model) {
  const eeSensorId = nameToId(mujoco, model, "mjOBJ_SENSOR", EE_POS_SENSOR_NAME);
  const blockSensorId = nameToId(mujoco, model, "mjOBJ_SENSOR", BLOCK_POS_SENSOR_NAME);
  const gripperCtrlId = nameToId(mujoco, model, "mjOBJ_ACTUATOR", GRIPPER_ACTUATOR_NAME);
  return {
    armJointIds: ARM_JOINT_NAMES.map((name) => nameToId(mujoco, model, "mjOBJ_JOINT", name)),
    gripperCtrlId,
    gripperLo: model.actuator_ctrlrange[gripperCtrlId * 2],
    gripperHi: model.actuator_ctrlrange[gripperCtrlId * 2 + 1],
    eePosAdr: model.sensor_adr[eeSensorId],
    blockPosAdr: model.sensor_adr[blockSensorId],
  };
}

/**
 * @param {object} mujoco loaded MuJoCo wasm module (unused; kept for call symmetry)
 * @param {object} model MjModel
 * @param {object} data MjData
 * @param {ReturnType<typeof createObservationContext>} ctx
 * @returns {Float32Array} the observation in OBS_FIELD_NAMES order
 */
export function getObservation(mujoco, model, data, ctx) {
  const obs = new Float32Array(OBS_DIM);
  const n = ctx.armJointIds.length;

  for (let i = 0; i < n; i++) {
    obs[i] = data.qpos[ctx.armJointIds[i]];
    obs[n + i] = data.qvel[ctx.armJointIds[i]];
  }

  const gripperCtrl = data.ctrl[ctx.gripperCtrlId];
  obs[2 * n] = (2 * (gripperCtrl - ctx.gripperLo)) / (ctx.gripperHi - ctx.gripperLo) - 1;

  for (let axis = 0; axis < 3; axis++) {
    obs[2 * n + 1 + axis] = data.sensordata[ctx.eePosAdr + axis];
    obs[2 * n + 4 + axis] = data.sensordata[ctx.blockPosAdr + axis];
  }

  return obs;
}

/** Throw unless an exported policy's `obs_order` matches OBS_FIELD_NAMES. */
export function assertObsOrder(obsOrder, source = "policy") {
  if (!Array.isArray(obsOrder)) throw new Error(`${source}: obs_order metadata is missing`);
  const mismatch =
    obsOrder.length !== OBS_DIM || obsOrder.some((name, i) => name !== OBS_FIELD_NAMES[i]);
  if (mismatch) {
    throw new Error(
      `${source}: obs_order does not match the viewer's observation layout\n` +
        `  policy: ${obsOrder.join(", ")}\n  viewer: ${OBS_FIELD_NAMES.join(", ")}`
    );
  }
}
