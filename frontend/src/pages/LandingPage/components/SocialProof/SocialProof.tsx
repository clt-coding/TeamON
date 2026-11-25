import { useTranslation } from "../../../../i18n";
import type { Player } from "../../../../types";
import styles from "./SocialProof.module.css";

export function SocialProof({ avatars, count }: { avatars: Player[]; count: string }) {
  const { t } = useTranslation();
  return (
    <div className={styles.socialProof}>
      <div className={styles.avatars}>
        {avatars.map((player) => (
          <img key={player.id} src={player.image} alt="" />
        ))}
      </div>
      <div>
        <strong>{count}</strong>
        <span>{t("socialProof.text")}</span>
      </div>
    </div>
  );
}
