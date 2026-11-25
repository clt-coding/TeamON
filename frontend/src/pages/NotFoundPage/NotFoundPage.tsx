import { Link } from "react-router";
import { useTranslation } from "../../i18n";
import { ROUTES } from "../../routes";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <main className={styles.page}>
      <span>404</span>
      <h1>{t("notFound.title")}</h1>
      <p>{t("notFound.message")}</p>
      <Link to={ROUTES.dashboard}>{t("notFound.back")}</Link>
    </main>
  );
}
