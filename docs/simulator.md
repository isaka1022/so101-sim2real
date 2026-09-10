# Try it in the browser

The environment this package ships runs on MuJoCo, and MuJoCo now compiles to
WebAssembly. So the pick scene can run in a browser tab — the same MJCF, the same
solver, no install.

<iframe src="../sim/index.html" title="SO-101 browser simulator" width="100%" height="760" style="border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px;"></iframe>

Open it on its own at
[isaka1022.github.io/so101-sim2real/sim/](https://isaka1022.github.io/so101-sim2real/sim/)
if the frame is cramped.

## What is actually running

The physics is real. `@mujoco/mujoco`, the official WebAssembly build maintained
by Google DeepMind, loads `pick_scene.xml` — the same file
[`SO101PickCubeEnv`](api.md) loads — and steps it in the page. Nothing is
pre-recorded and nothing is computed on a server.

Three details differ from what you get after `pip install lerobot-env-so101`:

- **The meshes are decimated.** The package meshes total 15 MB, which is a rude
  download for a demo, so the viewer ships copies reduced to about 12% of their
  faces (1.9 MB). Collision geometry uses the same meshes, so contact behaviour
  in the browser is close to, but not identical to, the package.
- **There is no policy.** The sliders drive `data.ctrl` directly. This is a way
  to feel the joint limits and the gripper, not to watch a trained agent.
- **It is single-threaded.** The multi-threaded MuJoCo build needs
  `Cross-Origin-Opener-Policy` and `Cross-Origin-Embedder-Policy` headers, and
  GitHub Pages cannot send custom headers.

## Regenerating the viewer meshes

The web meshes are generated from the package meshes, not maintained by hand:

```sh
blender --background --python web/tools/decimate_meshes.py
```

CI runs `python web/tools/check_mesh_drift.py`, which re-hashes the package
meshes and fails if they have changed since the web copies were built. That is
the only thing keeping the two sets from quietly diverging.

## Prior art

Browser MuJoCo is not new, and neither is SO-101 in a browser.
[`mertozbas/so101-tic-tac-toe-replay-studio`](https://huggingface.co/spaces/mertozbas/so101-tic-tac-toe-replay-studio)
runs SO-101 with SmolVLA the same way, and
[`legion1581/unitree-mujoco-web`](https://github.com/legion1581/unitree-mujoco-web)
does it for Unitree robots. This page exists so that *this package's* scene can
be tried without installing anything, not because the technique is novel.
