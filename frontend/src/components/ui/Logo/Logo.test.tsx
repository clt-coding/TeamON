import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../test/renderWithProviders";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("links to the landing page", () => {
    renderWithProviders(<Logo />, { initialEntries: ["/dashboard"] });
    expect(
      screen.getByRole("link", { name: "TeamON — strona główna" }),
    ).toHaveAttribute("href", "/");
  });
});
