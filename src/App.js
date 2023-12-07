import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Samantha Muckridge open-sourced on{" "}
            <a
              href="https://github.com/sjvolesky/dictionary-project.git"
              target="_blank"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
