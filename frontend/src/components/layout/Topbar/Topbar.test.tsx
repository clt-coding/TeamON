import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../test/renderWithProviders";
import { Topbar } from "./Topbar";

describe("Topbar", () => {
  it("shows the League of Legends game tab", () => {
    renderWithProviders(<Topbar />);
    expect(
      screen.getByRole("button", { name: /League of Legends/ }),
    ).toBeInTheDocument();
  });

  it("links the profile chip to the current user's profile", () => {
    renderWithProviders(<Topbar />);
    expect(
      screen.getByRole("link", { name: "Mój profil: Nyxie" }),
    ).toHaveAttribute("href", "/profile/me");
  });
});
