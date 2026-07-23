# Releasing `lerobot-env-so101`

Publishing is automated via GitHub Actions + PyPI Trusted Publishing (OIDC).
No API token is stored anywhere; the `release.yml` workflow authenticates to
PyPI with a short-lived OIDC credential.

## One-time setup (already done)

1. **PyPI Trusted Publisher** — on
   https://pypi.org/manage/project/lerobot-env-so101/settings/publishing/,
   add a GitHub publisher with:
   - Owner: `isaka1022`
   - Repository: `so101-sim2real`
   - Workflow: `release.yml`
   - Environment: `pypi`
2. **GitHub environment** — a `pypi` environment exists on the repo so the
   publish job can reference it (and optionally gate it with a required
   reviewer).

## Cutting a release

1. Bump `version` in `packages/lerobot_env_so101/pyproject.toml`.
2. Update the README if user-facing behaviour changed. **The PyPI project page
   only re-renders the README on a new release** — a docs-only fix is not
   visible on PyPI until the next version ships.
3. Commit, push to `main`, wait for the `test` workflow to pass.
4. Tag and push:
   ```bash
   git tag v0.1.1
   git push origin v0.1.1
   ```
   The `release` workflow builds and publishes automatically.

## Manual publish fallback

If Actions is unavailable, publish from a local checkout with `twine`:

```bash
python -m build packages/lerobot_env_so101
twine upload packages/lerobot_env_so101/dist/*
```

Gotcha: `twine` ignores any `~/.pypirc` section that is **not listed** under
`[distutils] index-servers`. If a section (`[pypi]`, `[testpypi]`) is present
but not in that list, twine silently falls through to an interactive password
prompt and fails with `EOFError` in a non-interactive shell. Keep the list and
the sections in sync.
