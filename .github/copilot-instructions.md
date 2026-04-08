# Phoenix Copilot Instructions

## 1. Overview

This file guides AI assistants to generate features that match the existing Phoenix monorepo architecture and coding patterns.

It is based only on observed repository patterns from apps, packages, configs, and docs in this codebase. Where implementations are scaffold-level, preserve scaffold boundaries and extend them incrementally.

## 2. File Category Reference

### root-governance

- What it is: repository-level orchestration and governance files.
- Representative files:
  - `package.json`
  - `turbo.json`
- Key conventions:
  - Root scripts delegate to Turborepo (`turbo run ...`).
  - Bun is the canonical package manager (`bun.lock`, `packageManager: bun@...`).

### repo-instructions

- What it is: repository instruction files for contributor/AI behavior.
- Representative files:
  - `.github/copilot-instructions.md`
- Key conventions:
  - Web styling follows Tailwind v4 + semantic variable system.
  - Dark mode is handled in CSS variable overrides, not JSX `dark:*` forks.

### documentation

- What it is: architecture/api/contribution docs and planning.
- Representative files:
  - `docs/architecture.md`
  - `docs/api.md`
- Key conventions:
  - Docs may describe planned features; verify implementation status in source files before generating production logic.

### ignore-and-env

- What it is: environment and ignore control files.
- Representative files:
  - `.gitignore`
  - `apps/api/.env.example`
- Key conventions:
  - API env variables are validated in code at startup.
  - Keep environment-specific values externalized.

### api-app

- What it is: Express API application.
- Representative files:
  - `apps/api/src/app.ts`
  - `apps/api/src/server.ts`
- Key conventions:
  - Keep app factory, startup, and entrypoint separate.
  - Register routes through `registerRoutes(app)`.
  - Validate config in `apps/api/src/config/env.ts` and fail fast on missing `TMDB_API_KEY`.

### web-app

- What it is: React + Vite web app.
- Representative files:
  - `apps/web/src/App.tsx`
  - `apps/web/src/index.css`
- Key conventions:
  - Use Tailwind v4 utility syntax and semantic CSS variable shorthand (`bg-(--surface-...)`).
  - Treat `apps/web/src/index.css` as the design-token and semantic theme source of truth.

### mobile-app

- What it is: Expo Router mobile app.
- Representative files:
  - `apps/mobile/app/_layout.tsx`
  - `apps/mobile/components/themed-text.tsx`
- Key conventions:
  - Use file-based routing in `apps/mobile/app/*`.
  - Use themed hooks/wrappers (`useColorScheme`, `useThemeColor`, `ThemedText`, `ThemedView`).
  - Use platform-specific files when needed (`*.ios.tsx`, `*.web.ts`).

### mobile-assets

- What it is: static assets for Expo mobile app.
- Representative files:
  - `apps/mobile/assets/images/icon.png`
  - `apps/mobile/assets/images/splash-icon.png`
- Key conventions:
  - Keep app icon/splash/adaptive icon references aligned with `apps/mobile/app.json`.

### shared-eslint-config

- What it is: reusable lint configurations.
- Representative files:
  - `packages/eslint-config/server.js`
  - `packages/eslint-config/vite.js`
- Key conventions:
  - Prefer extending shared internal presets over app-local duplication.

### shared-typescript-config

- What it is: reusable TS config baselines.
- Representative files:
  - `packages/typescript-config/base.json`
  - `packages/typescript-config/vite.json`
- Key conventions:
  - Keep strict TS defaults by extending these configs in apps/packages.

### shared-jest-preset

- What it is: reusable test preset package.
- Representative files:
  - `packages/jest-presets/node/jest-preset.js`
- Key conventions:
  - Reuse internal Jest preset for TS/Jest consistency.

### shared-logger

- What it is: shared logging utility package.
- Representative files:
  - `packages/logger/src/index.ts`
  - `packages/logger/src/__tests__/log.test.ts`
- Key conventions:
  - Keep API simple and test side effects with Jest spies for console behavior.

### shared-runtime-packages

- What it is: shared domain/runtime package scaffolds (hooks/types/ui/tmdb).
- Representative files:
  - `packages/tmdb/src/client.ts`
  - `packages/types/src/movie.ts`
- Key conventions:
  - Respect package boundaries and extend existing packages rather than introducing parallel folders.
  - Many files are currently placeholders; add concrete logic incrementally while preserving structure.

### generated-cache-files

- What it is: build cache artifacts currently present in repository.
- Representative files:
  - `apps/web/tsconfig.tsbuildinfo`
- Key conventions:
  - Do not treat cache files as feature source files.

