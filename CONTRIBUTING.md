# Contributing

Thanks for your interest in WiTask Personal.

## Branch flow

1. Create a feature branch from **`release`**: `feature/short-description`
2. Open a PR into **`release`** for staging validation
3. Promote to production: open a PR from **`release`** into **`main`**

Hotfixes that must ship to production without waiting on staging: branch from **`main`**, PR back into **`main`**, then merge **`main`** into **`release`** to keep them aligned.

## Before you open a PR

From `web/`:

```bash
pnpm check
```

This runs format check, lint, typecheck, and production build.

## Commits

Use clear, imperative messages. Prefixes like `feat:`, `fix:`, `chore:`, `docs:` are welcome but not required.

## Code layout

Follow [AGENTS.md](AGENTS.md): domain logic in `web/src/server/`, thin route handlers under `web/src/app/api/v1/`.

## Questions

Open a [GitHub Issue](https://github.com/nsrvel/witask-personal/issues) for bugs or ideas.
