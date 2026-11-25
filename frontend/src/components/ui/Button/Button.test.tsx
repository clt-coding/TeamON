import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders a primary button by default", () => {
    render(<Button>Zaloguj się</Button>);
    const button = screen.getByRole("button", { name: "Zaloguj się" });
    expect(button).toHaveClass("button", "primary");
    expect(button).toHaveAttribute("type", "button");
  });

  it("applies the variant and extra className", () => {
    render(
      <Button variant="secondary" className="extra">
        Anuluj
      </Button>,
    );
    expect(screen.getByRole("button")).toHaveClass("secondary", "extra");
  });

  it("calls onClick", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Klik</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
