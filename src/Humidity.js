import React from "react";

export default function Humidity() {
  let humidityToday = {
    humidity: "50",
  };
  return <div className="humidity">Humidity: {humidityToday.humidity}%</div>;
}
