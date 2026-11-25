import { positionMarks } from "../../../data/positions";
import { useTranslation } from "../../../i18n";
import type { Player } from "../../../types";
import { cx } from "../../../utils/cx";
import styles from "./PlayerCard.module.css";

export interface PlayerCardProps {
  player: Player;
  onOpen: (player: Player) => void;
  className?: string;
}

export function PlayerCard({ player, onOpen, className }: PlayerCardProps) {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      className={cx(styles.card, className)}
      onClick={() => onOpen(player)}
    >
      <div className={styles.image}>
        <img src={player.image} alt={t("card.photoAlt", { name: player.username })} />
        <span className={cx(styles.status, player.online && styles.online)}>
          {player.online ? "ONLINE" : "OFFLINE"}
        </span>
        <span className={cx("role-mark", styles.roleMark)} title={player.position}>
          {positionMarks[player.position]}
        </span>
      </div>
      <div className={styles.body}>
        <div className={styles.name}>
          <h3>{player.username}</h3>
          <span>{player.age}</span>
        </div>
        <p className={styles.title}>{player.title}</p>
        <div className={styles.meta}>
          <span>
            <b className="flag">{player.flag}</b>
            {player.country}
          </span>
          <span>{player.languages.join(" / ")}</span>
        </div>
      </div>
    </button>
  );
}
