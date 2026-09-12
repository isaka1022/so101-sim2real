// ONNX policy loading and inference via onnxruntime-web (wasm backend only).

import * as ort from "onnxruntime-web/wasm";
import { OBS_DIM, assertObsOrder } from "./observation.js";

const ACTION_DIM = 4;

// Where the wasm runtime (.mjs loader + .wasm binary) is served from; build.mjs
// copies both into dist/ort/. Threads need COOP/COEP headers GitHub Pages
// cannot send, so the single-threaded path is the only one available.
ort.env.wasm.numThreads = 1;
ort.env.wasm.wasmPaths = new URL("./ort/", import.meta.url).href;

/** Varint at `offset`; returns [value, nextOffset]. */
function readVarint(bytes, offset) {
  let value = 0;
  let shift = 0;
  for (;;) {
    const byte = bytes[offset++];
    value += (byte & 0x7f) * 2 ** shift;
    shift += 7;
    if ((byte & 0x80) === 0) return [value, offset];
  }
}

/**
 * Read `ModelProto.metadata_props` (field 14) out of ONNX bytes.
 *
 * onnxruntime-web exposes only input/output value metadata, never the model's
 * custom metadata map, so the key/value pairs are scanned from the protobuf
 * directly. Nested messages are skipped by length, so the weights are not read.
 */
export function readOnnxMetadata(bytes) {
  const metadata = {};
  const decoder = new TextDecoder();
  let offset = 0;

  while (offset < bytes.length) {
    let key;
    [key, offset] = readVarint(bytes, offset);
    const field = key >>> 3;
    const wireType = key & 7;

    if (wireType === 2) {
      let length;
      [length, offset] = readVarint(bytes, offset);
      if (field === 14) {
        const entry = bytes.subarray(offset, offset + length);
        let entryOffset = 0;
        let entryKey = "";
        let entryValue = "";
        while (entryOffset < entry.length) {
          let tag;
          [tag, entryOffset] = readVarint(entry, entryOffset);
          let fieldLength;
          [fieldLength, entryOffset] = readVarint(entry, entryOffset);
          const text = decoder.decode(entry.subarray(entryOffset, entryOffset + fieldLength));
          entryOffset += fieldLength;
          if (tag >>> 3 === 1) entryKey = text;
          else if (tag >>> 3 === 2) entryValue = text;
        }
        if (entryKey) metadata[entryKey] = entryValue;
      }
      offset += length;
    } else if (wireType === 0) {
      [, offset] = readVarint(bytes, offset);
    } else if (wireType === 5) {
      offset += 4;
    } else if (wireType === 1) {
      offset += 8;
    } else {
      throw new Error(`unsupported protobuf wire type ${wireType} in ONNX header`);
    }
  }
  return metadata;
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json();
}

/**
 * Read the policy manifest and resolve each entry's ONNX URL against it.
 *
 * @param {string} manifestUrl
 * @returns {Promise<Array<object>>}
 */
export async function loadPolicyManifest(manifestUrl) {
  const entries = await fetchJson(manifestUrl);
  if (!Array.isArray(entries)) throw new Error(`${manifestUrl} is not a list of policies`);
  return entries.map((entry) => ({ ...entry, url: new URL(entry.file, new URL(manifestUrl, location.href)).href }));
}

/**
 * Create an inference session for one manifest entry.
 *
 * `action_scale` is taken from the ONNX metadata, which is authoritative
 * because it travels with the weights; the manifest value is cross-checked so a
 * stale manifest fails loudly instead of stepping the arm at the wrong scale.
 *
 * @param {object} entry a `loadPolicyManifest` entry
 */
export async function loadPolicy(entry) {
  const res = await fetch(entry.url);
  if (!res.ok) throw new Error(`Failed to fetch ${entry.url}: ${res.status}`);
  const bytes = new Uint8Array(await res.arrayBuffer());

  const metadata = readOnnxMetadata(bytes);
  assertObsOrder(metadata.obs_order ? JSON.parse(metadata.obs_order) : null, entry.id);

  const actionScale = Number(metadata.action_scale);
  if (!(actionScale > 0)) throw new Error(`${entry.id}: ONNX action_scale is ${metadata.action_scale}`);
  if (entry.action_scale !== undefined && Math.abs(entry.action_scale - actionScale) > 1e-12) {
    throw new Error(
      `${entry.id}: manifest action_scale ${entry.action_scale} != ONNX ${actionScale}`
    );
  }

  const session = await ort.InferenceSession.create(bytes, { executionProviders: ["wasm"] });
  return {
    session,
    actionScale,
    envVersion: metadata.env_version,
    trainCommit: metadata.train_commit,
  };
}

/**
 * @param {ort.InferenceSession} session
 * @param {Float32Array} obs length OBS_DIM
 * @returns {Promise<Float32Array>} the 4-dim action
 */
export async function runPolicy(session, obs) {
  if (obs.length !== OBS_DIM) throw new Error(`expected ${OBS_DIM} observations, got ${obs.length}`);
  const inputName = session.inputNames[0];
  const outputName = session.outputNames[0];
  const outputs = await session.run({ [inputName]: new ort.Tensor("float32", obs, [1, OBS_DIM]) });
  const action = outputs[outputName].data;
  if (action.length !== ACTION_DIM) throw new Error(`expected ${ACTION_DIM} action dims, got ${action.length}`);
  return action;
}
