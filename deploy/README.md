# Deploy

| Branch | Environment |
|--------|-------------|
| `release` | Staging |
| `main` | Production |

Wire hosting (Vercel, Railway, etc.) to these branches when ready. CI runs on both branches via [`.github/workflows/ci.yml`](../.github/workflows/ci.yml).
