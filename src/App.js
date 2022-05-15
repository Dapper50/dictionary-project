import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Boma Dapper and is{" "}
            <a
              href="https://github.com/Dapper50/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              open-sourced on GitHub{" "}
            </a>
            and {""}
            <a
              href="https://statuesque-belekoy-a5f7a6.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
