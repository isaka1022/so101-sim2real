// Bundles the SO-101 browser sim with esbuild and assembles web/dist/ with everything
// it fetches at runtime: the MuJoCo wasm binary, the MJCF scene, and the decimated meshes.
import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const DIST = path.join(__dirname, "dist");
const MODEL_ASSETS_SRC = path.join(
  REPO_ROOT,
  "packages/lerobot_env_so101/lerobot_env_so101/assets"
);
const MESHES_SRC = path.join(__dirname, "assets/meshes");
const POLICIES_SRC = path.join(__dirname, "assets/policies");
const ORT_SRC = path.join(__dirname, "node_modules/onnxruntime-web/dist");
// Both files are fetched at runtime from ort.env.wasm.wasmPaths (verified in
// the browser's network log), so both must ship next to the bundle.
const ORT_RUNTIME_FILES = ["ort-wasm-simd-threaded.wasm", "ort-wasm-simd-threaded.mjs"];

function copyFile(src, destDir, destName = path.basename(src)) {
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, path.join(destDir, destName));
}

async function main() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  await build({
    entryPoints: [path.join(__dirname, "src/main.js")],
    outfile: path.join(DIST, "main.js"),
    bundle: true,
    format: "esm",
    platform: "browser",
    target: "es2020",
    minify: true,
    // The bundle ships to GitHub Pages through `mkdocs gh-deploy`, which commits
    // the built site. A 3.3 MB map would be a new blob in that history on every
    // source change, so it is built only when debugging a deployed bundle.
    sourcemap: process.env.SIM_SOURCEMAP === "1",
    logLevel: "info",
    // @mujoco/mujoco's Node-only `await import('module')` branch (guarded by
    // ENVIRONMENT_IS_NODE, dead code in a browser) still gets statically resolved
    // by esbuild's bundler; keep it external since it's never reachable here.
    external: ["module"],
  });

  copyFile(path.join(__dirname, "src/index.html"), DIST);

  // Single-threaded @mujoco/mujoco resolves its wasm via
  // `new URL('mujoco.wasm', import.meta.url)`, which after bundling points at
  // dist/main.js — so the wasm binary must sit next to it, not under node_modules.
  copyFile(
    path.join(__dirname, "node_modules/@mujoco/mujoco/mujoco.wasm"),
    DIST
  );

  const modelDir = path.join(DIST, "model");
  copyFile(path.join(MODEL_ASSETS_SRC, "pick_scene.xml"), modelDir);
  copyFile(path.join(MODEL_ASSETS_SRC, "so101_new_calib.xml"), modelDir);

  const meshAssetsDir = path.join(modelDir, "assets");
  const meshFiles = fs.readdirSync(MESHES_SRC).filter((f) => f.endsWith(".stl"));
  for (const file of meshFiles) {
    copyFile(path.join(MESHES_SRC, file), meshAssetsDir);
  }

  const policiesDir = path.join(DIST, "policies");
  const policyFiles = fs.readdirSync(POLICIES_SRC);
  for (const file of policyFiles) {
    copyFile(path.join(POLICIES_SRC, file), policiesDir);
  }

  const ortDir = path.join(DIST, "ort");
  for (const file of ORT_RUNTIME_FILES) {
    copyFile(path.join(ORT_SRC, file), ortDir);
  }

  console.log(`Copied ${meshFiles.length} mesh files to ${meshAssetsDir}`);
  console.log(`Copied ${policyFiles.length} policy files to ${policiesDir}`);
  console.log(`Build complete: ${DIST}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
