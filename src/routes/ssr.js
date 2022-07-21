import express from "express";
import App from "../components/app";
import React from "react";
import { renderToString } from "react-dom/server";
// Template engine
import hbs from "handlebars";

const router = express.Router();

// {{{reactele}}} — is a handlebar syntax of the variable “reactele”.
// The content DOM rendered by React will be replaced here. The 3 braces
// is to escape the HTML values
router.get("/", async (req, res) => {
  const theHtml = `
  <html>
  <head><title>SSR Demo</title></head>
  <body>
  <h1>SSR DEMO</h1>
  <div id="reactele">{{{reactele}}}</div> 
  <script src="/app.js" charset="utf-8"></script>
  <script src="/vendor.js" charset="utf-8"></script>
  </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(theHtml);

  // You can log this out and see the HTML String
  const reactComp = renderToString(<App />);
  // Templating engine
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  res.send(htmlToSend);
});

export default router;
