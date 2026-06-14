# AGENTS.md

## Project Overview
- Repo contains single Vite + React + TypeScript app in `webapp/`.
- Stack: React 19, TypeScript, Vite, ESLint.
- Package manager: npm (`package-lock.json` present).

## Architecture / Directory Layout
- `webapp/src/` — app source.
  - `main.tsx` — app entry, renders `<App />` into `#root`.
  - `App.tsx` — current page/UI.
  - `App.css`, `index.css` — component and global styles.
- `webapp/public/` — static assets served as-is.
- `webapp/dist/` — build output, generated.
- `webapp/vite.config.ts` — Vite config.
- `webapp/eslint.config.js` — ESLint flat config.
- `webapp/tsconfig*.json` — TypeScript configs.

## Common Commands
Run from `webapp/`:
- `npm install` — install deps.
- `npm run dev` — start Vite dev server.
- `npm run build` — type-check (`tsc -b`) and production build.
- `npm run lint` — run ESLint.
- `npm run preview` — preview production build.

## Coding Conventions
- ESM everywhere (`"type": "module"`).
- Use TypeScript + React function components.
- Prefer `.tsx` for UI, `.ts` for config/util code.
- Imports use explicit file extensions for local TS files when needed (`./App.tsx`).
- ESLint rules come from `@eslint/js`, `typescript-eslint`, `react-hooks`, and `react-refresh`.
- Keep `dist/` out of edits; generated.

## Testing & Validation
- No dedicated test runner found.
- Validate changes with at least:
  - `npm run lint`
  - `npm run build`
- If UI behavior changed, also run `npm run dev` and verify in browser.

## Important Notes / Gotchas
- Vite React compiler preset is enabled in `vite.config.ts` via `@rolldown/plugin-babel` + `reactCompilerPreset()`.
- CSS uses nested rules and media queries; keep syntax compatible with current setup.
- `webapp/dist/` and `webapp/node_modules/` are generated / dependency folders; do not edit directly.

## Agent Workflow Tips
- Most repo work happens under `webapp/`; inspect that subdir first.
- Read `webapp/README.md`, `package.json`, and config files before changing behavior.
- Make small, targeted edits; preserve existing style unless user asks for a refactor.
