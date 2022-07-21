import React from "react";
import { hydrate } from "react-dom";
import App from "./app";
// This is the most important step in SSR the hyrdaration phase.
// Here, React will attempt to attach event listeners to the existing markup.
hydrate(<App />, document.getElementById("reactele"));
