// Checks the browser controller against the Python env's recorded trajectory
// (web/tests/golden.json, written by sim/generate_golden.py).
//
// The viewer loads decimated collision meshes, so integrated physics cannot
// match the package bit for bit. Only the per-step control quantities are
// asserted; the post-step qpos difference is reported as a number.

import loadMujoco from "@mujoco/mujoco";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { createController, nameToId } from "../src/controller.js";
import { createObservationContext, getObservation } from "../src/observation.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(WEB_ROOT, "..");
const MODEL_SRC = path.join(REPO_ROOT, "packages/lerobot_env_so101/lerobot_env_so101/assets");
const MESHES_SRC = path.join(WEB_ROOT, "assets/meshes");
const SCENE_XML = "pick_scene.xml";

const TARGET_Q_ATOL = 1e-4;
const TARGET_POS_ATOL = 1e-4;
const OBS_ATOL = 1e-5;
const GRIPPER_CTRL_ATOL = 1e-9;

function maxAbsDiff(a, b) {
  let worst = 0;
  for (let i = 0; i < a.length; i++) worst = Math.max(worst, Math.abs(a[i] - b[i]));
  return worst;
}

function loadModelIntoFs(mujoco) {
  mujoco.FS.mkdirTree("/model/assets");
  for (const name of [SCENE_XML, "so101_new_calib.xml"]) {
    mujoco.FS.writeFile(`/model/${name}`, fs.readFileSync(path.join(MODEL_SRC, name), "utf8"));
  }
  for (const name of fs.readdirSync(MESHES_SRC).filter((f) => f.endsWith(".stl"))) {
    mujoco.FS.writeFile(`/model/assets/${name}`, fs.readFileSync(path.join(MESHES_SRC, name)));
  }
}

function setState(data, qpos, qvel, ctrl) {
  for (let i = 0; i < qpos.length; i++) data.qpos[i] = qpos[i];
  for (let i = 0; i < qvel.length; i++) data.qvel[i] = qvel[i];
  for (let i = 0; i < ctrl.length; i++) data.ctrl[i] = ctrl[i];
}

async function main() {
  const golden = JSON.parse(fs.readFileSync(path.join(__dirname, "golden.json"), "utf8"));
  const mujoco = await loadMujoco();
  loadModelIntoFs(mujoco);

  const model = mujoco.MjModel.from_xml_path(`/model/${SCENE_XML}`);
  const data = new mujoco.MjData(model);

  const controller = createController(mujoco, model, data, { actionScale: golden.action_scale });
  const obsCtx = createObservationContext(mujoco, model);
  const blockQposAdr = model.jnt_qposadr[nameToId(mujoco, model, "mjOBJ_JOINT", "block")];
  const gripperCtrlId = nameToId(mujoco, model, "mjOBJ_ACTUATOR", "gripper");
  const eeSiteId = controller.eeSiteId;

  // Same order as SO101PickCubeGymEnv.reset: reset the robot first, then place
  // the block, so the IK target read from the ee sensor matches.
  controller.reset();
  const first = golden.steps[0].qpos_before;
  for (let i = 0; i < 7; i++) data.qpos[blockQposAdr + i] = first[blockQposAdr + i];
  mujoco.mj_forward(model, data);

  const worst = { targetPos: 0, targetQ: 0, gripperCtrl: 0, obs: 0, obsStaleness: 0, qposDrift: 0 };

  for (const [index, step] of golden.steps.entries()) {
    setState(data, step.qpos_before, step.qvel_before, step.ctrl_before);
    mujoco.mj_forward(model, data);

    const obs = getObservation(mujoco, model, data, obsCtx);
    worst.obs = Math.max(worst.obs, maxAbsDiff(obs, step.obs_fresh));
    worst.obsStaleness = Math.max(worst.obsStaleness, maxAbsDiff(step.obs, step.obs_fresh));

    // mj_forward above refreshed site_xpos, but the env's zero-action lock read
    // the value mj_step left one physics timestep behind qpos. Put it back.
    for (let axis = 0; axis < 3; axis++) {
      data.site_xpos[eeSiteId * 3 + axis] = step.ee_site_xpos_before[axis];
    }

    controller.applyAction(step.action);

    worst.targetPos = Math.max(worst.targetPos, maxAbsDiff(controller.targetEePos, step.target_pos));
    const targetQ = controller.armCtrlIds.map((id) => data.ctrl[id]);
    worst.targetQ = Math.max(worst.targetQ, maxAbsDiff(targetQ, step.target_q));
    worst.gripperCtrl = Math.max(
      worst.gripperCtrl,
      Math.abs(data.ctrl[gripperCtrlId] - step.ctrl_after[gripperCtrlId])
    );

    // Post-step drift: run the recorded post-apply ctrl forward and compare.
    setState(data, step.qpos_before, step.qvel_before, step.ctrl_after);
    for (let i = 0; i < golden.n_substeps; i++) mujoco.mj_step(model, data);
    const drift = maxAbsDiff(data.qpos, step.qpos_after);
    worst.qposDrift = Math.max(worst.qposDrift, drift);
    if (process.env.GOLDEN_VERBOSE === "1") {
      console.log(index, "tp", maxAbsDiff(controller.targetEePos, step.target_pos).toExponential(2),
        "tq", maxAbsDiff(targetQ, step.target_q).toExponential(2), "drift", drift.toExponential(2));
    }
  }

  data.delete();
  model.delete();

  const checks = [
    ["target_pos", worst.targetPos, TARGET_POS_ATOL],
    ["target_q", worst.targetQ, TARGET_Q_ATOL],
    ["gripper ctrl", worst.gripperCtrl, GRIPPER_CTRL_ATOL],
    ["obs", worst.obs, OBS_ATOL],
  ];
  console.log(`golden: ${golden.steps.length} steps, seed ${golden.seed}, action_scale ${golden.action_scale}`);
  let failed = false;
  for (const [name, error, atol] of checks) {
    const ok = error <= atol;
    failed = failed || !ok;
    console.log(`  ${ok ? "ok  " : "FAIL"} ${name}: max abs error ${error.toExponential(3)} (atol ${atol})`);
  }
  console.log(`  info  max post-step qpos drift (decimated meshes): ${worst.qposDrift.toExponential(3)}`);
  console.log(`  info  max Python obs staleness (obs vs obs_fresh): ${worst.obsStaleness.toExponential(3)}`);

  if (failed) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
