import React from "react";
import "./Weather.css";
import "./WeatherInfo";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="WeatherBoarder">
        <WeatherInfo defaultCity="Atlanta" />
      </div>
      <small>
        {" "}
        <a href="https://github.com/kcanaan/weather-react"> Coded</a> by Kiara
        Canaan{" "}
      </small>
    </div>
  );
}
