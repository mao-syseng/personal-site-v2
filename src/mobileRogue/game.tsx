import { useReducer } from "preact/hooks";
import T from "./T";
import { getKeyAction } from "./helpers";
import { def, reducer } from "./reducer";

export function MobileRogue() {
  const [s, d] = useReducer(reducer, def);
  return (
    <>
      <section>
        <T s={s} />
        <input
          type="text"
          name="controls"
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            const key = input.value.slice(-1);
            input.value = key;
            const dir = getKeyAction(key);
            if (dir) {
              d({ type: "move", dir });
            }
          }}
        />
      </section>
    </>
  );
}
