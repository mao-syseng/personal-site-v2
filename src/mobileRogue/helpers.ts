import type { Dir, Pos } from "./reducer";

export const gs: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const maxG = gs.length - 1; // Max grid index

export const getKeyAction = (key: string): Dir | null => {
  const k = key.toLowerCase();
  if ("qweasdzxc".includes(k)) return "left";
  if ("pæøålmokijn".includes(k)) return "right";
  if ("tyghvb".includes(k)) return "up";
  if ("rfcnuj".includes(k)) return "down";
  return null;
};

export const randPos = (): Pos => [
  Math.floor(Math.random() * (maxG + 1)),
  Math.floor(Math.random() * (maxG + 1)),
];
