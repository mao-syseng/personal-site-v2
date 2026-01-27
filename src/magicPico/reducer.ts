import { dropZone1, mx, my, randPos, step } from "./helpers";

export type Pos = [number, number];
export type Dir = 0 | 1 | 2 | 3;

export interface S {
  pos: Pos;
  dir: Dir;
  tickCount: number;
  trail: Pos[];
  oppies: Pos[];
  oppiesSaved: number;
  maxOppies: number;
  dropZone: Pos[];
}

export type A =
  | { type: "set_p"; p: number }
  | { type: "set_dir"; dir: Dir }
  | { type: "spin" }
  | { type: "turn_left" }
  | { type: "turn_right" }
  | { type: "tick" };

export const def: S = {
  pos: [0, 0],
  dir: 1,
  tickCount: 0,
  trail: [],
  oppies: [[5, 5]],
  oppiesSaved: 0,
  maxOppies: 5,
  dropZone: dropZone1
};

export function reducer(s: S, a: A): S {
  switch (a.type) {
    case "set_p":
      return { ...s, tickCount: a.p };
    case "set_dir":
      return { ...s, dir: a.dir };
    case "turn_left":
      return {
        ...s,
        dir: ((s.dir + 3) % 4) as Dir,
      };
    case "turn_right":
      return {
        ...s,
        dir: ((s.dir + 1) % 4) as Dir,
      };
    case "tick": {
      let [nx, ny] = step(s.pos, s.dir);
      if (nx < 0) nx = mx;
      if (nx > mx) nx = 0;
      if (ny < 0) ny = my;
      if (ny > my) ny = 0;
      const oppieCollided = s.oppies.find(([ox, oy]) => ox === nx && oy === ny);
      const trailLength = oppieCollided ? s.trail.length + 1 : s.trail.length;
      let newOppies = s.oppies.filter(([ox, oy]) => !(ox === nx && oy === ny));
      while (newOppies.length < s.maxOppies) {
        newOppies.push(randPos());
      }
      return {
        ...s,
        pos: [nx, ny],
        tickCount: s.tickCount + 1,
        trail: [...s.trail, s.pos].slice(-trailLength),
        oppies: newOppies,
        oppiesSaved: oppieCollided ? s.oppiesSaved + 1 : s.oppiesSaved,
      };
    }
    default:
      return s;
  }
}
