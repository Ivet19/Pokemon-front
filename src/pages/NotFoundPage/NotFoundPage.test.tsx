import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show '404' inside a heading", () => {
      render(<NotFoundPage />);

      const pageTitle = screen.getByRole("heading", {
        name: /404/i,
      });

      expect(pageTitle).toBeVisible();
    });

    test("Then it should show a Pikachu with a detective hat and a hand lens", () => {
      render(<NotFoundPage />);

      const pageImage = screen.getByAltText(
        "Pikachu with a detective hat and a hand lens",
      );

      expect(pageImage).toBeVisible();
    });
  });
});
