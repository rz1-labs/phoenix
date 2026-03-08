import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    // serve a simple HTML page at the root path
    .get("/", (_, res) => {
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
    })
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });

  return app;
};

// Vercel (and some other platforms) expect the default export to be a
// function or an Express server instance.  We keep the named export for
// internal use/tests but also expose it as the default so that when the
// compiled `dist/server.js` file is imported by a deployment bundle it
// satisfies the requirement.
export default createServer;
