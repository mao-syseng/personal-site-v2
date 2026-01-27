import type { Dir, Pos } from "./reducer";

export const cols: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const rows: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const mx = cols.length - 1; // Max x index
export const my = rows.length - 1; // Max y index

export const dropZone1: Pos[] = [
  [9, 0],
  [9, 1],
  [9, 2],
  [9, 3],
  [9, 4],
  [9, 5],
  [9, 6],
  [9, 7],
  [9, 8],
  [9, 9],
];
export const dropZone2: Pos[] = [
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [1, 9],
];

export const step = (p: Pos, d: Dir): Pos =>
  [+p[0] + [0, 1, 0, -1][d], +p[1] + [-1, 0, 1, 0][d]] as Pos;

export const m: Record<string, number> = {
  ArrowUp: 0,
  ArrowRight: 1,
  ArrowDown: 2,
  ArrowLeft: 3,
};

export const getKeyAction = (key: string): "turn_right" | "turn_left" | null => {
  if (key === "ArrowRight") return "turn_right";
  if (key === "ArrowLeft") return "turn_left";
  return null;
}
export const randPos = (): Pos => [
  Math.floor(Math.random() * (mx + 1)),
  Math.floor(Math.random() * (my + 1)),
];
