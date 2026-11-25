import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { players } from "../../../data/players.mock";
import { PlayerCard } from "./PlayerCard";

const player = players[0];

describe("PlayerCard", () => {
  it("shows the player's key info", () => {
    render(<PlayerCard player={player} onOpen={() => {}} />);
    expect(screen.getByRole("heading", { name: player.username })).toBeInTheDocument();
    expect(screen.getByText(String(player.age))).toBeInTheDocument();
    expect(screen.getByText(player.country)).toBeInTheDocument();
    expect(screen.getByText(player.languages.join(" / "))).toBeInTheDocument();
    expect(screen.getByText(player.title)).toBeInTheDocument();
    expect(screen.getByTitle(player.position)).toHaveTextContent("S");
    expect(screen.getByText("ONLINE")).toBeInTheDocument();
  });

  it("shows OFFLINE for offline players", () => {
    const offline = players.find((p) => !p.online)!;
    render(<PlayerCard player={offline} onOpen={() => {}} />);
    expect(screen.getByText("OFFLINE")).toBeInTheDocument();
  });

  it("calls onOpen with the player when clicked", async () => {
    const onOpen = vi.fn();
    render(<PlayerCard player={player} onOpen={onOpen} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onOpen).toHaveBeenCalledWith(player);
  });
});
