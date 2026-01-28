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
        <div role="group">
          <button className='outline' onClick={() => d({ type: "turn_left" })}>&lt;</button>
          <button className="outline contrast" onClick={() => d({ type: "spin" })}>
            #
          </button>
          <button className='outline' onClick={() => d({ type: "turn_right" })}>&gt;</button>
        </div>
      </section>
    </>
  );
}
