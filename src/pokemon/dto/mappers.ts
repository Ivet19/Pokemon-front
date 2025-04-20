import { Pokemon } from "../types";
import { PokemonDto } from "./types";

export const mapPokemonDtoToPokemon = (
  pokemonDto: PokemonDto,
  types: { type: { name: string } }[],
  abilities: { ability: { name: string } }[],
  pokedexPosition: string,
): Pokemon => {
  const pokemon = {
    ...pokemonDto,
    pokedexPosition: pokedexPosition,
    imageAlt: `front view of the ${pokemonDto.name} pokemon`,
    types: types,
    abilities: abilities,
  };

  return pokemon;
};
