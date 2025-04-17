import React from "react";
import { Pokemon } from "../types";
import "./PokemonList.css";

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <ul className="pokemons">
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}></li>
      ))}
    </ul>
  );
};

export default PokemonList;
