import React from "react";

export default function Wind() {
  let windToday = {
    wind: "15",
  };
  return <div className="wind">Wind-Speed: {windToday.wind} km/h</div>;
}
