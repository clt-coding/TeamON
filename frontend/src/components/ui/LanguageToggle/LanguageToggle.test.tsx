import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../test/renderWithProviders";
import { LanguageToggle } from "./LanguageToggle";

describe("LanguageToggle", () => {
  it("starts with Polish selected", () => {
    renderWithProviders(<LanguageToggle />);
    expect(screen.getByRole("button", { name: "PL" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "EN" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("switches to English on click", async () => {
    renderWithProviders(<LanguageToggle />);
    await userEvent.click(screen.getByRole("button", { name: "EN" }));
    expect(screen.getByRole("button", { name: "EN" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
});
