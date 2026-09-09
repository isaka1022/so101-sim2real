import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import loadMujoco from "@mujoco/mujoco";
import { buildRobotScene, updateRobotScene } from "./scene.js";
import { createControlPanel } from "./ui.js";

const MODEL_BASE = "./model";
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

  const jointListEl = document.getElementById("joint-list");
  const pauseBtn = document.getElementById("btn-pause");
  const resetBtn = document.getElementById("btn-reset");
  const statusLineEl = document.getElementById("status-line");

  let paused = false;
  const panel = createControlPanel({
    mujoco,
    model,
    data,
    jointListEl,
    pauseBtn,
    resetBtn,
    statusLineEl,
    onReset: () => mujoco.mj_resetData(model, data),
    onTogglePause: (p) => {
      paused = p;
    },
  });
  panel.setStatus(`${model.ngeom} geoms · ${model.nu} actuators · timestep ${PHYSICS_TIMESTEP}s`);

  loadingOverlay.classList.add("hidden");

  let lastTime = performance.now();
  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    let dt = (now - lastTime) / 1000;
    lastTime = now;

    if (!paused) {
      dt = Math.min(dt, MAX_STEPS_PER_FRAME * PHYSICS_TIMESTEP);
      let steps = Math.round(dt / PHYSICS_TIMESTEP);
      steps = Math.min(steps, MAX_STEPS_PER_FRAME);
      for (let i = 0; i < steps; i++) {
        mujoco.mj_step(model, data);
      }
    }

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
