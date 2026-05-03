import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          This project was coded by
          <a
            href="https://paucruz-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Paulina Cruz{" "}
          </a>
        </header>
        <Weather defaultCity="Tizimin" />
        <footer>
          It's open-sourced on{" "}
          <a
            href="https://github.com/paucruz5/Weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://paulina-weather-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
