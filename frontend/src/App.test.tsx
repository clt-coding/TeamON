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

describe("App language switch", () => {
  it("switches the dashboard text and aria-labels to English", async () => {
    renderWithProviders(<App />, { initialEntries: ["/dashboard"] });
    expect(screen.getByRole("heading", { name: "Czego szukasz?" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "EN" }));

    expect(screen.getByRole("heading", { name: "What are you looking for?" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Czego szukasz?" })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Find your team.");
    expect(screen.getByRole("button", { name: "Clear filters" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Collapse filters" })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Choose language" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "My profile: Nyxie" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search player...")).toBeInTheDocument();
  });

  it("shows the listing modal in English", async () => {
    renderWithProviders(<App />, { initialEntries: ["/dashboard"] });
    await userEvent.click(screen.getByRole("button", { name: "EN" }));
    await userEvent.click(screen.getByRole("button", { name: /Profile photo of Vexon/ }));

    const dialog = screen.getByRole("dialog", { name: "Listing details" });
    expect(within(dialog).getByRole("button", { name: "View profile" })).toBeInTheDocument();
    expect(within(dialog).getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  it("switches back to Polish", async () => {
    renderWithProviders(<App />);
    await userEvent.click(screen.getByRole("button", { name: "EN" }));
    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "PL" }));
    expect(screen.getByRole("button", { name: "Zaloguj się" })).toBeInTheDocument();
  });
});
