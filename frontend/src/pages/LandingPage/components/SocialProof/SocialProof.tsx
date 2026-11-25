import type { Player } from "../../../../types";
import styles from "./SocialProof.module.css";

export function SocialProof({ avatars, count }: { avatars: Player[]; count: string }) {
  return (
    <div className={styles.socialProof}>
      <div className={styles.avatars}>
        {avatars.map((player) => (
          <img key={player.id} src={player.image} alt="" />
        ))}
      </div>
      <div>
        <strong>{count}</strong>
        <span>graczy już szuka drużyny</span>
      </div>
    </div>
  );
}
