import { useApp } from "../../../context/AppContext";
import type { Language } from "../../../types";
import { cx } from "../../../utils/cx";
import styles from "./LanguageToggle.module.css";

const LANGUAGES: Language[] = ["PL", "EN"];

export function LanguageToggle() {
  const { language, setLanguage } = useApp();
  return (
    <div className={styles.toggle} role="group" aria-label="Wybierz język">
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
