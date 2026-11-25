import { render } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders a decorative svg with the given size", () => {
    const { container } = render(<Icon name="search" size={32} />);
    const svg = container.querySelector("svg")!;
    expect(svg).toHaveAttribute("width", "32");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("data-icon", "search");
  });

  it("defaults to size 20", () => {
    const { container } = render(<Icon name="close" />);
    expect(container.querySelector("svg")).toHaveAttribute("width", "20");
  });
});
