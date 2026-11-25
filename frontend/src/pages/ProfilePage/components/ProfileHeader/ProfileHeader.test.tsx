import { screen } from "@testing-library/react";
import { players } from "../../../../data/players.mock";
import { ProfileHeader } from "./ProfileHeader";
import { renderWithProviders } from "../../../../test/renderWithProviders";

const player = players[2];

describe("ProfileHeader", () => {
  it("shows the player's basic data", () => {
    renderWithProviders(<ProfileHeader player={player} isOwnProfile={false} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      `${player.username} ${player.age}`,
    );
    expect(screen.getByText(new RegExp(player.country))).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", player.image);
  });

  it("offers an invite on someone else's profile", () => {
    renderWithProviders(<ProfileHeader player={player} isOwnProfile={false} />);
    expect(screen.getByRole("button", { name: /Zaproś do drużyny/ })).toBeInTheDocument();
  });

  it("offers editing on my own profile", () => {
    renderWithProviders(<ProfileHeader player={player} isOwnProfile />);
    expect(screen.getByRole("button", { name: /Edytuj profil/ })).toBeInTheDocument();
    expect(screen.getByText("MÓJ PROFIL")).toBeInTheDocument();
  });
});
