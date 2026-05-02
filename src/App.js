import React from "react";
import "./App.css";
import Weather from "./Weather";
import CurrentDate from "./CurrentDate";
import LocationBtn from "./LocationBtn";
import Github from "./Github";
import WeatherInfo from "./WeatherInfo";
import MyLocation from "./MyLocation";

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
