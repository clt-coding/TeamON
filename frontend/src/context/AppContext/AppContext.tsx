import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "../../types";

export interface AppContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const AppContext = createContext<AppContextValue | undefined>(
  undefined,
);

export function AppProvider({
  children,
  initialLanguage = "PL",
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
}
