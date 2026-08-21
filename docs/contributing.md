# Development

Contributions are welcome. The repository is
[isaka1022/so101-sim2real](https://github.com/isaka1022/so101-sim2real); the
installable package lives in `packages/lerobot_env_so101`.

## Environment setup

```bash
git clone https://github.com/isaka1022/so101-sim2real.git
cd so101-sim2real
python3 -m venv .venv && .venv/bin/pip install mujoco numpy
```

Reference models are sparse-checked out from `mujoco_menagerie` — `vendor/` is
gitignored, so this is a local-only step:

```bash
git clone --depth 1 --filter=blob:none --sparse \
  https://github.com/google-deepmind/mujoco_menagerie.git vendor/menagerie
cd vendor/menagerie && git sparse-checkout set robotstudio_so101 trs_so_arm100
```

Inspect the physics parameters of the current model:

```bash
.venv/bin/python sim/inspect_model.py
```

## Tests

```bash
pip install -e "packages/lerobot_env_so101[test]"
pytest packages/lerobot_env_so101/tests -q
```

CI runs the suite on Python 3.10 and 3.12 with `MUJOCO_GL=osmesa`.

## Diagnostic scripts

`sim/` holds the tooling used to verify claims made in this documentation
rather than assert them:

| Script | What it checks |
|---|---|
| `sim/check_dead_action_dims.py` | Perturbs each action dimension and confirms the state responds — the basis for the "0 of 4 dead" claim in [Action space](action-space.md). |
| `sim/check_gripper_polarity.py` | Confirms `grasp=0` closes and `grasp=1` opens. |
| `sim/inspect_model.py` | Dumps physics parameters of the loaded MJCF. |
| `sim/render_demo.py` | Renders the demo animation. |

## Documentation

This site is MkDocs Material, built from `docs/` and deployed to GitHub Pages
on every push to `main`.

```bash
pip install -r requirements-docs.txt
mkdocs serve
```

The build runs with `strict: true`, so a broken internal link or a bad
`mkdocstrings` reference fails the build rather than shipping quietly. Run
`mkdocs build --strict` before opening a pull request that touches docs.

The API reference is generated from docstrings, so keep them in Google style
with an `Args:` section — that is what renders as the argument table.

!!! note "`docs/` is published, `notes/` is not"

    `docs/` is the site's source directory: everything in it ships. Internal
    working notes (`notes/references.md`, parameter baselines) live in
    `notes/` precisely so they are not published.

## Releasing

See [Releasing](RELEASING.md).
