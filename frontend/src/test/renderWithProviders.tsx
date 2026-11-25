import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import { MemoryRouter } from "react-router";
import { AppProvider } from "../context/AppContext";

export function renderWithProviders(
  ui: ReactElement,
  { initialEntries = ["/"] }: { initialEntries?: string[] } = {},
) {
  return render(
    <AppProvider>
      <MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>
    </AppProvider>,
  );
}
