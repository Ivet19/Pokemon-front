import { createContext } from "react";
import PokemonContextStructure from "./types";

export const PokemonContext = createContext<PokemonContextStructure | null>(
  null,
);

PokemonContext.displayName = "PokemonContext";
