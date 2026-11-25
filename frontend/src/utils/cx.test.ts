import { cx } from "./cx";

describe("cx", () => {
  it("joins truthy class names", () => {
    expect(cx("a", "b")).toBe("a b");
  });

  it("skips falsy values", () => {
    expect(cx("a", false, null, undefined, "", "c")).toBe("a c");
  });
});
