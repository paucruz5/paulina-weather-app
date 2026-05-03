import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p className="weather-description">
        Find a way to enjoy the {props.data.description} weather!
      </p>
      <div className="row">
        <div className="col-4">
          <h1>
            {props.data.city},
            <br /> {props.data.country}
          </h1>
        </div>
        <div className="col-4">
          <div className="d-flex align-items-center">
            <div className="icon">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
      <CurrentDate date={props.data.date} />
    </div>
  );
}
