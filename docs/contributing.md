# Contributing to Phoenix

Our monorepo structure ensures consistency and shareability across web and mobile projects.

## Workspace Layout

- **apps/** contains self-contained, deployable applications
- **packages/** contains shared libraries and utilities
- Each package has its own `package.json` and TypeScript config
- Use workspaces (pnpm, yarn, npm v8+) to manage dependencies

## Guidelines

1. Keep shared logic in `packages/`
2. Avoid circular dependencies between apps
3. Update tests when modifying shared packages
4. Run lints and tests before submitting PRs

See api.md for API development details.
