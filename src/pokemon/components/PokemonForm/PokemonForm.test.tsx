import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PokemonForm from "./PokemonForm";
import PokemonContextProvider from "../../context/PokemonContextProvider";

describe("Given the PokemonForm component", () => {
  const action = vitest.fn();

  beforeEach(() => {
    action.mockClear();
  });
  describe("When it renders", () => {
    test("Then it should show 'Please fill out the following form to add a new pokémon'", () => {
      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <PokemonForm action={action} />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const formTitle = screen.getByRole("heading", {
        name: /please fill out the following form to add a new pokémon/i,
      });

      expect(formTitle).toBeVisible();
    });

    test("Then it should show an input for Name", () => {
      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <PokemonForm action={action} />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const inputName = screen.getByLabelText(/name/i);

      expect(inputName).toBeVisible();
    });

    test("Then it should show an input for Image URL", () => {
      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <PokemonForm action={action} />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const inputDescription = screen.getByLabelText(/image url/i);

      expect(inputDescription).toBeVisible();
    });

    test("Then it should 'Add pokémon' inside a button", () => {
      render(
        <PokemonContextProvider>
          <MemoryRouter>
            <PokemonForm action={action} />
          </MemoryRouter>
        </PokemonContextProvider>,
      );

      const buttonText = screen.getByRole("button", { name: /add pokémon/i });

      expect(buttonText).toBeVisible();
    });
  });
});
