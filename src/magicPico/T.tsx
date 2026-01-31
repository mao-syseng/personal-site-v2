import { cols, rows } from "./helpers";
import type { S } from "./reducer";
import TCell from "./TCell";

export default function T({ s }: { s: S }) {
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <table style={{ tableLayout: "fixed" }}>
        <tbody>
          {rows.map((x) => (
            <tr key={x}>
              {cols.map((y) => (
                <TCell
                  key={`${x}-${y}`}
                  isPlayer={s.pos[0] === y && s.pos[1] === x}
                  isTrail={s.trail.some(([tx, ty]) => tx === y && ty === x)}
                  isOppie={s.oppies.some(([ox, oy]) => ox === y && oy === x)}
                  isDropZone={s.dropZone.some(
                    ([dx, dy]) => dx === y && dy === x,
                  )}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
