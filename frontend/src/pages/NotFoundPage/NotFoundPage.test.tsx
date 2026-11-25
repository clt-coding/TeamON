import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";
import { NotFoundPage } from "./NotFoundPage";

describe("NotFoundPage", () => {
  it("explains the error and links back to listings", () => {
    renderWithProviders(<NotFoundPage />);
    expect(screen.getByRole("heading", { name: "Nie znaleziono strony" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Wróć do ogłoszeń" })).toHaveAttribute(
      "href",
      "/dashboard",
    );
  });

  it("is shown in English when EN is selected", () => {
    renderWithProviders(<NotFoundPage />, { language: "EN" });
    expect(screen.getByRole("heading", { name: "Page not found" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Back to listings" })).toBeInTheDocument();
  });
});
