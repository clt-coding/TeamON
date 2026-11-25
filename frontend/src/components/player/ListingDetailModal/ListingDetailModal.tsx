import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../ui/Button";
import { Icon } from "../../ui/Icon";
import { useTranslation } from "../../../i18n";
import { profilePath } from "../../../routes";
import type { Player } from "../../../types";
import styles from "./ListingDetailModal.module.css";

export interface ListingDetailModalProps {
  player: Player;
  onClose: () => void;
}

const initials = (name: string) =>
  name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();

export function ListingDetailModal({ player, onClose }: ListingDetailModalProps) {
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const openProfile = () => {
    onClose();
    navigate(profilePath(player.username));
  };

  return (
    <div className={styles.backdrop} onMouseDown={onClose} data-testid="modal-backdrop">
      <section
        className={styles.modal}
        onMouseDown={(event) => event.stopPropagation()}
        aria-modal="true"
        role="dialog"
        aria-label={t("modal.label")}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label={t("modal.close")}
        >
          <Icon name="close" />
        </button>
        <div className={styles.user}>
          <img src={player.image} alt="" />
          <div>
            <span className={player.online ? styles.onlineLabel : undefined}>
              {player.online ? "ONLINE" : "OFFLINE"}
            </span>
            <h3>
              {player.username}, {player.age}
            </h3>
            <p>
              <b className="flag">{player.flag}</b> {player.country} ·{" "}
              {player.languages.join(" / ")}
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <span className="kicker">{t("modal.kicker")}</span>
          <h2>“{player.title}”</h2>
          <p>{player.description}</p>
          <div className={styles.statGrid}>
            <div>
              <Icon name="clock" />
              <span>{t("modal.experience")}</span>
              <strong>{t("modal.years", { count: player.yearsPlaying })}</strong>
            </div>
            <div>
              <span className={styles.rankGem}>◆</span>
              <span>{t("modal.currentRank")}</span>
              <strong>{player.rank}</strong>
            </div>
            <div>
              <Icon name="mic" />
              <span>VOICE CHAT</span>
              <strong>{player.voiceChat}</strong>
            </div>
          </div>
          <div className={styles.champions}>
            <span>{t("modal.favouriteChampions")}</span>
            {player.favouriteChampions.map((champion) => (
              <div key={champion}>
                <b>{initials(champion)}</b> {champion}
              </div>
            ))}
          </div>
          <div className={styles.actions}>
            <Button
              variant={sent ? "success" : "primary"}
              className={styles.primaryAction}
              onClick={() => setSent(true)}
            >
              {sent ? t("modal.requestSent") : t("modal.sendRequest")}{" "}
              <Icon name="arrow" size={18} />
            </Button>
            <Button variant="secondary" onClick={openProfile}>
              {t("modal.viewProfile")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
