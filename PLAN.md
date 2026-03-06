# The Plan

### Directory Structure

phoenix/
├── package.json                    # root workspace config
├── turbo.json                      # turborepo pipeline
├── .env.example
├── LICENSE
├── README.md
│
├── apps/
│   ├── api/                        # Node.js + Express/Fastify
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   │   ├── auth.ts
│   │   │   │   ├── movies.ts
│   │   │   │   ├── alerts.ts
│   │   │   │   └── theaters.ts
│   │   │   ├── services/
│   │   │   │   ├── tmdb.service.ts
│   │   │   │   ├── notifications.service.ts
│   │   │   │   ├── alerts.service.ts
│   │   │   │   └── theaters.service.ts
│   │   │   ├── jobs/               # cron jobs
│   │   │   │   ├── syncNowPlaying.ts
│   │   │   │   └── fireAlerts.ts
│   │   │   ├── db/
│   │   │   │   ├── schema.ts
│   │   │   │   └── migrations/
│   │   │   ├── middleware/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── web/                        # React + Vite PWA
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── MovieCard/
│   │   │   │   ├── AlertBell/
│   │   │   │   └── TheaterMap/
│   │   │   ├── pages/
│   │   │   │   ├── Home.tsx
│   │   │   │   ├── Movie.tsx
│   │   │   │   ├── Favorites.tsx
│   │   │   │   └── Alerts.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useMovies.ts
│   │   │   │   ├── useAlerts.ts
│   │   │   │   └── usePushNotifications.ts
│   │   │   ├── lib/
│   │   │   └── main.tsx
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── mobile/                     # React Native + Expo
│       ├── src/
│       │   ├── components/
│       │   ├── screens/
│       │   │   ├── HomeScreen.tsx
│       │   │   ├── MovieScreen.tsx
│       │   │   ├── FavoritesScreen.tsx
│       │   │   └── AlertsScreen.tsx
│       │   ├── hooks/              # reused from packages/hooks
│       │   ├── navigation/
│       │   │   └── RootNavigator.tsx
│       │   └── notifications/
│       │       └── registerDevice.ts
│       ├── app.json
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   ├── types/                      # shared TypeScript types
│   │   ├── src/
│   │   │   ├── movie.ts
│   │   │   ├── alert.ts
│   │   │   ├── user.ts
│   │   │   └── theater.ts
│   │   └── package.json
│   │
│   ├── hooks/                      # shared React hooks (web + mobile)
│   │   ├── src/
│   │   │   ├── useMovies.ts
│   │   │   ├── useAlerts.ts
│   │   │   └── useFavorites.ts
│   │   └── package.json
│   │
│   ├── ui/                         # shared component primitives
│   │   ├── src/
│   │   │   ├── Button/
│   │   │   ├── Badge/
│   │   │   └── MoviePoster/
│   │   └── package.json
│   │
│   ├── config/                     # shared configs
│   │   ├── eslint/
│   │   ├── typescript/
│   │   └── tailwind/
│   │
│   └── tmdb/                       # TMDB API client (shared)
│       ├── src/
│       │   ├── client.ts
│       │   ├── endpoints/
│       │   │   ├── nowPlaying.ts
│       │   │   ├── upcoming.ts
│       │   │   └── search.ts
│       │   └── types.ts
│       └── package.json
│
└── docs/
    ├── architecture.md
    ├── contributing.md
    └── api.md