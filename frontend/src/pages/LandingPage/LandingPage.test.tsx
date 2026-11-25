import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route, Routes } from "react-router";
import { renderWithProviders } from "../../test/renderWithProviders";
import { LandingPage } from "./LandingPage";

function setup() {
  renderWithProviders(
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<p>Dashboard route</p>} />
    </Routes>,
  );
}

describe("LandingPage", () => {
  it("shows the promo copy", () => {
    setup();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Przestań graćz przypadkiem.",
    );
    expect(
      screen.getByText(/Masz dość grania z losowymi osobami/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Brakuje Wam ostatniej osoby w drużynie/),
    ).toBeInTheDocument();
  });

  it.each(["Zaloguj się", "Zarejestruj się"])(
    "navigates to the dashboard on '%s'",
    async (label) => {
      setup();
      await userEvent.click(screen.getByRole("button", { name: label }));
      expect(screen.getByText("Dashboard route")).toBeInTheDocument();
    },
  );
});
