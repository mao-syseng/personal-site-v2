import { useState } from "preact/hooks";
import { Game } from "./magicPico/game";

export function App() {
  const [v, setV] = useState(0);
  if (v === 1) return <Game />;

  return (
    <>
      <div className="grid">
        <article>
          <header>magic pico - 2026</header>a magic garden demake, using{" "}
          <a href="https://picocss.com">pico</a> styling and a single <a href="https://react.dev/reference/react/useReducer">reducer</a> for game logic.
          <footer>
            <a href="#" onClick={() => setV(1)}>
              visit
            </a>
          </footer>
        </article>

        <article>
          <header>rule 30 in k - 2026</header>rule 30 elementary cellular
          automata in 4 lines of{" "}
          <a href="https://ktye.github.io/jtye/index.html">jtye/k</a>
          <footer>
            <a href="https://mao-syseng.github.io/k-rule-30-elementary-cellular-automata/">
              visit
            </a>
          </footer>
        </article>
        <article>
          <header>langtons ant in 4 lines of k - 2026</header>
          langtons ant in 4 lines of{" "}
          <a href="https://ktye.github.io/jtye/index.html">jtye/k</a>
          <footer>
            <a href="https://mao-syseng.github.io/k-langtons-ant/">visit</a>
          </footer>
        </article>
      </div>
      <div className="grid">
        <article>
          <header>
            ternary totalistic cellular automata - 2025
          </header>
          a statically generated cellular automata rendered with only HTML. Made
          with <a href="https://www.11ty.dev/">eleventy</a>
          <footer>
            <a href="https://ternary-totalistic-ca-hub.netlify.app/">visit</a>
          </footer>
        </article>
        <article>
          <header>k playground - 2025</header>a playground for experimenting and
          learning jtye/k. Includes examples and ref card.
          <footer>
            <a href="https://mao-syseng.github.io/k-playground/">visit</a>
          </footer>
        </article>
        <article>
          <header>printable maze generator - 2025</header>generate random mazes/labryinths for printing on paper, can customize size.
          <footer>
            <a href="https://mao-syseng.github.io/maze/">visit</a>
          </footer>
        </article>
      </div>
    </>
  );
}
