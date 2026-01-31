import { maxG } from "./helpers";

export type Pos = [number, number];
export type Dir = "up" | "down" | "left" | "right";

export interface S {
  pos: Pos;
  oppies: Pos[];
}

export type A = { type: "move"; dir: Dir };

export const def: S = {
  pos: [0, 0],
  oppies: [[5, 5]],
};

export function reducer(s: S, a: A): S {
  switch (a.type) {
    case "move": {
      let [x, y] = s.pos;
      
      switch (a.dir) {
        case "up":
          y = y - 1;
          if (y < 0) y = maxG;
          break;
        case "down":
          y = y + 1;
          if (y > maxG) y = 0;
          break;
        case "left":
          x = x - 1;
          if (x < 0) x = maxG;
          break;
        case "right":
          x = x + 1;
          if (x > maxG) x = 0;
          break;
      }

      // TODO: Add collision detection with monsters here
      // const monster = s.oppies.find(([mx, my]) => mx === x && my === y);
      // if (monster) { /* handle combat */ }

      return { ...s, pos: [x, y] };
    }
    default:
      return s;
  }
}
