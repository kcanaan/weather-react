import React, { useState } from "react";
import Search from "./Search";
import CuteDate from "./CuteDate";
import "./Search.css";
import "./Location.css";
import "./Condition.css";
import "./Temperature.css";
import axios from "axios";

export default function WeatherInfo() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: "https://openweathermap.org/img/wn/10d@2x.png",
      condition: response.data.weather[0].description,
      wind: response.data.wind.speed,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
    });
  }

  if (ready) {
    return (
      <div>
        <Search />
        <div className="Location">
          <h1>Atlanta, Georgia</h1>
          <h2>
            <CuteDate date={weatherData.date} />
          </h2>
        </div>
        <div className="Condition">
          <h3>{weatherData.condition}</h3>
          <img
            className="current-icon"
            src={weatherData.icon}
            id="icon"
            alt={weatherData.condition}
          />
        </div>
        <div className="Temperature">
          <span className="currentTemperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="units">°F|°C</span>
          <div className="high-low">
            <span className="temp-high">H:{Math.round(weatherData.high)}°</span>{" "}
            <span className="temp-low"> L:{Math.round(weatherData.low)}°</span>
          </div>
          <div className="humidity-and-wind">
            {" "}
            <span className="humidity">
              Humidity: {weatherData.humidity}%
            </span>{" "}
            <span className="wind"> Windspeed: {weatherData.wind}</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ea8c6c3f85e9ad9bfad5c89c8b3eb5e0";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return <h1>"Loading..."</h1>;
  }
}
