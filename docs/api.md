# API Documentation

## Overview

The Phoenix API provides endpoints for:
- **Auth** – user authentication and sessions
- **Movies** – querying and managing movie data
- **Alerts** – creating and managing movie release alerts
- **Theaters** – theater information and scheduling

## Endpoints

### Auth (`/api/auth`)
- `POST /api/auth/login` – user login
- `POST /api/auth/register` – user registration
- `POST /api/auth/logout` – user logout

### Movies (`/api/movies`)
- `GET /api/movies` – list movies
- `GET /api/movies/:id` – movie details
- `GET /api/movies/search` – search movies

### Alerts (`/api/alerts`)
- `GET /api/alerts` – user's alerts
- `POST /api/alerts` – create alert
- `DELETE /api/alerts/:id` – delete alert

### Theaters (`/api/theaters`)
- `GET /api/theaters` – list theaters
- `GET /api/theaters/:id` – theater details

## Jobs

- **syncNowPlaying** – periodic sync of current cinema releases
- **fireAlerts** – send notifications for matching alerts
