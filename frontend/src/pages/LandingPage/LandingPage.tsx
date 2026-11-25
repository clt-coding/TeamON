import { useNavigate } from "react-router";
import { Button } from "../../components/ui/Button";
import { Icon } from "../../components/ui/Icon";
import { LanguageToggle } from "../../components/ui/LanguageToggle";
import { Logo } from "../../components/ui/Logo";
import { players } from "../../data/players.mock";
import { useTranslation } from "../../i18n";
import { ROUTES } from "../../routes";
import { cx } from "../../utils/cx";
import { HeroCard } from "./components/HeroCard";
import { SocialProof } from "./components/SocialProof";
import styles from "./LandingPage.module.css";

export function LandingPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  // Auth is mocked for the POC: both actions go straight to the dashboard.
  const enterApp = () => navigate(ROUTES.dashboard);

  return (
    <main className={styles.landing}>
      <header className={styles.header}>
        <Logo />
        <LanguageToggle />
      </header>

      <section className={styles.hero}>
        <div className={styles.photo} />
        <div className={styles.grid} />
        <div className={cx(styles.orb, styles.orbOne)} />
        <div className={cx(styles.orb, styles.orbTwo)} />

        <div className={styles.content}>
          <div className={cx("kicker", styles.eyebrow)}>
            <span /> {t("landing.eyebrow")}
          </div>
          <h1>
            {t("landing.titleLine1")}
            <br />
            {t("landing.titleLine2")}{" "}
            <em className="accent">{t("landing.titleAccent")}</em>
          </h1>
          <p className={styles.lead}>
            {t("landing.lead")}
          </p>
          <div className={styles.actions}>
            <Button variant="primary" onClick={enterApp}>
              {t("landing.register")} <Icon name="arrow" size={18} />
            </Button>
            <Button variant="secondary" onClick={enterApp}>
              {t("landing.login")}
            </Button>
          </div>
          <SocialProof avatars={players.slice(1, 4)} count="4 800+" />
        </div>

        <HeroCard player={players[0]} />

        <div className={styles.caption}>
          <span>02</span>
          <p>
            {t("landing.caption")}
          </p>
        </div>
      </section>
    </main>
  );
}
