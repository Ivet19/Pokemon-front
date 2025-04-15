import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokedex' inside a level 1 heading", () => {
      render(<App />);

      const headerTitle = screen.getByRole("heading", {
        name: /pokedex/i,
        level: 1,
      });

      expect(headerTitle).toBeVisible();
    });

    test("Then it should show 'Pokemon'", () => {
      render(<App />);

      const imageAlt = screen.getByAltText("Pokémon");

      expect(imageAlt).toBeVisible();
    });
  });
});
