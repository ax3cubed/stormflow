# Changelog

## March 2026 — Stormflow (Accelory.net)

- **Product identity:** Renamed the application and package to **Stormflow** for Accelory.net; updated UI strings, document titles, CORS production origin placeholder, [NOTICE](./NOTICE), and [README](./README.md) credits. `package.json` repository URL targets `github.com/ax3cubed/stormflow` (rename the GitHub repo to match when ready).

## March 2026 — Fork and modifications

This repository merges the full history of [romannurik/ProductCanvas-Experiment](https://github.com/romannurik/ProductCanvas-Experiment) (Apache-2.0) with independent development. The upstream project is described in [Google Labs: Product Canvas](https://labs.google/code/experiments/product-canvas).

### Summary of modifications (this fork)

- **Git lineage:** Merged `upstream/main` with `--allow-unrelated-histories` to preserve both upstream commits and fork commits; ongoing work uses `origin` and `upstream` for the public experiment.
- **Authentication / onboarding:** Refactored authentication flow and context; removed unused invite-code screen from the onboarding path used by the app.
- **Canvas & document:** React deduplication and state-update optimizations in canvas and document providers; related canvas/node and utility adjustments.
- **UI / branding:** Header, logo, onboarding styles, peer face pile, meetings bubbles, inline edit styles, and related presentation updates.
- **Live / audio / miniapp:** Adjustments to Live API usage, Live button, audio bars, miniapp host and compiler.
- **Collab / commands:** Presence provider, command provider, and peer cursor annotation updates.
- **Firebase / deploy:** `firebase.json` and database rules updates; Firebase Storage CORS config (`storage.cors.json`); Vercel config (`vercel.json`).
- **Tooling:** `vite.config.ts` and `.gitignore` updates; package manager lockfiles (`pnpm-lock.yaml`, `pnpm-workspace.yaml`) alongside `package-lock.json`.

Prominent per-file modification notices: source files under `src/` include an additional copyright line for modifications; this file satisfies the repository-level change log required by Apache-2.0 practice alongside those notices.
