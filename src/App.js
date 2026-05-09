import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          Coded by
          <a
            href="https://paucruz.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Paulina Cruz{" "}
          </a>
        </header>
        <Weather defaultCity="Tizimin" />
        <footer>
          Open-sourced on{" "}
          <a
            href="https://github.com/paucruz5/paulina-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          ; hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
