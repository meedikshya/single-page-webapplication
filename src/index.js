import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/index.scss";
import "./styles/Header.module.scss";
import "./styles/variables.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
