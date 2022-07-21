// JUST A NORMAL SERVER, nothing special.

import express from "express";
import compression from "compression";
import ssr from "./routes/ssr.js";
const app = express();

// Allow static content
app.use(compression());
app.use(express.static("public"));

app.use("/firstssr", ssr);

const port = process.env.PORT || 3030;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});
