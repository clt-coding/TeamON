import { render, screen } from "@testing-library/react";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders default copy", () => {
    render(<EmptyState />);
    expect(screen.getByRole("heading", { name: "Brak graczy" })).toBeInTheDocument();
  });

  it("accepts custom copy", () => {
    render(<EmptyState title="Pusto" message="Nic tu nie ma" />);
    expect(screen.getByRole("heading", { name: "Pusto" })).toBeInTheDocument();
    expect(screen.getByText("Nic tu nie ma")).toBeInTheDocument();
  });
});
