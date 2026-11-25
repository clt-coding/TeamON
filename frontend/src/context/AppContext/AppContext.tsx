import { useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "../../types";
import { AppContext } from "./context";

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
