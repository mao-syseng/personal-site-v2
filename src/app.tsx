import { useState } from "preact/hooks";
import { Game as MagicPico } from "./magicPico/game";
import Doodles from "./Doodles";

export function App() {
  const [v, setV] = useState(0);

  return (
    <>
      <header>
        <hgroup>
          <h1>marc obel</h1>
          <p>my digital doodles</p>
        </hgroup>
      </header>
      <main>
        {v === 0 && <Doodles setV={setV} />}
        {v === 1 && <MagicPico />}
      </main>
      <footer>
        <small>
          built with <a href="https://picocss.com">pico</a> • get in touch
          <a href="mailto:m@moy.dk">m@moy.dk</a>
        </small>
      </footer>
    </>
  );
}
