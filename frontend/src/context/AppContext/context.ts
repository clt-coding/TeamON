import { createContext } from "react";
import type { Language } from "../../types";

export interface AppContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const AppContext = createContext<AppContextValue | undefined>(
  undefined,
);
