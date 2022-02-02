import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
        <span className="currentTemperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="units">°F|°C</span>
        <div className="high-low">
          <span className="temp-high">H:{props.weatherData.high}°</span>{" "}
          <span className="temp-low"> L:{props.weatherData.low}°</span>
        </div>
        <div className="humidity-and-wind">
          {" "}
          <span className="humidity">
            Humidity: {props.weatherData.humidity}%
          </span>{" "}
          <span className="wind">
            {" "}
            Windspeed: {props.weatherData.windspeed}
          </span>
        </div>
      </div>
  );
}
