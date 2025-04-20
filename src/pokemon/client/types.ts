import { PokemonDto } from "../dto/types";
import { PokemonData } from "../types";
import { Pokemon } from "../types";

export interface PokemonsClientStructure {
  getPokemons: () => Promise<PokemonDto[]>;
  addPokemon: (pokemonData: PokemonData) => Promise<Pokemon>;
}
