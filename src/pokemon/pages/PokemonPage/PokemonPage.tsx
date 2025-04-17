import PokemonList from "../../components/PokemonList";
import { Pokemon } from "../../types";
import "./PokemonPage.css";

const PokemonPage: React.FC = () => {
  const pokemons: Pokemon[] = [];

  const pokemonsTotal = pokemons.length;

  return (
    <div className="pokedex">
      <header className="pokedex__header">
        <h2 className="pokedex__title">Pokedex</h2>
        <span className="pokedex__counter">{`Total: ${pokemonsTotal}`}</span>
      </header>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default PokemonPage;
