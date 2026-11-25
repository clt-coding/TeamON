import type { Position } from "../types";

export const POSITIONS: Position[] = ["Top", "Jungle", "Mid", "Bot", "Support"];

export const positionMarks: Record<Position, string> = {
  Top: "T",
  Jungle: "J",
  Mid: "M",
  Bot: "B",
  Support: "S",
};
