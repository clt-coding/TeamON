import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { players } from "../../../data/players.mock";
import { PlayerCard } from "./PlayerCard";
import { renderWithProviders } from "../../../test/renderWithProviders";

const player = players[0];

describe("PlayerCard", () => {
  it("shows the player's key info", () => {
    renderWithProviders(<PlayerCard player={player} onOpen={() => {}} />);
    expect(screen.getByRole("heading", { name: player.username })).toBeInTheDocument();
    expect(screen.getByText(String(player.age))).toBeInTheDocument();
    expect(screen.getByText(player.title)).toBeInTheDocument();
    expect(screen.getByText(player.languages.join(" / "))).toBeInTheDocument();
    expect(screen.getByTitle(player.country)).toHaveTextContent(player.flag);
    expect(screen.getByTitle("Support")).toHaveTextContent("SSupport");
    expect(screen.getByText("ONLINE")).toBeInTheDocument();
    expect(screen.getByText(player.voiceChat)).toBeInTheDocument();
    expect(screen.getByText(`${player.yearsPlaying} lat`)).toBeInTheDocument();
  });

  it("shows the rank emblem with the rank name under it", () => {
    const { container } = renderWithProviders(
      <PlayerCard player={player} onOpen={() => {}} />,
    );
    expect(screen.getByText(player.rank)).toBeInTheDocument();
    expect(container.querySelector('img[src="/ranks/diamond.png"]')).toBeInTheDocument();
  });

  it("shows every role, main role first", () => {
    renderWithProviders(
      <PlayerCard
        player={{ ...player, positions: ["Top", "Mid", "Jungle"] }}
        onOpen={() => {}}
      />,
    );
    const roles = within(screen.getByRole("list", { name: "Role" })).getAllByRole(
      "listitem",
    );
    expect(roles.map((li) => li.title)).toEqual(["Top", "Mid", "Jungle"]);
    expect(roles.map((li) => li.textContent)).toEqual(["TTop", "MMid", "JJungle"]);
  });

  it("shows at most three favourite champions", () => {
    const champions = ["Lux", "Katarina", "Caitlyn", "Ahri"];
    renderWithProviders(
      <PlayerCard player={{ ...player, favouriteChampions: champions }} onOpen={() => {}} />,
    );
    const list = screen.getByRole("list", { name: "Ulubieni bohaterowie" });
    expect(within(list).getAllByRole("listitem").map((li) => li.textContent)).toEqual(
      champions.slice(0, 3),
    );
  });

  it("shows OFFLINE for offline players", () => {
    const offline = players.find((p) => !p.online)!;
    renderWithProviders(<PlayerCard player={offline} onOpen={() => {}} />);
    expect(screen.getByText("OFFLINE")).toBeInTheDocument();
  });

  it("uses English text when EN is selected", () => {
    renderWithProviders(<PlayerCard player={player} onOpen={() => {}} />, {
      language: "EN",
    });
    expect(screen.getByText(`${player.yearsPlaying} yrs`)).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Favourite champions" })).toBeInTheDocument();
  });

  it("calls onOpen with the player when clicked", async () => {
    const onOpen = vi.fn();
    renderWithProviders(<PlayerCard player={player} onOpen={onOpen} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onOpen).toHaveBeenCalledWith(player);
  });
});
