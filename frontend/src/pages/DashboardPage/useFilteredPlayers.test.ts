import { renderHook } from "@testing-library/react";
import { players } from "../../data/players.mock";
import { filterPlayers, useFilteredPlayers } from "./useFilteredPlayers";

describe("filterPlayers", () => {
  it("returns everyone with no filters", () => {
    expect(filterPlayers(players, [], "")).toHaveLength(players.length);
  });

  it("filters by any of the selected positions", () => {
    const result = filterPlayers(players, ["Top", "Mid"], "");
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((p) => ["Top", "Mid"].includes(p.position))).toBe(true);
  });

  it("searches username case-insensitively", () => {
    expect(filterPlayers(players, [], "nyx").map((p) => p.username)).toEqual([
      "Nyxie",
    ]);
  });

  it("searches listing titles", () => {
    expect(
      filterPlayers(players, [], "turnieje").map((p) => p.username),
    ).toContain("Rewen");
  });

  it("combines position and search", () => {
    expect(filterPlayers(players, ["Jungle"], "nyx")).toEqual([]);
  });
});

describe("useFilteredPlayers", () => {
  it("returns the filtered list", () => {
    const { result } = renderHook(() =>
      useFilteredPlayers(players, ["Support"], ""),
    );
    expect(result.current.every((p) => p.position === "Support")).toBe(true);
  });
});
