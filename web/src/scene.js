// Builds Three.js geometry directly from an MjModel's geom arrays (no MjvScene/mjv_updateScene)
// and keeps it in sync with an MjData each frame.
import * as THREE from "three";

// MuJoCo's mesh_vert/mesh_face buffers are packed for the whole model; mesh_vertadr/
// mesh_faceadr give the per-mesh offset (in vertices / faces, not floats / ints).
function buildMeshGeometry(model, meshId) {
  const vertAdr = model.mesh_vertadr[meshId];
  const vertNum = model.mesh_vertnum[meshId];
  const faceAdr = model.mesh_faceadr[meshId];
  const faceNum = model.mesh_facenum[meshId];

  const vertices = model.mesh_vert.slice(vertAdr * 3, (vertAdr + vertNum) * 3);
  const indices = model.mesh_face.slice(faceAdr * 3, (faceAdr + faceNum) * 3);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(vertices), 3));
  // mesh_face is Int32Array on the MjModel binding, but WebGL element index
  // buffers only accept unsigned types (Uint16/Uint32) — cast it or glDrawElements
  // fails with GL_INVALID_ENUM.
  geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
  geometry.computeVertexNormals();
  return geometry;
}

// MuJoCo primitives (capsule/cylinder) are defined along their local Z axis; Three.js
// builds them along Y by default. Rotating the geometry itself (not the mesh) fixes
// this once, so the per-frame world transform from geom_xmat can be applied as-is.
const ALIGN_Z = new THREE.Matrix4().makeRotationX(Math.PI / 2);

function buildPrimitiveGeometry(geomType, size, GEOM) {
  switch (geomType) {
    case GEOM.PLANE: {
      const width = size[0] > 0 ? size[0] * 2 : 40;
      const height = size[1] > 0 ? size[1] * 2 : 40;
      return new THREE.PlaneGeometry(width, height);
    }
    case GEOM.SPHERE:
      return new THREE.SphereGeometry(size[0], 24, 16);
    case GEOM.CAPSULE: {
      const geometry = new THREE.CapsuleGeometry(size[0], size[1] * 2, 8, 16);
      geometry.applyMatrix4(ALIGN_Z);
      return geometry;
    }
    case GEOM.CYLINDER: {
      const geometry = new THREE.CylinderGeometry(size[0], size[0], size[1] * 2, 32);
      geometry.applyMatrix4(ALIGN_Z);
      return geometry;
    }
    case GEOM.BOX:
      return new THREE.BoxGeometry(size[0] * 2, size[1] * 2, size[2] * 2);
    case GEOM.ELLIPSOID: {
      const geometry = new THREE.SphereGeometry(1, 32, 24);
      geometry.scale(size[0], size[1], size[2]);
      return geometry;
    }
    default:
      return null;
  }
}

/**
 * Builds one Three.Mesh per MuJoCo geom.
 * @returns {{ root: THREE.Group, geomMeshes: (THREE.Mesh|null)[] }}
 */
export function buildRobotScene(mujoco, model) {
  const GEOM = {
    PLANE: mujoco.mjtGeom.mjGEOM_PLANE.value,
    SPHERE: mujoco.mjtGeom.mjGEOM_SPHERE.value,
    CAPSULE: mujoco.mjtGeom.mjGEOM_CAPSULE.value,
    ELLIPSOID: mujoco.mjtGeom.mjGEOM_ELLIPSOID.value,
    CYLINDER: mujoco.mjtGeom.mjGEOM_CYLINDER.value,
    BOX: mujoco.mjtGeom.mjGEOM_BOX.value,
    MESH: mujoco.mjtGeom.mjGEOM_MESH.value,
  };
  // MuJoCo's collision geoms (group 3 in this model) duplicate the visual geoms
  // (group 2) at identical poses. The reference `simulate` viewer hides group 3 by
  // default; skip them here too, otherwise they z-fight with the visual copy.
  const COLLISION_GROUP = 3;

  const root = new THREE.Group();
  const geomMeshes = new Array(model.ngeom).fill(null);

  for (let i = 0; i < model.ngeom; i++) {
    if (model.geom_group[i] === COLLISION_GROUP) continue;

    const geomType = model.geom_type[i];
    const size = model.geom_size.slice(i * 3, i * 3 + 3);
    // geom_rgba is the *geom's own* rgba attribute, which MuJoCo defaults to
    // 0.5/0.5/0.5/1 when unset. This model colors geoms via a referenced
    // <material> instead, so the real color lives in mat_rgba[geom_matid].
    const matId = model.geom_matid[i];
    const rgba = matId >= 0
      ? model.mat_rgba.slice(matId * 4, matId * 4 + 4)
      : model.geom_rgba.slice(i * 4, i * 4 + 4);

    let geometry;
    if (geomType === GEOM.MESH) {
      const meshId = model.geom_dataid[i];
      geometry = buildMeshGeometry(model, meshId);
    } else {
      geometry = buildPrimitiveGeometry(geomType, size, GEOM);
    }
    if (!geometry) continue;

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(rgba[0], rgba[1], rgba[2]),
      roughness: 0.7,
      metalness: 0.1,
      transparent: rgba[3] < 1,
      opacity: rgba[3],
      side: geomType === GEOM.PLANE ? THREE.DoubleSide : THREE.FrontSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.matrixAutoUpdate = true;
    root.add(mesh);
    geomMeshes[i] = mesh;
  }

  return { root, geomMeshes };
}

const _mat4 = new THREE.Matrix4();
const _pos = new THREE.Vector3();
const _quat = new THREE.Quaternion();
const _scale = new THREE.Vector3();

/**
 * Copies each geom's world pose from MjData into its Three.js mesh.
 * data.geom_xmat is row-major (per MuJoCo convention); Matrix4.set() takes its
 * arguments in row-major reading order, so no manual transpose is needed here.
 */
export function updateRobotScene(data, geomMeshes) {
  for (let i = 0; i < geomMeshes.length; i++) {
    const mesh = geomMeshes[i];
    if (!mesh) continue;

    const p = i * 3;
    const m = i * 9;
    const xmat = data.geom_xmat;
    const xpos = data.geom_xpos;

    _mat4.set(
      xmat[m + 0], xmat[m + 1], xmat[m + 2], xpos[p + 0],
      xmat[m + 3], xmat[m + 4], xmat[m + 5], xpos[p + 1],
      xmat[m + 6], xmat[m + 7], xmat[m + 8], xpos[p + 2],
      0, 0, 0, 1
    );
    _mat4.decompose(_pos, _quat, _scale);
    mesh.position.copy(_pos);
    mesh.quaternion.copy(_quat);
  }
}
