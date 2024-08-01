import App from "./app.tsx";
import "./index.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/raleway";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
