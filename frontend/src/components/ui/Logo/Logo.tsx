import { Link } from "react-router";
import { useTranslation } from "../../../i18n";
import { ROUTES } from "../../../routes";
import styles from "./Logo.module.css";

export function Logo() {
  const { t } = useTranslation();
  return (
    <Link to={ROUTES.home} className={styles.logo} aria-label={t("logo.home")}>
      Team<span>ON</span>
      <i />
    </Link>
  );
}
