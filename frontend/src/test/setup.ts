import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
  // The selected language is persisted; reset it so every test starts in PL.
  localStorage.clear();
});
