import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./estilos/gaming-global.css";
import "./estilos/gaming-navbar.css";
import "./estilos/gaming-cards.css";
import "./estilos/gaming-buttons.css";
import "./estilos/gaming-layout.css";
import "./estilos/gaming-effects.css";
import "./estilos/gaming-about.css";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
