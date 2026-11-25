import { render, screen } from "@testing-library/react";
import { players } from "../../../../data/players.mock";
import { SocialProof } from "./SocialProof";

describe("SocialProof", () => {
  it("renders one avatar per player and the count", () => {
    const { container } = render(
      <SocialProof avatars={players.slice(0, 3)} count="4 800+" />,
    );
    expect(container.querySelectorAll("img")).toHaveLength(3);
    expect(screen.getByText("4 800+")).toBeInTheDocument();
  });
});
