import { useState } from "react";
import { useNavigate } from "react-router";
import { PokemonData } from "../../types";
import "./PokemonForm..css";

interface PokemonFormProps {
  action: (pokemonData: PokemonData) => Promise<void>;
}

const PokemonForm: React.FC<PokemonFormProps> = ({ action }) => {
  const initialPokemonData: PokemonData = {
    name: "",
    imageUrl: "",
    pokedexPosition: "",
  };

  const [pokemonData, setPokemonData] =
    useState<PokemonData>(initialPokemonData);

  const changePokemonData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const propertyName =
      event.target.id === "imageUrl" ? "imageUrl" : event.target.id;

    setPokemonData((pokemonData) => ({
      ...pokemonData,
      [propertyName]: newValue,
    }));
  };

  const isFormValid = pokemonData.name !== "" && pokemonData.imageUrl !== "";

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    setErrorMessage("");

    try {
      await action(pokemonData);
      navigate("/pokemon");
    } catch {
      setErrorMessage("This pokemon already exists or does not exist.");
    }
  };

  return (
    <>
      <form className="pokemon-form" onSubmit={onSubmitForm}>
        <h3 className="pokemon-form__instructions">
          Please fill out the following form to add a new pokémon:
        </h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="pokemon-form__text-box"
            type="text"
            id="name"
            value={pokemonData.name}
            onChange={changePokemonData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            className="pokemon-form__text-box"
            type="url"
            id="imageUrl"
            value={pokemonData.imageUrl}
            onChange={changePokemonData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pokedexPosition">Pokedex position:</label>
          <input
            className="pokemon-form__text-box"
            type="number"
            id="pokedexPosition"
            value={pokemonData.pokedexPosition.toString()}
            onChange={changePokemonData}
            required
          />
        </div>
        {errorMessage && <p className="form__error-message">{errorMessage}</p>}
        <button
          className="pokemon-form__button"
          type="submit"
          disabled={!isFormValid}
        >
          Add pokémon
        </button>
      </form>
    </>
  );
};

export default PokemonForm;
