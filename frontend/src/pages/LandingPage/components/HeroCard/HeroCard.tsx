import { positionMarks } from "../../../../data/positions";
import { useTranslation } from "../../../../i18n";
import type { Player } from "../../../../types";
import styles from "./HeroCard.module.css";

/** "Recently joined" showcase card on the landing page. */
export function HeroCard({ player }: { player: Player }) {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <span className="live-dot" /> {t("heroCard.recentlyJoined")}
        <span>01 / 03</span>
      </div>
      <img src={player.image} alt={t("heroCard.photoAlt", { name: player.username })} />
      <div className={styles.body}>
        <div>
          <h3>
            {player.username} <span>{player.age}</span>
          </h3>
          <p>
            <span className="flag">{player.flag}</span> {player.country} ·{" "}
            {player.languages.join(" / ")}
          </p>
        </div>
        <span className="role-mark">{positionMarks[player.positions[0]]}</span>
      </div>
    </div>
  );
}
