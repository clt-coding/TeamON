import { PlayerCard } from "../../../../components/player/PlayerCard";
import { Icon } from "../../../../components/ui/Icon";
import type { Player } from "../../../../types";
import styles from "./OpenListings.module.css";

export interface OpenListingsProps {
  listings: Player[];
  onOpen: (listing: Player) => void;
}

export function OpenListings({ listings, onOpen }: OpenListingsProps) {
  return (
    <section aria-labelledby="open-listings-heading">
      <div className={styles.heading}>
        <div>
          <span>04 / OGŁOSZENIA</span>
          <h2 id="open-listings-heading">Otwarte ogłoszenia</h2>
        </div>
        <b>{String(listings.length).padStart(2, "0")}</b>
      </div>
      {listings.map((listing) => (
        <div key={listing.id} className={styles.listing}>
          <PlayerCard player={listing} onOpen={onOpen} className={styles.card} />
          <div className={styles.copy}>
            <span>OGŁOSZENIE · {listing.position.toUpperCase()}</span>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <button type="button" onClick={() => onOpen(listing)}>
              ZOBACZ SZCZEGÓŁY <Icon name="arrow" size={14} />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
