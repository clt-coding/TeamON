import { screen } from "@testing-library/react";
import { players } from "../../../../data/players.mock";
import { HeroCard } from "./HeroCard";
import { renderWithProviders } from "../../../../test/renderWithProviders";

describe("HeroCard", () => {
  it("shows the featured player", () => {
    const player = players[0];
    renderWithProviders(<HeroCard player={player} />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      `${player.username} ${player.age}`,
    );
    expect(screen.getByRole("img")).toHaveAttribute("src", player.image);
    expect(screen.getByText("OSTATNIO DOŁĄCZYŁA")).toBeInTheDocument();
  });
});
