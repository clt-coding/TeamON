import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route, Routes } from "react-router";
import { players } from "../../data/players.mock";
import { renderWithProviders } from "../../test/renderWithProviders";
import { ProfilePage } from "./ProfilePage";

function renderAt(path: string) {
  renderWithProviders(
    <Routes>
      <Route path="/profile/:username" element={<ProfilePage />} />
      <Route path="/dashboard" element={<p>Dashboard route</p>} />
    </Routes>,
    { initialEntries: [path] },
  );
}

describe("ProfilePage", () => {
  it("shows another player's profile with all panels", () => {
    const player = players[1];
    renderAt(`/profile/${player.username}`);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(player.username);
    expect(screen.getByText(player.bio)).toBeInTheDocument();
    for (const interest of player.interests) {
      expect(screen.getByText(interest)).toBeInTheDocument();
    }
    expect(screen.getByText("League of Legends")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Otwarte ogłoszenia" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Edytuj profil/ })).not.toBeInTheDocument();
  });

  it("shows the edit button on my own profile", () => {
    renderAt("/profile/me");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Nyxie");
    expect(screen.getByRole("button", { name: /Edytuj profil/ })).toBeInTheDocument();
  });

  it("shows not found for an unknown user", () => {
    renderAt("/profile/nobody");
    expect(screen.getByText("Nie znaleziono strony")).toBeInTheDocument();
  });

  it("opens the listing detail from open listings", async () => {
    renderAt("/profile/Vexon");
    await userEvent.click(screen.getByRole("button", { name: /Zdjęcie profilowe Vexon/ }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("goes back to the dashboard", async () => {
    renderAt("/profile/Vexon");
    await userEvent.click(screen.getByRole("button", { name: /WRÓĆ DO OGŁOSZEŃ/ }));
    expect(screen.getByText("Dashboard route")).toBeInTheDocument();
  });
});
