import { Pokemon } from "../types";
import { PokemonDto } from "../dto/types";
import { PokemonsClientStructure } from "./types";
import { mapPokemonDtoToPokemon } from "../dto/mappers";

class PokemonClient implements PokemonsClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  private getFulledPokemon = async (currentPokemon: PokemonDto) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${currentPokemon.name.toLowerCase()}`,
    );

    if (!response.ok)
      throw new Error("An error occured when fetching pokemon types.");

    const pokemonTypes = (await response.json()) as {
      types: { type: { name: string } }[];
      pokedexPosition: { id: number };
    };

    const pokemon = mapPokemonDtoToPokemon(
      currentPokemon,
      pokemonTypes.types,
      pokemonTypes.pokedexPosition.toString(),
    );

    return pokemon;
  };

  public getPokemons = async (): Promise<Pokemon[]> => {
    const response = await fetch(`${this.apiUrl}/pokemon`);

    const { pokemon: apiPokemons } = (await response.json()) as {
      pokemon: PokemonDto[];
    };

    if (!apiPokemons)
      throw new Error("An error occured when fetching pokemons.");

    const pokemons = apiPokemons.map(async (pokemonDto): Promise<Pokemon> => {
      const pokemon = this.getFulledPokemon(pokemonDto);

      return pokemon;
    });

    const resultPokemons = await Promise.all(pokemons);

    return resultPokemons;
  };
}

export default PokemonClient;
