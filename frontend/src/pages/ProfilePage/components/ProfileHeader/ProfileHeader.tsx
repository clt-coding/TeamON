import { Button } from "../../../../components/ui/Button";
import { Icon } from "../../../../components/ui/Icon";
import type { Player } from "../../../../types";
import styles from "./ProfileHeader.module.css";

export interface ProfileHeaderProps {
  player: Player;
  isOwnProfile: boolean;
}

export function ProfileHeader({ player, isOwnProfile }: ProfileHeaderProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <img src={player.image} alt={`Zdjęcie profilowe ${player.username}`} />
        {player.online && <span className="live-dot" aria-label="Online" />}
      </div>
      <div className={styles.title}>
        <span className="kicker">{isOwnProfile ? "MÓJ PROFIL" : "PROFIL GRACZA"}</span>
        <h1>
          {player.username} <b>{player.age}</b>
        </h1>
        <p>
          <b className="flag">{player.flag}</b> {player.country}
          <i />
          {player.languages.join(" / ")}
          <i />
          {player.position} · {player.rank}
        </p>
      </div>
      {isOwnProfile ? (
        <Button variant="secondary" className={styles.action}>
          <Icon name="edit" size={18} /> Edytuj profil
        </Button>
      ) : (
        <Button className={styles.action}>
          Zaproś do drużyny <Icon name="arrow" size={18} />
        </Button>
      )}
    </section>
  );
}
