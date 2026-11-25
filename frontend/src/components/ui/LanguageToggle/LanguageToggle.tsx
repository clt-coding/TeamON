import { useApp } from "../../../context/AppContext";
import { useTranslation } from "../../../i18n";
import type { Language } from "../../../types";
import { cx } from "../../../utils/cx";
import styles from "./LanguageToggle.module.css";

const LANGUAGES: Language[] = ["PL", "EN"];

export function LanguageToggle() {
  const { language, setLanguage } = useApp();
  const { t } = useTranslation();
  return (
    <div className={styles.toggle} role="group" aria-label={t("languageToggle.label")}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          className={cx(language === lang && styles.active)}
          aria-pressed={language === lang}
          onClick={() => setLanguage(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
