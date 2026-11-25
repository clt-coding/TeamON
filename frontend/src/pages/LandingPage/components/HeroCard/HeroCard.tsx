import { positionMarks } from "../../../../data/positions";
import type { Player } from "../../../../types";
import styles from "./HeroCard.module.css";

/** "Recently joined" showcase card on the landing page. */
export function HeroCard({ player }: { player: Player }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <span className="live-dot" /> OSTATNIO DOŁĄCZYŁA
        <span>01 / 03</span>
      </div>
      <img src={player.image} alt={`${player.username}, graczka League of Legends`} />
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
        <span className="role-mark">{positionMarks[player.position]}</span>
      </div>
    </div>
  );
}
