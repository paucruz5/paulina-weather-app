import React from "react";
import "./App.css";
import Weather from "./Weather";
import Github from "./Github";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          <Github />
        </footer>
      </div>
    </div>
  );
}
