import { screen } from "@testing-library/react";
import { EmptyState } from "./EmptyState";
import { renderWithProviders } from "../../../../test/renderWithProviders";

describe("EmptyState", () => {
  it("renders default copy", () => {
    renderWithProviders(<EmptyState />);
    expect(screen.getByRole("heading", { name: "Brak graczy" })).toBeInTheDocument();
  });

  it("accepts custom copy", () => {
    renderWithProviders(<EmptyState title="Pusto" message="Nic tu nie ma" />);
    expect(screen.getByRole("heading", { name: "Pusto" })).toBeInTheDocument();
    expect(screen.getByText("Nic tu nie ma")).toBeInTheDocument();
  });
});
