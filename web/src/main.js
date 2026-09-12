import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import loadMujoco from "@mujoco/mujoco";
import { buildRobotScene, updateRobotScene } from "./scene.js";
import { createControlPanel } from "./ui.js";
import {
  BLOCK_GEOM_NAME,
  BLOCK_JOINT_NAME,
  N_SUBSTEPS,
  createController,
  nameToId,
} from "./controller.js";
import { OBS_FIELD_NAMES, createObservationContext, getObservation } from "./observation.js";
import { loadPolicy, loadPolicyManifest, runPolicy } from "./policy.js";

const MODEL_BASE = "./model";
const POLICY_MANIFEST = "./policies/manifest.json";
const SCENE_XML = "pick_scene.xml";
const ARM_XML = "so101_new_calib.xml";
const MESH_FILES = [
  "base_motor_holder_so101_v1.stl",
  "base_so101_v2.stl",
  "motor_holder_so101_base_v1.stl",
  "motor_holder_so101_wrist_v1.stl",
  "moving_jaw_so101_v1.stl",
  "rotation_pitch_so101_v1.stl",
  "sts3215_03a_no_horn_v1.stl",
  "sts3215_03a_v1.stl",
  "under_arm_so101_v1.stl",
  "upper_arm_so101_v1.stl",
  "waveshare_mounting_plate_so101_v2.stl",
  "wrist_roll_follower_so101_v1.stl",
  "wrist_roll_pitch_so101_v2.stl",
];

const PHYSICS_TIMESTEP = 0.002; // must match <option timestep> in pick_scene.xml
const MAX_STEPS_PER_FRAME = 25; // guards against a spiral of death after a tab is backgrounded

// _SAMPLING_BOUNDS from lerobot_env_so101/pick_env.py: the block xy box a reset
// draws from.
const SAMPLING_BOUNDS = [
  [0.2, -0.1],
  [0.4, 0.1],
];
const TELEMETRY_INTERVAL_MS = 2000;
const EE_X = OBS_FIELD_NAMES.indexOf("ee_x");
const BLOCK_X = OBS_FIELD_NAMES.indexOf("block_x");

const loadingOverlay = document.getElementById("loading-overlay");
const loadingText = document.getElementById("loading-text");
const errorBanner = document.getElementById("error-banner");
const viewport = document.getElementById("viewport");

function setLoadingText(text) {
  loadingText.textContent = text;
}

function showError(message, err) {
  console.error(message, err);
  errorBanner.textContent = `${message}${err ? `: ${err.message || err}` : ""}`;
  errorBanner.style.display = "block";
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.text();
}

async function fetchBytes(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return new Uint8Array(await res.arrayBuffer());
}

async function loadModelIntoFS(mujoco) {
  mujoco.FS.mkdirTree("/model/assets");

  const [sceneXml, armXml] = await Promise.all([
    fetchText(`${MODEL_BASE}/${SCENE_XML}`),
    fetchText(`${MODEL_BASE}/${ARM_XML}`),
  ]);
  mujoco.FS.writeFile(`/model/${SCENE_XML}`, sceneXml);
  mujoco.FS.writeFile(`/model/${ARM_XML}`, armXml);

  setLoadingText(`Loading meshes (0/${MESH_FILES.length})…`);
  let loaded = 0;
  await Promise.all(
    MESH_FILES.map(async (name) => {
      const bytes = await fetchBytes(`${MODEL_BASE}/assets/${name}`);
      mujoco.FS.writeFile(`/model/assets/${name}`, bytes);
      loaded += 1;
      setLoadingText(`Loading meshes (${loaded}/${MESH_FILES.length})…`);
    })
  );
}

function setupThree() {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(viewport.clientWidth, viewport.clientHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  viewport.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x11151a);

  const camera = new THREE.PerspectiveCamera(
    45,
    viewport.clientWidth / viewport.clientHeight,
    0.01,
    50
  );
  camera.position.set(0.9, 0.7, 0.9);

  // MuJoCo models are Z-up; Three.js defaults to Y-up. Rotate a wrapper group
  // instead of every object so raw geom_xpos/geom_xmat values can be used as-is.
  const world = new THREE.Group();
  world.rotation.x = -Math.PI / 2;
  scene.add(world);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 1.0);
  scene.add(hemi);
  const dir = new THREE.DirectionalLight(0xffffff, 2.0);
  dir.position.set(2, 4, 3);
  scene.add(dir);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0.15, 0.15, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.update();

  function onResize() {
    const w = viewport.clientWidth;
    const h = viewport.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener("resize", onResize);

  return { renderer, scene, camera, world, controls };
}

