import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { AppProvider } from "./AppContext";
import { useApp } from "./useApp";

const wrapper = ({ children }: { children: ReactNode }) => (
  <AppProvider>{children}</AppProvider>
);

describe("AppContext", () => {
  it("defaults to Polish", () => {
    const { result } = renderHook(() => useApp(), { wrapper });
    expect(result.current.language).toBe("PL");
  });

  it("changes language", () => {
    const { result } = renderHook(() => useApp(), { wrapper });
    act(() => result.current.setLanguage("EN"));
    expect(result.current.language).toBe("EN");
  });

  it("throws outside the provider", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useApp())).toThrow(
      "useApp must be used within an AppProvider",
    );
  });
});
