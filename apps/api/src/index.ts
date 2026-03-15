import { log } from "@phoenix/logger";
import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";

const port = process.env.PORT || 3002;
const app: Express = express();
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

app.listen(port, () => {
  console.log("process", process.env);
  log(`api running on ${port}`);
});

export default app;
