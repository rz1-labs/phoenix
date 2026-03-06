# Phoenix Monorepo Architecture

Phoenix is a full-stack monorepo for a movie discovery and alert application with web and mobile clients.

## Project Structure

- **apps/api** – Node.js backend with Express/Fastify, database models, services, and cron jobs
- **apps/web** – React + Vite PWA frontend
- **apps/mobile** – React Native + Expo mobile app
- **packages/types** – Shared TypeScript types
- **packages/hooks** – Shared React hooks for web and mobile
- **packages/ui** – Shared UI component primitives
- **packages/config** – Shared configuration (eslint, tsconfig, tailwind)
- **packages/tmdb** – TMDB API client library

## Development

See README.md for setup instructions.
