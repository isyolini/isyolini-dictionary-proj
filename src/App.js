import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <p>Dictionary</p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          <a
            href="https://github.com/isyolini/isyolini-dictionary-proj"
            target="_blank"
            rel="noreferrer"
            alt="GitHub Isyolini Dictionary Project"
          >
            Coded{" "}
          </a>
          by{" "}
          <a
            href="https://isyolini-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
            alt="IsyOlini Design Creative Portfolio"
          >
            IsyOlini
          </a>
        </footer>
      </div>
    </div>
  );
}
