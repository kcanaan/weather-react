import React from "react";
import "./Weather.css";
import "./WeatherInfo";
import WeatherInfo from "./WeatherInfo";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="WeatherBoarder">
        <Search />
        <WeatherInfo />
      </div>
      <small>
        {" "}
        <a href="https://github.com/kcanaan/weather-react"> Coded</a> by Kiara
        Canaan{" "}
      </small>
    </div>
  );
}
