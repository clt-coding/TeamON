import { Link } from "react-router";
import { ROUTES } from "../../routes";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <main className={styles.page}>
      <span>404</span>
      <h1>Nie znaleziono strony</h1>
      <p>Ta strona nie istnieje albo gracz usunął swój profil.</p>
      <Link to={ROUTES.dashboard}>Wróć do ogłoszeń</Link>
    </main>
  );
}
