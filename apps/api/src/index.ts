import { startServer } from "./server";

/**
 * Entry point for the Phoenix API.
 * Delegates to server startup logic.
 */
startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
