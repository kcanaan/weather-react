import React from "react";

export default function Condition(props) {
  return (
    <div className="Condition">
      <h3>partly cloudy</h3>
      <img
        className="current-icon"
        src="https://openweathermap.org/img/wn/10d@2x.png"
        id="icon"
        alt="weather icon"
      />
    </div>
  );
}
