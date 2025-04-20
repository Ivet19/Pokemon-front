import { Pokemon, PokemonData } from "../types";
import { PokemonDto } from "../dto/types";
import { PokemonsClientStructure } from "./types";
import { mapPokemonDtoToPokemon } from "../dto/mappers";

class PokemonClient implements PokemonsClientStructure {
  private getFulledPokemon = async (currentPokemon: PokemonDto) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${currentPokemon.name.toLowerCase()}`,
    );

    if (!response.ok)
      throw new Error("An error occured when fetching pokeApi pokemon");

    const pokemonProperties = (await response.json()) as {
      types: { type: { name: string } }[];
      abilities: { ability: { name: string } }[];
      id: number;
    };

    const pokemon = mapPokemonDtoToPokemon(
      currentPokemon,
      pokemonProperties.types,
      pokemonProperties.abilities,
      pokemonProperties.id.toString(),
    );

    return pokemon;
  };

  apiUrl = import.meta.env.VITE_API_URL;

  public getPokemons = async (): Promise<Pokemon[]> => {
    const response = await fetch(`${this.apiUrl}/pokemon`);

    if (!response.ok)
      throw new Error("An error occured when fetching pokemons.");

    const { pokemons: apiPokemons } = (await response.json()) as {
      pokemons: PokemonDto[];
    };

    const pokemons = await apiPokemons.map(
      async (pokemonDto): Promise<Pokemon> => {
        const pokemon = this.getFulledPokemon(pokemonDto);

        return pokemon;
      },
    );

    const resultPokemons = await Promise.all(pokemons);

    return resultPokemons;
  };

  public async addPokemon(pokemonData: PokemonData): Promise<Pokemon> {
    const apiUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${apiUrl}/pokemon`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemonData),
    });

    if (!response.ok) {
      throw new Error("Error creating pokemon");
    }

    const newPokemon = (await response.json()) as PokemonDto;

    const pokemon = this.getFulledPokemon(newPokemon);

    return pokemon;
  }
}

export default PokemonClient;
