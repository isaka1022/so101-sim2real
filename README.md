# so101-sim2real

[![PyPI](https://img.shields.io/pypi/v/lerobot-env-so101)](https://pypi.org/project/lerobot-env-so101/)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue)](LICENSE)

A MuJoCo simulation environment for the SO-101 arm (SO-ARM101), shipped as a
[lerobot](https://github.com/huggingface/lerobot) third-party plugin.

SO-101（通称 SO-ARM101）の MuJoCo シミュレーション環境。
[lerobot](https://github.com/huggingface/lerobot) のサードパーティプラグインとして公開している。

**Documentation: <https://isaka1022.github.io/so101-sim2real/>**

![SO-101 pick-cube environment](docs/media/so101_pick_cube.gif)

*手書きコントローラによる reach→gripper close のモーションデモ（掴み上げの成功例ではない）。真上からの把持は現状 IK が未対応 — [Known limitations](packages/lerobot_env_so101/README.md#known-limitations) 参照。*

## The package / パッケージ

The installable artifact of this repo is
[`packages/lerobot_env_so101`](packages/lerobot_env_so101) — a standalone
SO-101 pick-cube environment, auto-discovered by lerobot v0.6.0+ via the
`lerobot_env_*` plugin convention
([lerobot#3823](https://github.com/huggingface/lerobot/pull/3823)) and usable
standalone as a plain `gymnasium` environment.

このリポジトリの成果物は [`packages/lerobot_env_so101`](packages/lerobot_env_so101)。
lerobot v0.6.0+ が `lerobot_env_*` 命名規約で自動発見するプラグインで、
素の `gymnasium` 環境としても単体で使える。

```bash
pip install lerobot-env-so101
```

```python
import gymnasium as gym
import lerobot_env_so101  # registers the env

env = gym.make("lerobot_env_so101/SO101PickCube-v0")
```

See the [package README](packages/lerobot_env_so101/README.md) for the action
space design (native 4-dim `[dx, dy, dz, grasp]` — and why) and asset
provenance.

action space の設計（ネイティブ4次元 `[dx, dy, dz, grasp]` にした理由）と
アセットの出自は[パッケージ README](packages/lerobot_env_so101/README.md) を参照。

## Why a standalone plugin, not an upstream PR / なぜ上流 PR ではなくプラグインか

gym-hil and the other single-environment repos (`gym-pusht` / `gym-aloha` /
`gym-xarm`) have been in maintenance-only mode for over a year, while lerobot
now provides gatekeeper-free publishing paths (EnvHub and `lerobot_env_*`
plugin auto-discovery). This repo uses the latter.

gym-hil ほか「1環境1リポジトリ」型の repo は1年以上メンテナンスのみの状態で、
一方 lerobot にはゲートキーパー不要の公開経路（EnvHub / `lerobot_env_*`
プラグイン自動発見）が整備された。本リポジトリは後者を使う。

## Alternatives / 他の選択肢

This is not the only SO-101 simulation, and its scope is deliberately narrow.
As of 2026-08-24:

- [**so101-nexus**](https://github.com/johnsutor/so101-nexus) — the closest
  alternative. A full stack (teleoperation → imitation learning → RL) on MuJoCo
  and MuJoCo Warp, published through EnvHub. Reach for it if you want the whole
  training pipeline in one package, or GPU-parallel rollouts.
- [**robot-control-stack**](https://github.com/RobotControlStack/robot-control-stack)
  — MuJoCo Gymnasium wrappers plus real-hardware control across five arms
  including SO-101. Reach for it if you need one API over several robots.
  AGPL-3.0.
- [**lerobot-sim2real**](https://github.com/StoneT2000/lerobot-sim2real) (ManiSkill),
  [**isaac_so_arm101**](https://github.com/MuammerBay/isaac_so_arm101) and
  [NVIDIA's SO-101 workshop](https://github.com/isaac-sim/Sim-to-Real-SO-101-Workshop)
  (Isaac Lab) — reach for these if you have CUDA and want GPU-parallel training.

This one is for a single pick-cube environment that installs with `pip`, is
discovered by lerobot through the `lerobot_env_*` naming convention, and runs on
Apple Silicon without a GPU. A fuller survey — stars, licenses and last-push
dates for ten projects — is in [`notes/references.md`](notes/references.md).

SO-101 のシミュレーションはこれだけではなく、本リポジトリは意図的にスコープを
狭く取っている。2026-08-24 時点:

- [**so101-nexus**](https://github.com/johnsutor/so101-nexus) — 最も近い選択肢。
  teleop → 模倣学習 → RL を一体で提供する MuJoCo / MuJoCo Warp のスタックで、
  EnvHub 経由で公開されている。学習パイプライン一式が欲しい、または GPU 並列で
  回したいならこちら
- [**robot-control-stack**](https://github.com/RobotControlStack/robot-control-stack)
  — SO-101 を含む5種のアームを、MuJoCo Gymnasium wrapper と実機制御の統一 API で
  扱う。複数ロボットを1つの API で回すならこちら。AGPL-3.0
- [**lerobot-sim2real**](https://github.com/StoneT2000/lerobot-sim2real)（ManiSkill）/
  [**isaac_so_arm101**](https://github.com/MuammerBay/isaac_so_arm101) /
  [NVIDIA の SO-101 workshop](https://github.com/isaac-sim/Sim-to-Real-SO-101-Workshop)
  （Isaac Lab）— CUDA があって GPU 並列学習をしたいならこちら

本リポジトリが向くのは、pick-cube 環境ひとつを `pip` で入れ、`lerobot_env_*` 命名規約で
lerobot に自動発見させ、GPU なしの Apple Silicon で動かしたい場合。★・ライセンス・
最終 push を含む10件の一覧は [`notes/references.md`](notes/references.md) にある。

## macOS notes / macOS での注意

- Runs natively on Apple Silicon: `pip install mujoco` (verified with 3.10.0)
- **`mjpython` is only required for `launch_passive()`.** Run the blocking
  `launch()` with plain `python` — the reverse crashes with
  `RuntimeError: Caught an unknown exception!`
  ([mujoco#742](https://github.com/google-deepmind/mujoco/issues/742))
- `mjpython` and offscreen rendering cannot be combined; record videos from a
  separate script
- Don't expect MJX (GPU-parallel) on Mac — the JAX Metal backend has been
  experimental and unmaintained since 2024-10. Isaac Sim / Isaac Lab do not
  run on Mac

- Apple Silicon でネイティブ動作。`pip install mujoco`（3.10.0 で確認）
- **`mjpython` が要るのは `launch_passive()` だけ**。ブロッキングの `launch()` は
  素の `python` で動かす（逆にすると [mujoco#742](https://github.com/google-deepmind/mujoco/issues/742) のエラーで落ちる）
- `mjpython` とオフスクリーンレンダリングは併用不可。動画記録は別スクリプトに分ける
- MJX（GPU 並列）を Mac に期待しない。Isaac Sim / Isaac Lab も Mac では動かない

## Development setup / 開発セットアップ

```bash
python3 -m venv .venv && .venv/bin/pip install mujoco numpy

# Sparse-checkout reference models from mujoco_menagerie (vendor/ is gitignored)
git clone --depth 1 --filter=blob:none --sparse \
  https://github.com/google-deepmind/mujoco_menagerie.git vendor/menagerie
cd vendor/menagerie && git sparse-checkout set robotstudio_so101 trs_so_arm100

# Inspect physics parameters of the current model
.venv/bin/python sim/inspect_model.py
```

## Roadmap / ロードマップ

Priorities (gripper unit mapping, denser rewards, `place`/`stack` tasks) and
the planned Phase 2 real-robot system identification are in
[`docs/ROADMAP.md`](docs/ROADMAP.md).

優先事項（グリッパ単位変換・reward shaping・place/stack タスク）と、予定している
Phase 2（実機の system identification）は [`docs/ROADMAP.md`](docs/ROADMAP.md) にまとめています。

## Layout / ディレクトリ

```
packages/lerobot_env_so101/   The pip-installable plugin / pip で入る本体
sim/     Environment tooling and model inspection / 環境実装とモデル検査ツール
sysid/   System identification (Phase 2, not started) / 同定スクリプト（未着手）
data/    Real-robot logs (Phase 2, not started) / 実機ログ（未着手）
docs/    Documentation site source (published) / ドキュメントサイトのソース（公開）
notes/   Internal reference notes and baselines / 内部の参照資料・ベースライン記録
vendor/  Sparse checkouts of external repos (gitignored) / 外部リポジトリ（gitignore 済み）
```

## License / ライセンス

Apache-2.0. Asset provenance and attributions are documented in
[`assets/README.md`](packages/lerobot_env_so101/lerobot_env_so101/assets/README.md).

Apache-2.0。アセットの出自と帰属表示は
[`assets/README.md`](packages/lerobot_env_so101/lerobot_env_so101/assets/README.md) に記載。
