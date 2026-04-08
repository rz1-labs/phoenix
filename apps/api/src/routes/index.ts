import express, { type Express, type Router } from "express";

const router: Router = express.Router();

/**
 * Health check endpoint for k8s/load balancer probes.
 */
router.get("/health", (_, res) => {
  return res.json({ ok: true });
});

/**
 * Legacy status endpoint for compatibility.
 */
router.get("/status", (_, res) => {
  return res.json({ ok: true });
});

/**
 * Register all API routes with the Express app.
 * Currently mounted at /api/v1 for future versioning.
 */
export function registerRoutes(app: Express): void {
  // Serve a simple HTML page at the root path
  app.get("/", (_, res) => {
    return res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>Phoenix API</title>
        </head>
        <body>
          <h1>Welcome to the Phoenix API</h1>
          <p>The server is up and running.</p>
        </body>
      </html>
    `);
  });

  // Mount versioned API routes
  app.use("/api", router);
}

export default router;
