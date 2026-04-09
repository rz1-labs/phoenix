import dotenv from "dotenv";

dotenv.config();

export interface AppConfig {
  port: number;
  nodeEnv: "development" | "production" | "test";
  tmdbApiKey: string;
  tmdbBaseUrl: string;
}

/**
 * Validate and load environment configuration.
 * Fails fast if required variables are missing.
 */
function loadConfig(): AppConfig {
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3002;
  const nodeEnv = (process.env.NODE_ENV || "development") as
    | "development"
    | "production"
    | "test";
  const tmdbApiKey = process.env.TMDB_API_KEY;
  const tmdbBaseUrl =
    process.env.TMDB_BASE_URL || "https://api.themoviedb.org/3";

  if (!tmdbApiKey) {
    throw new Error(
      "Missing required environment variable: TMDB_API_KEY. Set it in .env or export it in your shell.",
    );
  }

  if (isNaN(port) || port < 1 || port > 65535) {
    throw new Error(
      `Invalid PORT: ${process.env.PORT}. Must be a number between 1 and 65535.`,
    );
  }

  return {
    port,
    nodeEnv,
    tmdbApiKey,
    tmdbBaseUrl,
  };
}

export const config = loadConfig();
