import { Pokemon } from "../types";
import { PokemonDto } from "./types";

export const mapPokemonsDtoToPokemons = (
  pokemonsDto: PokemonDto[],
): Pokemon[] => {
  const pokemons = pokemonsDto.map<Pokemon>(({ name, ...pokemonDto }) => ({
    ...pokemonDto,
    name,
    imageAlt: `front view of the ${name} pokemon`,
    type: [],
  }));

  return pokemons;
};