## 3. Feature Scaffold Guide

When implementing a new feature, choose files by concern and location:

1. Determine feature surface.

- API-only: add/extend files under `apps/api/src/*`.
- Web UI: add components/screens under `apps/web/src/*`.
- Mobile UI: add routes/components/hooks under `apps/mobile/app/*` and `apps/mobile/components/*`.
- Shared logic/contracts: use `packages/*`.

2. Place files according to existing structure.

- API routing: extend `apps/api/src/routes/*` and wire through `registerRoutes`.
- API configuration: keep env/http concerns under `apps/api/src/config/*`.
- Web styling: keep tokens/semantic theming in `apps/web/src/index.css`; consume via Tailwind utilities in JSX.
- Mobile navigation: add route files under `apps/mobile/app/*` and configure layout in `_layout.tsx` files.
- Shared contracts and clients: use `packages/types`, `packages/tmdb`, `packages/hooks`, `packages/ui`.

3. Naming and structure conventions.

- TypeScript for source files (`.ts`, `.tsx`).
- React component files in PascalCase where already used (web/shared UI).
- Expo route files follow route naming conventions (`_layout.tsx`, grouped folders like `(tabs)`).
- Keep test files in `__tests__` where package conventions already exist.

4. Example scaffold mapping.

- New web component feature:
  - `apps/web/src/components/<FeatureName>.tsx` (if introducing component folder)
  - Optionally add related shared hook in `packages/hooks/src/use<FeatureName>.ts` if reused.
- New mobile screen feature:
  - `apps/mobile/app/<route>.tsx`
  - Optional supporting component in `apps/mobile/components/<feature>.tsx`
  - Use themed wrappers/hooks for color behavior.
- New TMDB-backed API capability:
  - Extend `packages/tmdb/src/endpoints/<endpoint>.ts`
  - Add/extend API route in `apps/api/src/routes/*`
  - Add domain contract updates in `packages/types/src/*`.

## 4. Integration Rules

Follow these architecture constraints to avoid inconsistent output:

- Monorepo boundaries:
  - Keep deployable code under `apps/*` and reusable code under `packages/*`.
  - Reuse `@phoenix/*` packages instead of duplicating utility logic across apps.

- API runtime:
  - Keep startup split (`index.ts` -> `startServer()` in `server.ts`).
  - Keep middleware composition centralized in `createApp()`.
  - Keep route mounting centralized via `registerRoutes(app)`.
  - Preserve fail-fast env validation (`TMDB_API_KEY`, `PORT`).

- Web design system:
  - Keep token/semantic definitions in `apps/web/src/index.css`.
  - Use Tailwind v4 CSS variable shorthand (`bg-(--var)`, `text-(--var)`).
  - Prefer semantic variables for mode-sensitive colors; avoid duplicating theme logic with ad-hoc dark-mode JSX branches when semantic variables already cover it.

- Mobile theming/navigation:
  - Preserve Expo Router file-based navigation structure.
  - Use `useColorScheme`/`useThemeColor` and themed wrappers for color behavior.
  - Use platform-specific suffix files where existing patterns already do so.

- Shared packages:
  - Extend existing package scopes (`types`, `hooks`, `ui`, `tmdb`, `logger`) before creating new shared package surface area.

## 5. Example Prompt Usage

User prompt example:

> Create a feature that lets users search upcoming movies and save favorites from both web and mobile.

Expected Copilot-convention response plan in this repository:

1. Shared contracts and integration:

- `packages/types/src/movie.ts` (extend movie/favorite-related types)
- `packages/tmdb/src/endpoints/search.ts` (search endpoint logic)
- `packages/tmdb/src/endpoints/upcoming.ts` (upcoming endpoint logic)
- `packages/hooks/src/useMovies.ts` and `packages/hooks/src/useFavorites.ts` (shared hooks)

2. API surface:

- `apps/api/src/routes/index.ts` (or split route module under `apps/api/src/routes/*` if introduced)
- Optional API service modules under future `apps/api/src/services/*` only if consistent with current incremental architecture.

3. Web implementation:

- `apps/web/src/App.tsx` (or new component files under `apps/web/src/*`)
- Keep styling with semantic Tailwind variable utilities and existing token conventions.

4. Mobile implementation:

- Add/extend route screen files under `apps/mobile/app/*`
- Reuse `ThemedText`, `ThemedView`, and hook-based color resolution.

5. Tests (where pattern exists):

- Co-located tests under package `__tests__` directories (e.g., logger-style convention) for shared logic added in packages.

Use only categories and patterns that already exist in this repository, and expand scaffold files incrementally rather than replacing project structure.
