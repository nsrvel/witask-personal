# AGENTS.md — WiTask Personal

Fullstack **Next.js** app in `web/`. Not part of WiChat microservices.

## Stack

- Next.js App Router, TypeScript, Tailwind v4, shadcn (base-nova)
- TanStack Query + Zod + react-hook-form
- PostgreSQL + Drizzle (planned wiring)
- Better Auth + Google (planned wiring)
- API: `web/src/app/api/v1/**` (Route Handlers)
- Server logic: `web/src/server/<domain>/` (no SQL in route files)

## Layout

| Path | Role |
|------|------|
| `web/src/app/` | Routes only |
| `web/src/features/` | Screens |
| `web/src/services/` | Query layer → api-client |
| `web/src/schemas/` | Zod |
| `web/src/server/` | Server-only domain logic |
| `web/src/integrations/` | api-client, tanStack providers |

## Commands

```bash
cd web && pnpm check
```

## Branches

- `release` — staging  
- `main` — production  
