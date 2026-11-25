import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { Position } from "../../../types";
import { Sidebar } from "./Sidebar";
import { renderWithProviders } from "../../../test/renderWithProviders";

function setup(
  overrides: Partial<{ collapsed: boolean; positions: Position[] }> = {},
) {
  const onCollapsedChange = vi.fn();
  const onPositionsChange = vi.fn();
  renderWithProviders(
    <Sidebar
      collapsed={overrides.collapsed ?? false}
      onCollapsedChange={onCollapsedChange}
      positions={overrides.positions ?? []}
      onPositionsChange={onPositionsChange}
    />,
  );
  return { onCollapsedChange, onPositionsChange };
}

describe("Sidebar", () => {
  it("renders all positions as toggle buttons", () => {
    setup();
    for (const name of ["Top", "Jungle", "Mid", "Bot", "Support"]) {
      expect(screen.getByRole("button", { name: new RegExp(name) })).toBeInTheDocument();
    }
  });

  it("adds a position when an unselected one is clicked", async () => {
    const { onPositionsChange } = setup({ positions: ["Top"] });
    await userEvent.click(screen.getByRole("button", { name: /Mid/ }));
    expect(onPositionsChange).toHaveBeenCalledWith(["Top", "Mid"]);
  });

  it("removes a position when a selected one is clicked", async () => {
    const { onPositionsChange } = setup({ positions: ["Top", "Mid"] });
    await userEvent.click(screen.getByRole("button", { name: /Top/ }));
    expect(onPositionsChange).toHaveBeenCalledWith(["Mid"]);
  });

  it("clears positions", async () => {
    const { onPositionsChange } = setup({ positions: ["Top"] });
    await userEvent.click(screen.getByRole("button", { name: "Wyczyść filtry" }));
    expect(onPositionsChange).toHaveBeenCalledWith([]);
  });

  it("requests collapse and hides filters when collapsed", async () => {
    const { onCollapsedChange } = setup();
    await userEvent.click(screen.getByRole("button", { name: "Zwiń filtry" }));
    expect(onCollapsedChange).toHaveBeenCalledWith(true);
  });

  it("shows only the label when collapsed", () => {
    setup({ collapsed: true });
    expect(screen.getByText("FILTRY")).toBeInTheDocument();
    expect(screen.queryByText("Czego szukasz?")).not.toBeInTheDocument();
  });

  it("switches between player and tournament search", async () => {
    setup();
    const tournament = screen.getByRole("button", { name: "Turnieju" });
    await userEvent.click(tournament);
    expect(tournament).toHaveAttribute("aria-pressed", "true");
  });
});
