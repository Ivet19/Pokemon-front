import { render, screen } from "@testing-library/react";
import PokemonPage from "./PokemonPage";

describe("Given the PokemonPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokedex' inside a heading'", () => {
      render(<PokemonPage />);

      const pageTitle = screen.getByRole("heading", {
        name: /pokedex/i,
      });

      expect(pageTitle).toBeVisible();
    });
  });
});
