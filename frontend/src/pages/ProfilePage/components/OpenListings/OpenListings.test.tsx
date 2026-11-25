import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { players } from "../../../../data/players.mock";
import { OpenListings } from "./OpenListings";
import { renderWithProviders } from "../../../../test/renderWithProviders";

const listings = players.slice(0, 2);

describe("OpenListings", () => {
  it("renders every listing with its count", () => {
    renderWithProviders(<OpenListings listings={listings} onOpen={() => {}} />);
    expect(screen.getByText("02")).toBeInTheDocument();
    for (const listing of listings) {
      expect(screen.getByRole("heading", { name: listing.title })).toBeInTheDocument();
    }
  });

  it("opens a listing from the details link", async () => {
    const onOpen = vi.fn();
    renderWithProviders(<OpenListings listings={listings} onOpen={onOpen} />);
    await userEvent.click(screen.getAllByRole("button", { name: /ZOBACZ SZCZEGÓŁY/ })[1]);
    expect(onOpen).toHaveBeenCalledWith(listings[1]);
  });
});
