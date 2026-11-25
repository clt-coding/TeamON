import { useTranslation } from "../../../../i18n";
import styles from "./EmptyState.module.css";

export function EmptyState({
  title,
  message,
}: {
  title?: string;
  message?: string;
}) {
  const { t } = useTranslation();
  return (
    <div className={styles.empty}>
      <span>0</span>
      <h2>{title ?? t("listings.emptyTitle")}</h2>
      <p>{message ?? t("listings.emptyMessage")}</p>
    </div>
  );
}
