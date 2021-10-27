import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import "./styles/cards.css";
import "./styles/fading.css"
import "./styles/extra.css"
import "./App.scss";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
