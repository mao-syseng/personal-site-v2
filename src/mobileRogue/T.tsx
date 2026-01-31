import { gs } from "./helpers";
import type { S } from "./reducer";
import TCell from "./TCell";

export default function T({ s }: { s: S }) {
  return (
      <table style={{ tableLayout: "fixed" }}>
        <tbody>
          {gs.map((x) => (
            <tr key={x}>
              {gs.map((y) => (
                <TCell
                  key={`${x}-${y}`}
                  isPlayer={s.pos[0] === y && s.pos[1] === x}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
}
