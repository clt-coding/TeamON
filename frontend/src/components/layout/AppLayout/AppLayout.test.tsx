import { screen } from "@testing-library/react";
import { Route, Routes } from "react-router";
import { renderWithProviders } from "../../../test/renderWithProviders";
import { AppLayout } from "./AppLayout";

describe("AppLayout", () => {
  it("renders the topbar and the routed child page", () => {
    renderWithProviders(
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/child" element={<p>Child page</p>} />
        </Route>
      </Routes>,
      { initialEntries: ["/child"] },
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText("Child page")).toBeInTheDocument();
  });
});
