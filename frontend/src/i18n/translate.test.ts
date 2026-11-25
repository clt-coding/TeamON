import en from "./en.json";
import pl from "./pl.json";
import { translate } from "./translate";

describe("translate", () => {
  it("returns the Polish text for PL", () => {
    expect(translate("PL", "sidebar.clearFilters")).toBe("Wyczyść filtry");
  });

  it("returns the English text for EN", () => {
    expect(translate("EN", "sidebar.clearFilters")).toBe("Clear filters");
  });

  it("fills placeholders", () => {
    expect(translate("EN", "card.photoAlt", { name: "Kasia" })).toBe(
      "Profile photo of Kasia",
    );
    expect(translate("PL", "modal.years", { count: 3 })).toBe("3 lat");
  });

  it("keeps unknown placeholders untouched", () => {
    expect(translate("EN", "card.photoAlt", { other: "x" })).toBe(
      "Profile photo of {name}",
    );
  });

  it("has the same keys in both dictionaries", () => {
    expect(Object.keys(en).sort()).toEqual(Object.keys(pl).sort());
  });
});
