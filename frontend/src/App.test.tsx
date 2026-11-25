import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { renderWithProviders } from "./test/renderWithProviders";

describe("App routing", () => {
  it("navigates from the landing page to the dashboard on 'Zaloguj się'", async () => {
    // Regression: dashboard-page.tsx used to contain a copy of the landing page.
    renderWithProviders(<App />);
    await userEvent.click(screen.getByRole("button", { name: "Zaloguj się" }));
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Znajdź swój team.",
    );
    expect(screen.queryByRole("button", { name: "Zaloguj się" })).not.toBeInTheDocument();
  });

  it("opens my profile from the topbar chip", async () => {
    renderWithProviders(<App />, { initialEntries: ["/dashboard"] });
    await userEvent.click(screen.getByRole("link", { name: "Mój profil: Nyxie" }));
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Nyxie");
    expect(screen.getByRole("button", { name: /Edytuj profil/ })).toBeInTheDocument();
  });

  it("goes from a listing to the author's profile", async () => {
    renderWithProviders(<App />, { initialEntries: ["/dashboard"] });
    await userEvent.click(screen.getByRole("button", { name: /Zdjęcie profilowe Vexon/ }));
    await userEvent.click(
      within(screen.getByRole("dialog")).getByRole("button", { name: "Zobacz profil" }),
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Vexon");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("returns to the landing page from the logo", async () => {
    renderWithProviders(<App />, { initialEntries: ["/dashboard"] });
    await userEvent.click(screen.getByRole("link", { name: "TeamON — strona główna" }));
    expect(screen.getByRole("button", { name: "Zaloguj się" })).toBeInTheDocument();
  });

  it("shows 404 for unknown URLs", () => {
    renderWithProviders(<App />, { initialEntries: ["/does-not-exist"] });
    expect(screen.getByRole("heading", { name: "Nie znaleziono strony" })).toBeInTheDocument();
  });
});
