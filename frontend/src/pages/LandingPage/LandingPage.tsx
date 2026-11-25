import { useNavigate } from "react-router";
import { Button } from "../../components/ui/Button";
import { Icon } from "../../components/ui/Icon";
import { LanguageToggle } from "../../components/ui/LanguageToggle";
import { Logo } from "../../components/ui/Logo";
import { players } from "../../data/players.mock";
import { ROUTES } from "../../routes";
import { cx } from "../../utils/cx";
import { HeroCard } from "./components/HeroCard";
import { SocialProof } from "./components/SocialProof";
import styles from "./LandingPage.module.css";

export function LandingPage() {
  const navigate = useNavigate();
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
            <span /> TWOJA GRA. TWOJA EKIPA.
          </div>
          <h1>
            Przestań grać
            <br />z <em className="accent">przypadkiem.</em>
          </h1>
          <p className={styles.lead}>
            Masz dość grania z losowymi osobami? Tutaj znajdziesz swoje duo
            idealnie pasujące do Ciebie.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" onClick={enterApp}>
              Zarejestruj się <Icon name="arrow" size={18} />
            </Button>
            <Button variant="secondary" onClick={enterApp}>
              Zaloguj się
            </Button>
          </div>
          <SocialProof avatars={players.slice(1, 4)} count="4 800+" />
        </div>

        <HeroCard player={players[0]} />

        <div className={styles.caption}>
          <span>02</span>
          <p>
            Brakuje Wam ostatniej osoby w drużynie do zagrania na turnieju? W
            TeamON szybko znajdziesz brakującego gracza.
          </p>
        </div>
      </section>
    </main>
  );
}
