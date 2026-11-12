import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ModeProvaider } from "./src/Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ModeProvaider>
      <App />
    </ModeProvaider>
  </BrowserRouter>,
);
