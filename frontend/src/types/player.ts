export type Position = "Top" | "Jungle" | "Mid" | "Bot" | "Support";

export type Language = "PL" | "EN";

export type Game = {
  name: string;
  rank: string;
  hoursPlayed: number;
};

export type Player = {
  id: number;
  username: string;
  age: number;
  country: string;
  flag: string;
  languages: string[];
  position: Position;
  rank: string;
  /** Short listing headline, e.g. "Szukam osoby do grania wieczorkami :)" */
  title: string;
  /** Longer listing description shown in the listing detail modal. */
  description: string;
  image: string;
  online: boolean;
  yearsPlaying: number;
  voiceChat: string;
  favouriteChampions: string[];
  bio: string;
  interests: string[];
  games: Game[];
};
