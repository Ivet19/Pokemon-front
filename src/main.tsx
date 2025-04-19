import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter";
import "@fontsource/fusion-pixel-10px-proportional-jp/index.css";
import "@fontsource-variable/roboto-flex/index.css";
import "./styles/styles.css";
import PokemonContextProvider from "./pokemon/context/PokemonContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PokemonContextProvider>
        <AppRouter />
      </PokemonContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
