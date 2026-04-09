import dotenv from "dotenv";

type RuntimeEnv = "development" | "preview" | "production" | "test";

function resolveEnvFile(runtimeEnv: RuntimeEnv): string {
  if (runtimeEnv === "production") {
    return ".env.production";
  }

  if (runtimeEnv === "preview") {
    return ".env.preview";
  }

  return ".env";
}

const runtimeEnv = (process.env.NODE_ENV || "development") as RuntimeEnv;

// Load .env first, then overlay with env-specific file when applicable.
dotenv.config({ path: ".env" });

const envFile = resolveEnvFile(runtimeEnv);
if (envFile !== ".env") {
  dotenv.config({ path: envFile, override: true });
}

export interface AppConfig {
  port: number;
  nodeEnv: RuntimeEnv;
  tmdbApiKey: string;
  tmdbBaseUrl: string;
}

/**
 * Validate and load environment configuration.
 * Fails fast if required variables are missing.
 */
function loadConfig(): AppConfig {
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3002;
  const nodeEnv = runtimeEnv;
  const tmdbApiKey = process.env.TMDB_API_KEY;
  const tmdbBaseUrl =
    process.env.TMDB_BASE_URL || "https://api.themoviedb.org/3";

  if (!tmdbApiKey) {
    throw new Error(
      "Missing required environment variable: TMDB_API_KEY. Set it in .env/.env.preview/.env.production or export it in your shell.",
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
