import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "../../types";
import { AppContext, LANGUAGE_STORAGE_KEY } from "./context";

function readStoredLanguage(): Language | undefined {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored === "PL" || stored === "EN" ? stored : undefined;
  } catch {
    return undefined;
  }
}

export function AppProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(
    () => initialLanguage ?? readStoredLanguage() ?? "PL",
  );

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Storage can be blocked (private mode); the choice just won't persist.
    }
  }, [language]);

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
}
