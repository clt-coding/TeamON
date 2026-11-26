import { useMemo } from "react";
import type { Player, Position } from "../../types";

export function filterPlayers(
  players: Player[],
  positions: Position[],
  search: string,
) {
  const query = search.trim().toLowerCase();
  return players.filter(
    (player) =>
      (!positions.length || player.positions.some((position) => positions.includes(position))) &&
      (player.username.toLowerCase().includes(query) ||
        player.title.toLowerCase().includes(query)),
  );
}

export function useFilteredPlayers(
  players: Player[],
  positions: Position[],
  search: string,
) {
  return useMemo(
    () => filterPlayers(players, positions, search),
    [players, positions, search],
  );
}
