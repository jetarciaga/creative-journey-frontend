import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <article>
          <header className="parallax">
            <h1>Experience your Best Travel with ease.</h1>
            <p>Sample text</p>
          </header>

          <section>
            <h2>Why book with Creative Journeys?</h2>
            <p>Leading Travel Experience</p>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
