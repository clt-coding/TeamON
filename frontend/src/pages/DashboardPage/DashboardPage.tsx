import { useState } from "react";
import { Sidebar } from "../../components/layout/Sidebar";
import { ListingDetailModal } from "../../components/player/ListingDetailModal";
import { PlayerCard } from "../../components/player/PlayerCard";
import { Icon } from "../../components/ui/Icon";
import { players } from "../../data/players.mock";
import type { Player, Position } from "../../types";
import { EmptyState } from "./components/EmptyState";
import { ListingsHeader } from "./components/ListingsHeader";
import { useFilteredPlayers } from "./useFilteredPlayers";
import styles from "./DashboardPage.module.css";

export function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [positions, setPositions] = useState<Position[]>([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Player | null>(null);

  const filteredPlayers = useFilteredPlayers(players, positions, search);

  return (
    <div className={styles.layout}>
      <Sidebar
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        positions={positions}
        onPositionsChange={setPositions}
      />
      <main className={styles.listings}>
        <ListingsHeader search={search} onSearchChange={setSearch} />
        <div className={styles.resultsLine}>
          <span>{filteredPlayers.length} DOSTĘPNYCH GRACZY</span>
          <button type="button">
            NAJNOWSZE <Icon name="chevron" size={14} />
          </button>
        </div>
        {filteredPlayers.length ? (
          <div className={styles.cardsGrid}>
            {filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} onOpen={setSelected} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </main>
      {selected && (
        <ListingDetailModal player={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
