import { Link } from "react-router";
import { Icon } from "../../ui/Icon";
import { LanguageToggle } from "../../ui/LanguageToggle";
import { Logo } from "../../ui/Logo";
import { currentUser } from "../../../data/players.mock";
import { ROUTES } from "../../../routes";
import { cx } from "../../../utils/cx";
import styles from "./Topbar.module.css";

export function Topbar() {
  return (
    <header className={styles.topbar}>
      <Logo />
      <nav aria-label="Gry">
        <button type="button" className={cx(styles.gameTab, styles.active)}>
          <Icon name="game" size={18} /> League of Legends
        </button>
        <button type="button" className={cx(styles.gameTab, styles.soon)}>
          + DODAJ GRĘ
        </button>
      </nav>
      <div className={styles.actions}>
        <LanguageToggle />
        <Link
          to={ROUTES.myProfile}
          className={styles.profileChip}
          aria-label={`Mój profil: ${currentUser.username}`}
        >
          <img src={currentUser.image} alt="" />
          <span>
            <small>ZALOGOWANO JAKO</small>
            {currentUser.username}
          </span>
          <Icon name="chevron" size={16} />
        </Link>
      </div>
    </header>
  );
}
