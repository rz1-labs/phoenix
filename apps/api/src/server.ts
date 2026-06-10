import { log } from "@phoenix/logger";
import { type Express } from "express";
import { createApp } from "./app";
import { config } from "./config/env";

/**
 * Start the Express server and listen for incoming requests.
 * Exported for testing and programmatic startup.
 */
export function startServer(app: Express = createApp()): Promise<void> {
  const { port } = config;

  return new Promise<void>((resolve, reject) => {
    const server = app.listen(port, () => {
      log.info(`api running on ${port}`, config);
      resolve();
    });

    server.once("error", reject);
  });
}
