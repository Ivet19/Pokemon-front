import React from "react";
import { Pokemon } from "../../types";
import "./PokemonCard.css";
import usePokemons from "../../hooks/usePokemons";

interface PokecardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokecardProps> = ({
  pokemon: { id, imageAlt, imageUrl, name, pokedexPosition, types },
}) => {
  const { removePokemonById } = usePokemons();
  return (
    <article className="pokemon">
      <span className="pokemon__position">Nº {pokedexPosition}</span>
      <button
        className="pokemon__delete-button"
        onClick={() => removePokemonById(id)}
      >
        <img src="trash.svg" alt="delete" width={28.8} height={28.8} />
      </button>
      <img
        src={`${imageUrl}`}
        alt={`${imageAlt}`}
        className="pokemon__image"
        width={300}
        height={300}
      />
      <div className="pokemon__data">
        <h3 className="pokemon__name">{name}</h3>
        <div className="pokemon__types">
          {types.map((type) => (
            <span
              key={type.type.name}
              className={`pokemon__type pokemon__type--${type.type.name}`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PokemonCard;
