import { Link } from "react-router";
import { Icon } from "../../ui/Icon";
import { LanguageToggle } from "../../ui/LanguageToggle";
import { Logo } from "../../ui/Logo";
import { currentUser } from "../../../data/players.mock";
import { useTranslation } from "../../../i18n";
import { ROUTES } from "../../../routes";
import { cx } from "../../../utils/cx";
import styles from "./Topbar.module.css";

export function Topbar() {
  const { t } = useTranslation();
  return (
    <header className={styles.topbar}>
      <Logo />
      <nav aria-label={t("topbar.gamesNav")}>
        <button type="button" className={cx(styles.gameTab, styles.active)}>
          <Icon name="game" size={18} /> League of Legends
        </button>
        <button type="button" className={cx(styles.gameTab, styles.soon)}>
          {t("topbar.addGame")}
        </button>
      </nav>
      <div className={styles.actions}>
        <LanguageToggle />
        <Link
          to={ROUTES.myProfile}
          className={styles.profileChip}
          aria-label={t("topbar.myProfile", { name: currentUser.username })}
        >
          <img src={currentUser.image} alt="" />
          <span>
            <small>{t("topbar.loggedInAs")}</small>
            {currentUser.username}
          </span>
          <Icon name="chevron" size={16} />
        </Link>
      </div>
    </header>
  );
}
