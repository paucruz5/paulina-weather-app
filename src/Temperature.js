import React from "react";

export default function Temperature() {
  return (
    <div>
      <p className="fahrenheit">
        <a href="/" className="active">
          °C
        </a>
        {"/"}
        <a href="/">°F</a>
      </p>
    </div>
  );
}
