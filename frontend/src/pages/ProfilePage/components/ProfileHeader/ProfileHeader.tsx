import { Button } from "../../../../components/ui/Button";
import { Icon } from "../../../../components/ui/Icon";
import { useTranslation } from "../../../../i18n";
import type { Player } from "../../../../types";
import styles from "./ProfileHeader.module.css";

export interface ProfileHeaderProps {
  player: Player;
  isOwnProfile: boolean;
}

export function ProfileHeader({ player, isOwnProfile }: ProfileHeaderProps) {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <img src={player.image} alt={t("card.photoAlt", { name: player.username })} />
        {player.online && <span className="live-dot" aria-label="Online" />}
      </div>
      <div className={styles.title}>
        <span className="kicker">{isOwnProfile ? t("profile.mine") : t("profile.player")}</span>
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
          <Icon name="edit" size={18} /> {t("profile.edit")}
        </Button>
      ) : (
        <Button className={styles.action}>
          {t("profile.invite")} <Icon name="arrow" size={18} />
        </Button>
      )}
    </section>
  );
}
