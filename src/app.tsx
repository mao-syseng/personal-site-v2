import { useEffect, useReducer, useState } from "preact/hooks";
import T from "./T";
import { getKeyAction } from "./helpers";
import { def, reducer, type A } from "./reducer";

export function App() {
  const [s, d] = useReducer(reducer, def);
  const [tickReset, setTickReset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => d({ type: "tick" }), 400);
    return () => clearInterval(id);
  }, [tickReset]);

  const withTick = (action: A) => {
    d(action);
    d({ type: "tick" });
    setTickReset((n) => n + 1);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const action = getKeyAction(e.key);
      if (action) {
        e.preventDefault();
        withTick({ type: action });
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <>
      <T s={s} />
    </>
  );
}
