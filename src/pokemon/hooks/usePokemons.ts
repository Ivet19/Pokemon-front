import PokemonContextStructure from "../context/types";
import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";

const usePokemons = (): PokemonContextStructure => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("Missing Provider for PokemonContext");
  }

  return context;
};

export default usePokemons;
