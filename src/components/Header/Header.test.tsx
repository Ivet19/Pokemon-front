import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokedex' inside a level 1 heading", () => {
      render(<Header />);

      const headerTitle = screen.getByRole("heading", {
        name: /pokedex/i,
        level: 1,
      });

      expect(headerTitle).toBeVisible();
    });

    test("Then it should show 'Pokemon'", () => {
      render(<Header />);

      const imageAlt = screen.getByAltText("Pokémon");

      expect(imageAlt).toBeVisible();
    });
  });
});
