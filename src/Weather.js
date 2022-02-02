import React from "react";
import "./Weather.css";
import "./WeatherInfo";
import WeatherInfo from "./WeatherInfo";
import Search from "./Search";
import "./Search.css";
import Location from "./Location";
import "./Location.css";
import Condition from "./Condition";
import "./Condition.css";
//import Temperature from "./Temperature";
import "./Temperature.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="WeatherBoarder">
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
