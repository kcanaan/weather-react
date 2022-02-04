import React, { useState } from "react";

export default function UnitCoverstion(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }
  function celsiusHigh() {
    return ((props.max - 32) * 5) / 9;
  }
  function celsiusLow() {
    return ((props.min - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="conversion">
        <span className="currentTemperature">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="units">
          °F|
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
        <div className="high-low">
          <span className="temp-high">H:{props.max}°</span>{" "}
          <span className="temp-low"> L:{props.min}°</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="conversion">
        <span className="currentTemperature">{Math.round(celsius())}</span>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
          |°C
        </span>
        <div className="high-low">
          <span className="temp-high">H:{Math.round(celsiusHigh())}°</span>{" "}
          <span className="temp-low"> L:{Math.round(celsiusLow())}°</span>
        </div>
      </div>
    );
  }
}
