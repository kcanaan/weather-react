import React, { useState } from "react";
import CuteDate from "./CuteDate";
import "./Temperature.css";
import "./Search.css";
import "./UnitConversion";
import axios from "axios";
import UnitCoverstion from "./UnitConversion";

export default function WeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      condition: response.data.weather[0].description,
      wind: response.data.wind.speed,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    find();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function find() {
    const apiKey = "ea8c6c3f85e9ad9bfad5c89c8b3eb5e0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter location"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="Location">
          <h1>{weatherData.city}</h1>
          <h2>
            <CuteDate date={weatherData.date} />
          </h2>
        </div>
        <div className="Condition">
          <div className="text-capitalize">
            <h3>{weatherData.condition}</h3>
            <img
              className="current-icon"
              src={weatherData.icon}
              id="icon"
              alt={weatherData.condition}
            />
          </div>
        </div>
        <div className="Temperature">
          <UnitCoverstion
            fahrenheit={weatherData.temperature}
            max={weatherData.high}
            min={weatherData.low}
          />
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
    find();
    return <h1>"Loading..."</h1>;
  }
}
