import { useEffect, useReducer } from "preact/hooks";
import T from "./T";
import { getKeyAction } from "./helpers";
import { def, reducer } from "./reducer";

export function Game() {
  const [s, d] = useReducer(reducer, def);

  useEffect(() => {
    const id = setInterval(() => d({ type: "tick" }), 333);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section>
        <T s={s} />
        <input
          type="text"
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            const key = input.value.slice(-1);
            const action = getKeyAction(key);
            if (action) {
              d({ type: action });
              input.value = key;
            }
          }}
        />
      </section>
    </>
  );
}
