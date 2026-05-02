import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "few-clouds-day": "partlycloudy",
    "scattered-clouds-day": "partlycloudy",
    "broken-clouds-day": "cloudy",
    "shower-rain-day": "rainy",
    "rain-day": "pouring",
    "thunderstorm-day": "lightning-rainy",
    "snow-day": "snowy-rainy",
    "mist-day": "windy-variant",
    "clear-sky-night": "clear-night",
    "few-clouds-night": "cloudy",
    "scattered-clouds-night": "partlycloudy",
    "broken-clouds-night": "cloudy",
    "shower-rain-night": "rainy",
    "rain-night": "pouring",
    "thunderstorm-night": "lightning-rainy",
    "snow-night": "snowy-rainy",
    "mist-night": "windy-variant",
  };

  return <WeatherSvg state={codeMapping[props.code]} />;
}
