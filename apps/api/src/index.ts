import dotenv from "dotenv";
import { log } from "@phoenix/logger";

import { createApp } from "./app";

dotenv.config();

const port = process.env.PORT || 3002;
const app = createApp();

app.listen(port, () => {
  log(`api running on ${port}`);
});

export default app;
