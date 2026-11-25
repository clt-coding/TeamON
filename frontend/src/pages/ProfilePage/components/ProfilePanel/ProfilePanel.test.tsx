import { render, screen } from "@testing-library/react";
import { ProfilePanel } from "./ProfilePanel";

describe("ProfilePanel", () => {
  it("renders kicker, title and content as a labelled region", () => {
    render(
      <ProfilePanel kicker="01 / O MNIE" title="Opis" className="extra">
        <p>Treść</p>
      </ProfilePanel>,
    );
    const region = screen.getByRole("region", { name: "Opis" });
    expect(region).toHaveClass("extra");
    expect(region).toHaveTextContent("01 / O MNIE");
    expect(screen.getByRole("heading", { name: "Opis" })).toBeInTheDocument();
    expect(screen.getByText("Treść")).toBeInTheDocument();
  });
});
