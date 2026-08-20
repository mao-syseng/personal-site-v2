export default function Doodles() {
  return (
    <>
      <div className="grid">
        <article>
          <header data-tooltip="2026">spelling zine</header> randomly generated
          printable zine for kids learning to read (danish only).
          <footer>
            <a href="https://iå.dk/5">visit</a> -{" "}
            <a href="https://moy.dk/zine-fold.jpg">?</a>
          </footer>
        </article>

        <article>
          <header data-tooltip="2026">math zine</header> randomly generated
          printable zine for kids learning math.
          <footer>
            <a href="https://iå.dk/4">visit</a> -{" "}
            <a href="https://moy.dk/zine-fold.jpg">?</a>
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
