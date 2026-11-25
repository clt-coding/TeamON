import { render, screen } from "@testing-library/react";
import { players } from "../../../../data/players.mock";
import { HeroCard } from "./HeroCard";

describe("HeroCard", () => {
  it("shows the featured player", () => {
    const player = players[0];
    render(<HeroCard player={player} />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      `${player.username} ${player.age}`,
    );
    expect(screen.getByRole("img")).toHaveAttribute("src", player.image);
    expect(screen.getByText("OSTATNIO DOŁĄCZYŁA")).toBeInTheDocument();
  });
});
