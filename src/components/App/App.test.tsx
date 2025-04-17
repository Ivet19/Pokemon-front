import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokedex' inside a level 1 heading", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const headerTitle = screen.getByRole("heading", {
        name: /pokedex/i,
        level: 1,
      });

      expect(headerTitle).toBeVisible();
    });

    test("Then it should show 'Pokemon'", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const imageAlt = screen.getByAltText("Pokémon");

      expect(imageAlt).toBeVisible();
    });
  });
});
