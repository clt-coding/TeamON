import { Icon } from "../../../../components/ui/Icon";
import { useTranslation } from "../../../../i18n";
import styles from "./ListingsHeader.module.css";

export interface ListingsHeaderProps {
  search: string;
  onSearchChange: (search: string) => void;
}

export function ListingsHeader({ search, onSearchChange }: ListingsHeaderProps) {
  const { t } = useTranslation();
  return (
    <div className={styles.header}>
      <div>
        <span className="kicker">{t("listings.kicker")}</span>
        <h1>
          {t("listings.titleBefore")} <em className="accent">{t("listings.titleAccent")}</em>
        </h1>
        <p>{t("listings.subtitle")}</p>
      </div>
      <label className={styles.searchBox}>
        <Icon name="search" />
        <input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={t("listings.searchPlaceholder")}
          aria-label={t("listings.searchLabel")}
        />
      </label>
    </div>
  );
}
