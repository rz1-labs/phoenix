import { log } from "@phoenix/logger";
import { type Express } from "express";
import { createApp } from "./app.js";
import { config } from "./config/env.js";

/**
 * Start the Express server and listen for incoming requests.
 * Exported for testing and programmatic startup.
 */
export async function startServer(app: Express = createApp()): Promise<void> {
  const { port } = config;

  return new Promise<void>((resolve, reject) => {
    try {
      const server = app.listen(port, () => {
        log(`api running on ${port}`);
        resolve();
      });

      // Handle server errors
      server.on("error", (error) => {
        reject(error);
      });
    } catch (error) {
      reject(error);
    }
  });
}
