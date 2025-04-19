import React from "react";
import { Pokemon } from "../../types";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <ul className="pokemons">
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard pokemon={pokemon}></PokemonCard>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
