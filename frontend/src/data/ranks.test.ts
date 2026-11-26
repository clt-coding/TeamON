import { rankEmblem, rankTier } from "./ranks";

describe("rankTier", () => {
  it("returns the lowercased tier name", () => {
    expect(rankTier("Gold II")).toBe("gold");
    expect(rankTier("Master")).toBe("master");
  });
});

describe("rankEmblem", () => {
  it("points to the tier emblem", () => {
    expect(rankEmblem("Gold II")).toBe("/ranks/gold.png");
    expect(rankEmblem("Diamond IV")).toBe("/ranks/diamond.png");
    expect(rankEmblem("Emerald I")).toBe("/ranks/emerald.png");
  });

  it("falls back to the unranked emblem for unknown tiers", () => {
    expect(rankEmblem("Unranked")).toBe("/ranks/unranked.png");
    expect(rankEmblem("")).toBe("/ranks/unranked.png");
  });
});
