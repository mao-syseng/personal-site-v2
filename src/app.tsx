import { useEffect, useReducer } from "preact/hooks";
import T from "./T";
import { getKeyAction } from "./helpers";
import { def, reducer } from "./reducer";

export function App() {
  const [s, d] = useReducer(reducer, def);

  useEffect(() => {
    const id = setInterval(() => d({ type: "tick" }), 250);
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
    <header class="container">
      <hgroup>
        <h1>magic pico</h1>
        <p>demake of magic garden</p>
      </hgroup>
    </header>
    <section>

      <T s={s} />
      <div role="group">
        <button onClick={() => d({ type: "turn_left" })}>←</button>
        <button className="secondary" onClick={() => d({ type: "spin" })}>
          ↻
        </button>
        <button onClick={() => d({ type: "turn_right" })}>→</button>
      </div>
    </section>
    </>
  );
}
