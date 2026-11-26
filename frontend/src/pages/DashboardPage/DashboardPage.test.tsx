import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { players } from "../../data/players.mock";
import { renderWithProviders } from "../../test/renderWithProviders";
import { DashboardPage } from "./DashboardPage";

const cardHeadings = () =>
  screen
    .getAllByRole("heading", { level: 3 })
    .map((heading) => heading.textContent);

describe("DashboardPage", () => {
  it("shows all 9 player listings", () => {
    renderWithProviders(<DashboardPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Znajdź swój team.",
    );
    expect(cardHeadings()).toHaveLength(players.length);
    expect(screen.getByText(`${players.length} DOSTĘPNYCH GRACZY`)).toBeInTheDocument();
  });

  it("filters by position", async () => {
    renderWithProviders(<DashboardPage />);
    await userEvent.click(screen.getByRole("button", { name: /Jungle/, pressed: false }));
    // Everyone who plays Jungle, as a main or extra role.
    expect(cardHeadings().sort()).toEqual(["Pixel", "Rewen", "Vexon"]);
  });

  it("filters by search text", async () => {
    renderWithProviders(<DashboardPage />);
    await userEvent.type(screen.getByPlaceholderText("Szukaj gracza..."), "pix");
    expect(cardHeadings()).toEqual(["Pixel"]);
  });

  it("shows the empty state when nothing matches", async () => {
    renderWithProviders(<DashboardPage />);
    await userEvent.type(screen.getByPlaceholderText("Szukaj gracza..."), "zzz");
    expect(screen.getByText("Brak graczy")).toBeInTheDocument();
  });

  it("opens and closes the listing detail", async () => {
    renderWithProviders(<DashboardPage />);
    await userEvent.click(screen.getByRole("button", { name: /Mori/ }));
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText(/ADC szuka supporta/)).toBeInTheDocument();
    await userEvent.click(within(dialog).getByRole("button", { name: "Zamknij" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("collapses the sidebar", async () => {
    renderWithProviders(<DashboardPage />);
    await userEvent.click(screen.getByRole("button", { name: "Zwiń filtry" }));
    expect(screen.getByRole("button", { name: "Rozwiń filtry" })).toBeInTheDocument();
  });
});
