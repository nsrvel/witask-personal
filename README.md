# WiTask Personal (Harian.)

Personal task management — web first, mobile later. Team edition is out of scope for this repository.

## Stack

| Layer | Choice |
|-------|--------|
| Web | Next.js App Router, TypeScript |
| UI | shadcn (base-nova), Tailwind CSS v4 |
| Data | PostgreSQL, Drizzle ORM |
| Auth | Better Auth, Google sign-in |
| Mobile (planned) | Flutter (Android & iOS) |

## Repository layout

| Path | Purpose |
|------|---------|
| [`web/`](web/) | Next.js application |
| [`mobile/`](mobile/) | Flutter (placeholder) |
| [`deploy/`](deploy/) | Branch → environment notes |
| [`references/`](references/) | UI mock (`index.html`) |

## Quick start

```bash
docker compose up -d          # optional local Postgres
cd web
pnpm install
cp .env.example .env.local    # fill auth & DB when wired
pnpm dev
```

- App: http://localhost:8080  
- Health: http://localhost:8080/api/v1/health  

Quality gate: `cd web && pnpm check`

## Branches

| Branch | Role |
|--------|------|
| `main` | Production |
| `release` | Staging |

See [CONTRIBUTING.md](CONTRIBUTING.md) for workflow.

## Docs

- [CONTRIBUTING.md](CONTRIBUTING.md) — how to contribute and branch flow  
- [SECURITY.md](SECURITY.md) — reporting vulnerabilities  
- [CHANGELOG.md](CHANGELOG.md) — release notes  
- [AGENTS.md](AGENTS.md) — Cursor / agent conventions  

## License

[MIT](LICENSE)
