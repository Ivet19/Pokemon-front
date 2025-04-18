import { PokemonDto } from "../dto/types";

export interface PokemonsClientStructure {
  getPokemons: () => Promise<PokemonDto[]>;
}