async function main() {
  let mujoco;
  try {
    setLoadingText("Loading MuJoCo (~10MB WebAssembly)…");
    mujoco = await loadMujoco();
  } catch (err) {
    showError("Failed to load MuJoCo WASM module", err);
    return;
  }

  try {
    await loadModelIntoFS(mujoco);
  } catch (err) {
    showError("Failed to fetch model assets", err);
    return;
  }

  setLoadingText("Compiling model…");
  let model;
  let data;
  try {
    model = mujoco.MjModel.from_xml_path(`/model/${SCENE_XML}`);
    data = new mujoco.MjData(model);
  } catch (err) {
    showError("Failed to load MJCF model", err);
    return;
  }

  const { renderer, scene, camera, world, controls } = setupThree();
  const { root, geomMeshes } = buildRobotScene(mujoco, model);
  world.add(root);

  // Recreated when a policy loads: action_scale is baked into the controller.
  let controller = createController(mujoco, model, data, { actionScale: 1.0 });
  const obsCtx = createObservationContext(mujoco, model);
  const blockQposAdr = model.jnt_qposadr[nameToId(mujoco, model, "mjOBJ_JOINT", BLOCK_JOINT_NAME)];
  const blockDofAdr = model.jnt_dofadr[nameToId(mujoco, model, "mjOBJ_JOINT", BLOCK_JOINT_NAME)];
  const blockZ = model.geom_size[nameToId(mujoco, model, "mjOBJ_GEOM", BLOCK_GEOM_NAME) * 3 + 2];
  let blockXy = [0.3, 0.0]; // <body name="block" pos> in pick_scene.xml

  function placeBlock(xy) {
    blockXy = xy;
    data.qpos[blockQposAdr] = xy[0];
    data.qpos[blockQposAdr + 1] = xy[1];
    data.qpos[blockQposAdr + 2] = blockZ;
    data.qpos[blockQposAdr + 3] = 1;
    for (let i = 4; i < 7; i++) data.qpos[blockQposAdr + i] = 0;
    for (let i = 0; i < 6; i++) data.qvel[blockDofAdr + i] = 0;
    mujoco.mj_forward(model, data);
  }

  // Mirrors SO101PickCubeGymEnv.reset: home the arm, then place the block. The
  // policy is trained only on episodes that start from home with the gripper
  // open, so moving the block under a closed gripper leaves it saturated.
  function resetScene(xy = blockXy) {
    generation += 1;
    inferenceInFlight = false;
    controller.reset();
    placeBlock(xy);
    substepsSinceAction = N_SUBSTEPS;
    panel.syncSlidersFromCtrl();
  }

  const jointListEl = document.getElementById("joint-list");
  const pauseBtn = document.getElementById("btn-pause");
  const resetBtn = document.getElementById("btn-reset");
  const statusLineEl = document.getElementById("status-line");
  const policySelectEl = document.getElementById("policy-select");
  const randomizeBtn = document.getElementById("btn-randomize-block");

  let paused = false;
  let policy = null;
  let inferenceInFlight = false;
  // Bumped by resetScene and selectPolicy; a pending load or inference that
  // started under an older generation discards its result.
  let generation = 0;
  let substepsSinceAction = N_SUBSTEPS;
  let inferenceCount = 0;
  let inferenceTotalMs = 0;
  let frameCount = 0;
  let telemetryAt = performance.now();

  const panel = createControlPanel({
    mujoco,
    model,
    data,
    jointListEl,
    pauseBtn,
    resetBtn,
    statusLineEl,
    policySelectEl,
    randomizeBtn,
    onReset: () => resetScene(),
    onRandomizeBlock: () =>
      resetScene([
        SAMPLING_BOUNDS[0][0] + Math.random() * (SAMPLING_BOUNDS[1][0] - SAMPLING_BOUNDS[0][0]),
        SAMPLING_BOUNDS[0][1] + Math.random() * (SAMPLING_BOUNDS[1][1] - SAMPLING_BOUNDS[0][1]),
      ]),
    onSelectPolicy: (entry) => {
      selectPolicy(entry).catch((err) => showError("Failed to load policy", err));
    },
    onTogglePause: (p) => {
      paused = p;
    },
  });
  const baseStatus = `${model.ngeom} geoms · ${model.nu} actuators · timestep ${PHYSICS_TIMESTEP}s`;
  panel.setStatus(baseStatus);

  function deactivatePolicy() {
    policy = null;
    inferenceInFlight = false;
    controller = createController(mujoco, model, data, { actionScale: 1.0 });
    panel.clearPolicySelection();
    panel.setSlidersEnabled(true);
    panel.setStatus(baseStatus);
  }

  async function selectPolicy(entry) {
    const myGeneration = ++generation;
    policy = null;
    inferenceInFlight = false;
    inferenceCount = 0;
    inferenceTotalMs = 0;
    if (!entry) {
      deactivatePolicy();
      return;
    }

    panel.setSlidersEnabled(false);
    panel.setStatus(`Loading ${entry.name}…`);
    let loaded;
    try {
      loaded = await loadPolicy(entry);
    } catch (err) {
      if (myGeneration === generation) deactivatePolicy();
      throw err;
    }
    if (myGeneration !== generation) return; // the user moved on while loading
    // The scale the policy was trained at; the env default of 1.0 would turn
    // every output into a workspace-saturating jump.
    controller = createController(mujoco, model, data, { actionScale: loaded.actionScale });
    policy = { ...loaded, name: entry.name };
    resetScene();
    panel.setStatus(`${entry.name} · action_scale ${loaded.actionScale} · env ${loaded.envVersion}`);
    console.log(
      `[policy] ${entry.name} loaded (train_commit ${loaded.trainCommit}, action_scale ${loaded.actionScale})`
    );
  }

  try {
    panel.setPolicies(await loadPolicyManifest(POLICY_MANIFEST));
  } catch (err) {
    console.warn("No policies available", err);
  }

  resetScene();
  loadingOverlay.classList.add("hidden");

  function eeToBlockDistance() {
    const obs = getObservation(mujoco, model, data, obsCtx);
    return Math.hypot(
      obs[BLOCK_X] - obs[EE_X],
      obs[BLOCK_X + 1] - obs[EE_X + 1],
      obs[BLOCK_X + 2] - obs[EE_X + 2]
    );
  }

  function startInference() {
    inferenceInFlight = true;
    const obs = getObservation(mujoco, model, data, obsCtx);
    const startedAt = performance.now();
    const active = policy;
    const myGeneration = generation;
    const stale = () => policy !== active || myGeneration !== generation;
    runPolicy(active.session, obs)
      .then((action) => {
        // A result that arrives while paused is dropped; substepsSinceAction is
        // still at the boundary, so the next resumed frame re-infers.
        if (stale() || paused) return;
        inferenceTotalMs += performance.now() - startedAt;
        inferenceCount += 1;
        controller.applyAction(action);
        substepsSinceAction = 0;
        panel.syncSlidersFromCtrl();
      })
      .catch((err) => {
        showError("Policy inference failed", err);
        if (!stale()) deactivatePolicy();
      })
      .finally(() => {
        if (!stale()) inferenceInFlight = false;
      });
  }

  function reportTelemetry(now) {
    const elapsed = (now - telemetryAt) / 1000;
    const fps = frameCount / elapsed;
    const meanMs = inferenceCount > 0 ? inferenceTotalMs / inferenceCount : 0;
    console.log(
      `[policy] ${policy.name} · inference ${meanMs.toFixed(2)} ms (mean of ${inferenceCount}) · ` +
        `${fps.toFixed(1)} fps · ee→block ${eeToBlockDistance().toFixed(4)} m`
    );
    frameCount = 0;
    telemetryAt = now;
  }

  let lastTime = performance.now();
  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    let dt = (now - lastTime) / 1000;
    lastTime = now;
    frameCount += 1;

    if (!paused) {
      dt = Math.min(dt, MAX_STEPS_PER_FRAME * PHYSICS_TIMESTEP);
      let steps = Math.min(Math.round(dt / PHYSICS_TIMESTEP), MAX_STEPS_PER_FRAME);

      if (policy) {
        // One inference per control step, and no queue: while one is in flight
        // the clock simply stops.
        while (steps > 0 && !inferenceInFlight) {
          if (substepsSinceAction >= N_SUBSTEPS) {
            startInference();
            break;
          }
          mujoco.mj_step(model, data);
          substepsSinceAction += 1;
          steps -= 1;
        }
      } else {
        for (let i = 0; i < steps; i++) mujoco.mj_step(model, data);
      }
    }

    if (policy && now - telemetryAt >= TELEMETRY_INTERVAL_MS) reportTelemetry(now);

    updateRobotScene(data, geomMeshes);
    controls.update();
    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);

  window.addEventListener("beforeunload", () => {
    data.delete();
    model.delete();
  });
}

main();
