import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route, Routes } from "react-router";
import { players } from "../../../data/players.mock";
import { renderWithProviders } from "../../../test/renderWithProviders";
import { ListingDetailModal } from "./ListingDetailModal";

const player = players[0];

function setup() {
  const onClose = vi.fn();
  renderWithProviders(
    <Routes>
      <Route
        path="/"
        element={<ListingDetailModal player={player} onClose={onClose} />}
      />
      <Route path="/profile/:username" element={<p>Profile route</p>} />
    </Routes>,
  );
  return { onClose };
}

describe("ListingDetailModal", () => {
  it("shows listing details from the player data", () => {
    setup();
    const dialog = screen.getByRole("dialog", { name: "Szczegóły ogłoszenia" });
    expect(dialog).toHaveTextContent(player.title);
    expect(dialog).toHaveTextContent(player.description);
    expect(dialog).toHaveTextContent(player.rank);
    expect(dialog).toHaveTextContent(`${player.yearsPlaying} lat`);
    for (const champion of player.favouriteChampions) {
      expect(dialog).toHaveTextContent(champion);
    }
  });

  it("closes via the close button", async () => {
    const { onClose } = setup();
    await userEvent.click(screen.getByRole("button", { name: "Zamknij" }));
    expect(onClose).toHaveBeenCalled();
  });

  it("closes on backdrop click but not on dialog click", () => {
    const { onClose } = setup();
    fireEvent.mouseDown(screen.getByRole("dialog"));
    expect(onClose).not.toHaveBeenCalled();
    fireEvent.mouseDown(screen.getByTestId("modal-backdrop"));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("closes on Escape", async () => {
    const { onClose } = setup();
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalled();
  });

  it("marks the join request as sent", async () => {
    setup();
    await userEvent.click(
      screen.getByRole("button", { name: /Wyślij prośbę o dołączenie/ }),
    );
    expect(screen.getByRole("button", { name: /Prośba wysłana/ })).toBeInTheDocument();
  });

  it("navigates to the player's profile", async () => {
    const { onClose } = setup();
    await userEvent.click(screen.getByRole("button", { name: "Zobacz profil" }));
    expect(onClose).toHaveBeenCalled();
    expect(screen.getByText("Profile route")).toBeInTheDocument();
  });
});
