import { fireEvent, render, screen } from "@testing-library/react";
import { ListingsHeader } from "./ListingsHeader";

describe("ListingsHeader", () => {
  it("shows the title and current search", () => {
    render(<ListingsHeader search="nyx" onSearchChange={() => {}} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Znajdź swój team.",
    );
    expect(screen.getByRole("textbox", { name: "Szukaj gracza" })).toHaveValue("nyx");
  });

  it("reports search changes", () => {
    const onSearchChange = vi.fn();
    render(<ListingsHeader search="" onSearchChange={onSearchChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "mid" } });
    expect(onSearchChange).toHaveBeenCalledWith("mid");
  });
});
