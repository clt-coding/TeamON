/** Tiers that have an emblem in public/ranks (Season 2023 Split 2 crests). */
const EMBLEM_TIERS = new Set([
  "iron",
  "bronze",
  "silver",
  "gold",
  "platinum",
  "emerald",
  "diamond",
  "master",
  "grandmaster",
  "challenger",
]);

/** "Gold II" -> "gold", "Master" -> "master". */
export function rankTier(rank: string): string {
  return rank.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
}

/** Path to the tier emblem; ranks without one fall back to the unranked emblem. */
export function rankEmblem(rank: string): string {
  const tier = rankTier(rank);
  return `/ranks/${EMBLEM_TIERS.has(tier) ? tier : "unranked"}.png`;
}
