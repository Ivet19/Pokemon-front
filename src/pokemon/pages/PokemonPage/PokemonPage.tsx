import { useEffect } from "react";
import usePokemons from "../../hooks/usePokemons";
import PokemonList from "../../components/PokemonList/PokemonList";
import "./PokemonPage.css";

const PokemonPage: React.FC = () => {
  const { pokemons, loadPokemons } = usePokemons();

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  const pokemonsTotal = pokemons.length;

  return (
    <main className="pokedex">
      <header className="pokedex__header">
        <div className="pokedex-title-container">
          <img src="pokedex.webp" alt="pokedex icon" width={55} height={82.5} />
          <h2 className="pokedex__title">Pokémon in pokedex</h2>
        </div>
        <span className="pokedex__counter">{`Total: ${pokemonsTotal}`}</span>
      </header>
      <PokemonList pokemons={pokemons} />
    </main>
  );
};

export default PokemonPage;
