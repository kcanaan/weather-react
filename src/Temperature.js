import React from "react";

export default function Temperature() {
  return (
    <div className="Temperature">
      <span className="currentTemperature">88</span>
      <span class="units">°F|°C</span>
      <div class="high-low">
        <span id="temp-high">H:90°</span> <span id="temp-low"> L:70°</span>
      </div>
      <div class="humidity-and-wind">
        {" "}
        <span id="humidity">Humidity: 70%</span>{" "}
        <span id="wind"> Windspeed: 18</span>
      </div>
    </div>
  );
}
