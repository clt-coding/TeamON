import { positionMarks } from "../../../data/positions";
import { rankEmblem } from "../../../data/ranks";
import { useTranslation } from "../../../i18n";
import type { Player } from "../../../types";
import { cx } from "../../../utils/cx";
import { Icon } from "../../ui/Icon";
import styles from "./PlayerCard.module.css";

const MAX_CHAMPIONS = 3;

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
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={player.image} alt={t("card.photoAlt", { name: player.username })} />
          <span className={cx(styles.dot, player.online && styles.online)} />
        </div>
        <div className={styles.name}>
          <h3>{player.username}</h3>
          <span>{player.age}</span>
        </div>
        <div className={styles.rank}>
          <img src={rankEmblem(player.rank)} alt="" />
          <span>{player.rank}</span>
        </div>
      </div>

      <div className={styles.tags}>
        <ul className={styles.positions} aria-label={t("card.roles")}>
          {player.positions.map((position, index) => (
            <li
              key={position}
              className={cx(styles.position, index === 0 && styles.main)}
              title={position}
            >
              <span className={cx("role-mark", styles.roleMark)}>
                {positionMarks[position]}
              </span>
              <span className={styles.roleName}>{position}</span>
            </li>
          ))}
        </ul>
        <span className={cx(styles.status, player.online && styles.online)}>
          {player.online ? t("card.online") : t("card.offline")}
        </span>
      </div>

      <p className={styles.title}>{player.title}</p>

      <ul className={styles.champions} aria-label={t("card.champions")}>
        {player.favouriteChampions.slice(0, MAX_CHAMPIONS).map((champion) => (
          <li key={champion}>{champion}</li>
        ))}
      </ul>

      <div className={styles.meta}>
        <span>
          <b className="flag" title={player.country}>
            {player.flag}
          </b>
          {player.languages.join(" / ")}
        </span>
        <span title={t("card.voiceChat")}>
          <Icon name="mic" size={13} />
          {player.voiceChat}
        </span>
        <span>
          <Icon name="clock" size={13} />
          {t("card.years", { count: player.yearsPlaying })}
        </span>
      </div>
    </button>
  );
}
