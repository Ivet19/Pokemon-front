import PokemonForm from "../../components/PokemonForm/PokemonForm";
import usePokemons from "../../hooks/usePokemons";
import "./AddPokemonPage.css";

const AddPokemonPage: React.FC = () => {
  const { createPokemon } = usePokemons();

  return (
    <main className="main">
      <div className="form-container">
        <header className="add-pokemon-header">
          <h2 className="main-title">Add a new pokémon</h2>
        </header>
        <PokemonForm action={createPokemon} />
      </div>
    </main>
  );
};

export default AddPokemonPage;
