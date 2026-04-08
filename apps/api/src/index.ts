import { createApp } from "./app.js";
import { startServer } from "./server.js";

/**
 * Entry point for the Phoenix API.
 * Delegates to server startup logic.
 */
const app = createApp();

startServer(app).catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

export default app;
