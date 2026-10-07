# Server modules

Domain logic for Route Handlers — **no React imports**.

## Next: Drizzle + Supabase

- Add `repositories/` per domain (e.g. `dashboard/pg_repository.ts`).
- Keep SQL/Drizzle out of `app/api/**`; call repositories from `service.ts`.
- Use WiChat `references/react-tanstack` as a pattern reference when available.

## Current

`dashboard/service.ts` returns fixtures until persistence is wired.
