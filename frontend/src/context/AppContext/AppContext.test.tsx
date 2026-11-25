import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { AppProvider } from "./AppContext";
import { LANGUAGE_STORAGE_KEY } from "./context";
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

  it("remembers the chosen language across mounts", () => {
    const first = renderHook(() => useApp(), { wrapper });
    act(() => first.result.current.setLanguage("EN"));
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("EN");
    expect(document.documentElement.lang).toBe("en");
    first.unmount();

    const { result } = renderHook(() => useApp(), { wrapper });
    expect(result.current.language).toBe("EN");
  });

  it("falls back to Polish for an invalid stored value", () => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, "DE");
    const { result } = renderHook(() => useApp(), { wrapper });
    expect(result.current.language).toBe("PL");
  });

  it("throws outside the provider", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useApp())).toThrow(
      "useApp must be used within an AppProvider",
    );
  });
});
