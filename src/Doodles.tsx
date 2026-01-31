export default function Doodles({ setV }: { setV: (v: number) => void }) {
  return (
    <>
      <div className="grid">
        <article>
          <header data-tooltip="2026">roguelike</header>roguelike,
          using <a href="https://picocss.com">pico</a> styling and a single{" "}
          <a href="https://react.dev/reference/react/useReducer">reducer</a> for
          game logic.
          <footer>
            <a href="#" onClick={() => setV(2)}>
              visit
            </a>
          </footer>
        </article>
        <article>
          <header data-tooltip="2026">magic pico</header>a magic garden demake,
          using <a href="https://picocss.com">pico</a> styling and a single{" "}
          <a href="https://react.dev/reference/react/useReducer">reducer</a> for
          game logic.
          <footer>
            <a href="#" onClick={() => setV(1)}>
              visit
            </a>
          </footer>
        </article>

        <article>
          <header data-tooltip="2026">rule 30 in k</header>rule 30 elementary
          cellular automata in 4 lines of{" "}
          <a href="https://ktye.github.io/jtye/index.html">jtye/k</a>
          <footer>
            <a href="https://mao-syseng.github.io/k-rule-30-elementary-cellular-automata/">
              visit
            </a>
          </footer>
        </article>
        <article>
          <header data-tooltip="2026">langtons ant in 4 lines of k</header>
          langtons ant in 4 lines of{" "}
          <a href="https://ktye.github.io/jtye/index.html">jtye/k</a>
          <footer>
            <a href="https://mao-syseng.github.io/k-langtons-ant/">visit</a>
          </footer>
        </article>
      </div>
      <div className="grid">
        <article>
          <header data-tooltip="2025">
            ternary totalistic cellular automata
          </header>
          a statically generated cellular automata rendered with only HTML. Made
          with <a href="https://www.11ty.dev/">eleventy</a>
          <footer>
            <a href="https://ternary-totalistic-ca-hub.netlify.app/">visit</a>
          </footer>
        </article>
        <article>
          <header data-tooltip="2025">k playground</header>a playground for
          experimenting and learning jtye/k. Includes examples and ref card.
          <footer>
            <a href="https://mao-syseng.github.io/k-playground/">visit</a>
          </footer>
        </article>
        <article>
          <header data-tooltip="2025">printable maze generator</header>
          generate random mazes/labryinths for printing on paper, can customize
          size.
          <footer>
            <a href="https://mao-syseng.github.io/maze/">visit</a>
          </footer>
        </article>
      </div>
    </>
  );
}
