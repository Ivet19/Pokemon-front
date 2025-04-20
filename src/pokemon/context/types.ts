import { Pokemon, PokemonData } from "../types";

interface PokemonContextStructure {
  pokemons: Pokemon[];
  loadPokemons: () => Promise<void>;
  createPokemon: (pokemonData: PokemonData) => Promise<void>;
}

export default PokemonContextStructure;
