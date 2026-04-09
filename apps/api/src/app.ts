import cors from "cors";
import express, { type Express } from "express";
import morgan from "morgan";

import { registerRoutes } from "./routes";

/**
 * Create and configure the Express application.
 * Composes middleware and registers routes.
 */
export function createApp(): Express {
  const app: Express = express();

  // Disable x-powered-by header for security
  app.disable("x-powered-by");

  // Middleware stack
  app
    .use(morgan("dev"))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

  // Register routes
  registerRoutes(app);

  return app;
}
