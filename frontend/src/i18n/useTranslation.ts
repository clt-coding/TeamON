import { useCallback } from "react";
import { useApp } from "../context/AppContext";
import type { TranslationKey } from "./pl";
import { translate } from "./translate";
import type { TranslationParams } from "./translate";

/** Returns `t(key, params?)` bound to the language selected in AppContext. */
export function useTranslation() {
  const { language } = useApp();
  const t = useCallback(
    (key: TranslationKey, params?: TranslationParams) =>
      translate(language, key, params),
    [language],
  );
  return { t, language };
}
