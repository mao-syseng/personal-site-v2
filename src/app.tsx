import { useState } from "preact/hooks";
import { Game as MagicPico } from "./magicPico/game";
import Doodles from "./Doodles";
import { MobileRogue } from "./mobileRogue/game";

export function App() {
  const [v, setV] = useState(0);
  const showHeaderFooter = ![1, 2].includes(v);

  return (
    <>
      {showHeaderFooter && (
        <header>
          <hgroup>
            <h1>marc obel</h1>
            <p>my digital doodles</p>
          </hgroup>
        </header>
      )}
      <main>
        {v === 0 && <Doodles setV={setV} />}
        {v === 1 && <MagicPico />}
        {v === 2 && <MobileRogue />}
      </main>
      {showHeaderFooter && (
        <footer>
          <small>
            built with <a href="https://picocss.com">pico</a> • get in touch
            <a href="mailto:m@moy.dk">m@moy.dk</a>
          </small>
        </footer>
      )}
    </>
  );
}
