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

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const a = getKeyAction(e.key);
      if (a) {
        e.preventDefault();
        d({ type: a });
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <>
      <section>
        <T s={s} />
        <input
          type="text"
          onInput={(e) => {
            const key = (e.target as HTMLInputElement).value.slice(-1);
            const action = getKeyAction(key);
            if (action) {
              d({ type: action });
            }
            (e.target as HTMLInputElement).value = "";
          }}
        />
      </section>
    </>
  );
}
