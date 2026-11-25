import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import { MemoryRouter } from "react-router";
import { AppProvider } from "../context/AppContext";
import type { Language } from "../types";

export function renderWithProviders(
  ui: ReactElement,
  {
    initialEntries = ["/"],
    language,
  }: { initialEntries?: string[]; language?: Language } = {},
) {
  return render(
    <AppProvider initialLanguage={language}>
      <MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>
    </AppProvider>,
  );
}
