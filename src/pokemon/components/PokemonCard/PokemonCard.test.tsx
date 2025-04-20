import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
import PokemonContextProvider from "../../context/PokemonContextProvider";

describe("Given the Pokecard component", () => {
  describe("When it receives Vaporeon", () => {
    test("Then it should show 'Riolu' inside a heading", () => {
      render(
        <MemoryRouter>
          <PokemonContextProvider>
            <PokemonCard
              pokemon={{
                id: "123456",
                name: "Riolu",
                types: [{ type: { name: "fighting" } }],
                pokedexPosition: "447",
                imageUrl:
                  "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/447.png",
                imageAlt: "Front view of pokemon Riolu",
                isCaptured: false,
              }}
            />
          </PokemonContextProvider>
        </MemoryRouter>,
      );

      const pokemonName = screen.getByRole("heading", { name: /riolu/i });

      expect(pokemonName).toBeVisible();
    });

    test("Then it should show a front view of pokemon Riolu", () => {
      render(
        <MemoryRouter>
          <PokemonContextProvider>
            <PokemonCard
              pokemon={{
                id: "123456",
                name: "Riolu",
                types: [{ type: { name: "fighting" } }],
                pokedexPosition: "447",
                imageUrl:
                  "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/447.png",
                imageAlt: "Front view of pokemon Riolu",
                isCaptured: false,
              }}
            />
          </PokemonContextProvider>
        </MemoryRouter>,
      );

      const pokemonImage = screen.getByAltText("Front view of pokemon Riolu");

      expect(pokemonImage).toBeVisible();
    });
  });
});
