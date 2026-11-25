import { Link } from "react-router";
import { ROUTES } from "../../../routes";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link to={ROUTES.home} className={styles.logo} aria-label="TeamON — strona główna">
      Team<span>ON</span>
      <i />
    </Link>
  );
}
