# References

2026-07-20 時点で実在確認済み。

## 公開経路（Phase 1 の出口）

| 経路 | 導入 | 性質 |
|---|---|---|
| **EnvHub** | lerobot v0.5.0 / 2026-03-09 | `make_env()` を持つ `env.py` を Hub の Space として公開 → `trust_remote_code=True` で自動登録。[公式ブログ](https://huggingface.co/blog/lerobot-release-v050)、`docs/source/envhub.mdx` |
| **`lerobot_env_*` プラグイン** | [lerobot#3823](https://github.com/huggingface/lerobot/pull/3823) マージ 2026-06-19、v0.6.0 出荷 2026-07-06 | pip パッケージ名で自動検出。`@EnvConfig.register_subclass`。`lerobot_robot_*` / `lerobot_teleoperator_*` と同じ規約 |

**どちらもメンテナの承認・レビューを必要としない。** これが2026年の標準経路。

## 上流リポジトリの状態

| リポジトリ | 状態 | 根拠 |
|---|---|---|
| [huggingface/gym-hil](https://github.com/huggingface/gym-hil) | **休眠**（アーカイブはされていない） | 最後の機能マージは PR #17（2025-06-30）。以降は依存 bump と CI SHA 固定のみ。[PR #11](https://github.com/huggingface/gym-hil/pull/11)（macOS teleop）が 2025-06-10 から open。issue はほぼ 0 コメント。229 stars |
| [huggingface/lerobot](https://github.com/huggingface/lerobot) | 非常に活発 | 直近3ヶ月で 160 PR マージ、26k stars。ただし `src/lerobot/envs/` は LIBERO / RoboCasa 等**既存ベンチマークのラッパー専用**で、単一ロボットのカスタム環境の置き場ではない |
| [google-deepmind/mujoco_menagerie](https://github.com/google-deepmind/mujoco_menagerie) | 活発 | 直近3ヶ月で 29 PR マージ。外部コントリビュータ受け入れ実績あり。Google CLA 必須 |
| gym-pusht / gym-aloha / gym-xarm | 同様に休眠 | すべて bump のみの保守。**「1環境1リポジトリ」モデル自体が終わっている** |
| [isaac-sim/Sim-to-Real-SO-101-Workshop](https://github.com/isaac-sim/Sim-to-Real-SO-101-Workshop) | 活発（NVIDIA 公式） | 2026-03-17 作成、2026-07-20 push。Isaac Lab + GR00T。Mac では動かないが**この領域の先行者** |

## 既存の SO-101 sim 実装

- [lohpaul9/gym-hil `SO-101` ブランチ](https://github.com/lohpaul9/gym-hil/tree/SO-101) — **Apache-2.0**（要帰属表示）。
  2,946行 / 37ファイル。assets + env クラス + 逆運動学 + teleop + IK 検証スクリプト。
  [PR #36](https://github.com/huggingface/gym-hil/pull/36)（18:34作成→18:35クローズ）/ [#37](https://github.com/huggingface/gym-hil/pull/37)（18:37作成→同分クローズ）。
  **本人が自己クローズ、レビューは一度も付いていない**
  - MJCF は menagerie 由来ではなく独自（`gym_hil/assets/SO101/so101_new_calib.xml` 他、onshape-to-robot で
    TheRobotStudio の Onshape CAD から生成）。ただし damping/frictionloss/armature は menagerie 版と**バイト単位で同一**
  - 著者: Paul Loh（UPenn, CIS & Robotics）。アカウントは現在も活動中
- [lohpaul9/robopicker](https://github.com/lohpaul9/robopicker) — `SO101/` ディレクトリを持つ個人リポジトリ。
  gym-hil PR 断念直後（2025-10-02 作成〜10-12 push）に作られたが以降停止。ライセンス未確認

## menagerie 貢献の前例（Phase 2 に進む場合）

**重要: 「全関節が同一パラメータ」は指摘として弱い。** menagerie では常態。

| モデル | damping | armature |
|---|---|---|
| `robotstudio_so101` | 0.6（全6） | 0.028（全6） |
| `franka_emika_panda` | 1（全7、**グリッパの指も含む**） | 0.1（全7） |
| `ufactory_lite6` | 1（全6） | 0.1（全6） |
| `trs_so_arm100` | 明示なし（`dampratio=1`） | 0.1（全6） |
| `franka_fr3`（PR #168 後） | j1-4 共通 / j5-7 個別 | j5-7 で 0.074 共通 |

マージされた物理パラメータ改善 PR とその根拠水準:

- **[menagerie#263](https://github.com/google-deepmind/mujoco_menagerie/pull/263)** "Run light system identification on the Trossen WXAI"（`btaba`, DeepMind 内部）
  — MuJoCo 同梱の **`python/mujoco/sysid`** ツールを4軌道に適用。全関節で個別値。**最も強い根拠水準**
- **[menagerie#168](https://github.com/google-deepmind/mujoco_menagerie/pull/168)** "Update armature, damping, friction in fr3 model"（Alessio Quaglino, **外部**）
  — 本文は *"The parameters were identified using torque control."* の一文のみ、**生データ添付なし**でマージ
- **[menagerie#240](https://github.com/google-deepmind/mujoco_menagerie/pull/240) / [#252](https://github.com/google-deepmind/mujoco_menagerie/pull/252)**（NVIDIA エンジニア）— 慣性フレーム修正。**before/after のスクリーンショット**添付、
  #252 はメンテナへの質問形式（"was this intentional?"）から議論が始まっている
- **[menagerie#231](https://github.com/google-deepmind/mujoco_menagerie/issues/231)** → [#281](https://github.com/google-deepmind/mujoco_menagerie/pull/281)（tidybot）
  — issue テンプレートに沿い、**手計算した置き換え値**と**破綻挙動の動画**を添付。4ヶ月後に PR がマージ

**通る条件**: 生データや CAD は不要。**手法の明示**（torque control / sysid ツール / 手計算）＋
**（内部者の信用 or 挙動の視覚的証拠）**。純粋な「値がおかしく見える」だけの issue がマージに至った例は
確認範囲に無い。

CONTRIBUTING は *"Improve the realism of a model (e.g. via system identification)"* を明示的に歓迎し、
**着手前に issue を立てて調整すること**を求めている。バグテンプレートは3項目
（対象モデル / 問題 / 追加コンテキスト（spec sheet や URDF による値の不一致の提示））。

## 手法・先行研究（Phase 2 用）

- **BAM** — [Rhoban/bam](https://github.com/Rhoban/bam) / "Extended Friction Models for the Physics Simulation of Servo Actuators" (ICRA 2025)
  **STS3215（SO-ARM が使う実際のサーボ）の摩擦モデルを同定済み**。アーム全体への適用は未実施
- **ALOHA 2** — [arXiv:2405.02292](https://arxiv.org/html/2405.02292v1)
  実機11軌道 ＋ 非線形最小二乗で gain / damping / armature / friction / torque limit を最適化
- **`python/mujoco/sysid`** — MuJoCo 同梱の同定ツール。menagerie#263 で実際に使われている
- **mujoco-sysid** — [lvjonok/mujoco-sysid](https://github.com/lvjonok/mujoco-sysid)（サードパーティ、Levenberg-Marquardt）
- **lerobot-sim2real** — [StoneT2000/lerobot-sim2real](https://github.com/StoneT2000/lerobot-sim2real)
  著者自身が「system ID ツールは不足していて改善余地がある」と明言

## 需要の裏付け

- [lerobot#2952](https://github.com/huggingface/lerobot/issues/2952) / [#1387](https://github.com/huggingface/lerobot/issues/1387) — HIL-SERL SO101 未実装。
  **両方 open、メンテナ応答ゼロ**。ただし内容は**実機**の teleop 統合であってシムではない点に注意
- [lerobot#3086](https://github.com/huggingface/lerobot/pull/3086) — 同じ実機ギャップに対する PR、未マージ
- [lerobot#3131](https://github.com/huggingface/lerobot/issues/3131) — SO-101 follower の断線（101 でも起きる）
- [ggando.com/blog/so101-hil-serl](https://ggando.com/blog/so101-hil-serl/) — sim2real ゼロショットを断念して実機 RL に切替（2026-01）
- NVIDIA ["Train an SO-101 Robot From Sim-to-Real"](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/index.html) — "actuator gap estimation"(GapONet) を掲げるが**詳細非公開**

## gym-hil のコード構造（移植の参考）

- 登録: `gym_hil/__init__.py` / 基底: `gym_hil/mujoco_gym_env.py`（`MujocoGymEnv` → `FrankaGymEnv`）
- タスク: `gym_hil/envs/panda_pick_gym_env.py` / 制御: `gym_hil/controllers/opspace.py`
- wrapper: `gym_hil/wrappers/hil_wrappers.py`, `factory.py`, `intervention_utils.py`
- MJCF: `gym_hil/assets/scene.xml` が `<include file="panda.xml"/>` でロボットを合成
- **`FrankaGymEnv` は抽象基底ではない**。`joint1..7` / `actuator1..7` の命名規約、7要素 home position、
  Robotiq の `2f85/pinch_pos` センサー名がハードコード
- action は Cartesian 7要素 `[dx, dy, dz, drx, dry, drz, grasp]`（関節空間ではない）
- env ID 命名: `<Robot><Task>[Base|Viewer|Gamepad|Keyboard]-v0`
- gym-hil に CONTRIBUTING.md / PR テンプレは**無い**（clone `f89b3e5` で確認）。lerobot にはあり（AI_POLICY.md で AI 支援コード明示許可）

## ハードウェア

- [TheRobotStudio/SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100) — 公式。SO-100 / SO-101 両方
- **命名**: 公式呼称は「SO-101」。「SO-ARM101」はリテーラーの通称。検索は SO-101 で
- **SO-100 との差分**: フォロワーはサーボ・ギア比とも同一（STS3215 7.4V 1/345）。lerobot 側も
  `SO100FollowerConfig` / `SO101FollowerConfig` は同一クラスのエイリアス。差分はリーダーのギア比
  （1/345・1/191・1/147 混在）、配線、手首マウント（hex-nut）
- menagerie の `robotstudio_so101` は**フォロワーのみ**。リーダーアームは未モデル化

## 学習

- [MuJoCo Basics (Python) Colab](https://colab.research.google.com/github/google-deepmind/mujoco/blob/main/python/tutorial.ipynb)
- [MuJoCo Modeling / XML Reference](https://mujoco.readthedocs.io/en/stable/modeling.html)
- [MuJoCo Computation](https://mujoco.readthedocs.io/en/stable/computation/index.html) — contact solver（solref/solimp）
- [Modern Robotics](http://modernrobotics.org) (Lynch & Park) — PDF 全文無料。**1〜4章のみ**。網羅しない

## 環境の既知問題

- [mujoco#798](https://github.com/google-deepmind/mujoco/issues/798) — macOS で `mjpython` が必要な理由、オフスクリーン併用不可
- [jax-metal (PyPI)](https://pypi.org/project/jax-metal/) — 最終リリース 2024-10-08、experimental のまま
