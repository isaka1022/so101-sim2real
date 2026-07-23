# Contributing

Thanks for your interest! This is a small, deliberately-scoped personal
project — please read the scope notes before opening a PR.

## Development setup

```bash
python3 -m venv .venv
.venv/bin/pip install -e "packages/lerobot_env_so101[test]"
.venv/bin/pytest packages/lerobot_env_so101/tests -q
```

## What's welcome

- Bug reports and fixes for the environment itself (physics, IK, rewards,
  observation/action spaces)
- Improvements to sim fidelity that come with a measurement or a reproducible
  comparison
- Documentation fixes

## What's out of scope

- Teleop / HIL infrastructure (gamepad, keyboard, viewer wrappers) — use
  [gym-hil](https://github.com/huggingface/gym-hil) upstream for that
- Real-robot system identification (tracked as Phase 2, not started)
- Support for robots other than SO-101

## PR guidelines

- Explain **why** the change is needed and **how you tested it**. PRs that
  don't answer follow-up questions may be closed
- Keep PRs focused — one change per PR
- Be respectful; abusive behavior is not engaged with

## Security

See [SECURITY.md](SECURITY.md).
