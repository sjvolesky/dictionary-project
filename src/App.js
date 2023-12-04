import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="ocean" />
        </main>
        <footer className="App-footer">
          <small>Coded by Samantha Muckridge open-sourced on GitHub</small>
        </footer>
      </div>
    </div>
  );
}
