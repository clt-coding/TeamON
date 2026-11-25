import { Icon } from "../../../../components/ui/Icon";
import styles from "./ListingsHeader.module.css";

export interface ListingsHeaderProps {
  search: string;
  onSearchChange: (search: string) => void;
}

export function ListingsHeader({ search, onSearchChange }: ListingsHeaderProps) {
  return (
    <div className={styles.header}>
      <div>
        <span className="kicker">01 / GRACZE</span>
        <h1>
          Znajdź swój <em className="accent">team.</em>
        </h1>
        <p>Osoby, które pasują do Twojego stylu gry.</p>
      </div>
      <label className={styles.searchBox}>
        <Icon name="search" />
        <input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Szukaj gracza..."
          aria-label="Szukaj gracza"
        />
      </label>
    </div>
  );
}
