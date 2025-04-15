import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "@fontsource/fusion-pixel-10px-proportional-jp/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
