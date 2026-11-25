import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ListingDetailModal } from "../../components/player/ListingDetailModal";
import { currentUser, findPlayerByUsername } from "../../data/players.mock";
import { ROUTES } from "../../routes";
import type { Player } from "../../types";
import { NotFoundPage } from "../NotFoundPage";
import { OpenListings } from "./components/OpenListings";
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfilePanel } from "./components/ProfilePanel";
import styles from "./ProfilePage.module.css";

export function ProfilePage() {
  const { username = "" } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Player | null>(null);

  const isOwnProfile =
    username === "me" ||
    username.toLowerCase() === currentUser.username.toLowerCase();
  const player = isOwnProfile ? currentUser : findPlayerByUsername(username);

  if (!player) return <NotFoundPage />;

  return (
    <main className={styles.page}>
      <button
        type="button"
        className={styles.backButton}
        onClick={() => navigate(ROUTES.dashboard)}
      >
        ← WRÓĆ DO OGŁOSZEŃ
      </button>

      <ProfileHeader player={player} isOwnProfile={isOwnProfile} />

      <div className={styles.grid}>
        <ProfilePanel kicker="01 / O MNIE" title="Opis" className={styles.bioPanel}>
          <p>{player.bio}</p>
        </ProfilePanel>
        <ProfilePanel kicker="02 / ZAINTERESOWANIA" title="Zainteresowania">
          <div className={styles.tags}>
            {player.interests.map((interest) => (
              <b key={interest}>{interest}</b>
            ))}
          </div>
        </ProfilePanel>
        <ProfilePanel kicker="03 / GRY" title="W co gram">
          {player.games.map((game) => (
            <div key={game.name} className={styles.gameRow}>
              <div aria-hidden="true">LoL</div>
              <p>
                <strong>{game.name}</strong>
                <small>{game.rank}</small>
              </p>
              <b>{game.hoursPlayed} h</b>
            </div>
          ))}
        </ProfilePanel>
      </div>

      <OpenListings listings={[player]} onOpen={setSelected} />

      {selected && (
        <ListingDetailModal player={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
