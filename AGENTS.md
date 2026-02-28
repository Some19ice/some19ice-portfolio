# AGENTS.md

## Cursor Cloud specific instructions

This is a Next.js 16 portfolio site (Pages Router) with React 19, Tailwind CSS, Three.js/React Three Fiber 3D visuals, and a markdown-based blog.

### Quick reference

| Task | Command |
|------|---------|
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Prod server | `npm run start` |

See `CLAUDE.md` for full project structure and customization points.

### Non-obvious caveats

- **Node >= 22 required** — the `engines` field in `package.json` enforces `node >=22.0.0` and `npm >=10.0.0`. The VM ships with Node 22.
- **No databases or Docker** — all data is static (JS files + Markdown in `posts/`). No external services are needed.
- **`GOOGLE_API_KEY` is optional** — the Orbital Command chat widget (`/api/chat`) calls Google Gemini. Without the env var the chat returns an error, but the rest of the site works fine.
- **Static export by default** — `next.config.js` uses `output: "export"` for GitHub Pages. API routes (`/api/chat`) only work during `npm run dev` or when deployed to Vercel (not in the static export).
- **Lint produces ~120 warnings (0 errors)** — all are `no-unused-vars` from pre-existing code; this is expected.
- **`prebuild` runs `npm run clean`** — this deletes `.next` and `out` before every build, so the build always starts fresh.
