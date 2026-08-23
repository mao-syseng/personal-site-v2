import Doodles from "./Doodles";

export function App() {
  const showHeaderFooter = true;

  return (
    <>
      {showHeaderFooter && (
        <header>
          <hgroup>
            <h1>marc obel</h1>
            <p>my digital doodles and other weird projects</p>
          </hgroup>
        </header>
      )}
      <main>
        <Doodles />
      </main>
      {showHeaderFooter && (
        <footer>
          <small>
            built with <a href="https://picocss.com">pico</a> • get in touch{" "}
            <a href="mailto:m@moy.dk">m@moy.dk</a> • more doodles on <a href="https://iå.dk">iå.dk</a> • <a href="https://www.obelphotography.dk/">sister site</a>
          </small>
        </footer>
      )}
    </>
  );
}
