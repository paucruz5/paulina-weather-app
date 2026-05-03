import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">{Math.round(props.celsius)}</div>
        <div className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            ℉
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <div className="temperature">{Math.round(fahrenheit)}</div>
        <div className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          |℉
        </div>
      </div>
    );
  }
}
