import React from "react";

export default function MyLocation() {
  let myLocation = {
    location: "Tizimin",
    weather: "25",
  };
  return (
    <div>
      <h2>
        In {myLocation.location} is {myLocation.weather}℃
      </h2>
    </div>
  );
}
