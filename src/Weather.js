import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready : false });
  function handleResponse(response) {
    setWeatherData ({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png"
    });
  }
if (weatherData.ready) {
  return (
  <div className="Weather">
    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a City..."
            className="form-control"
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <input type="submit"
          value="Search"
          className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
    <h1>London</h1>
    <ul>
      <li>Friday 15:00</li>
      <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="d-flex">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="float-left"
          />
         <div className="float-left">
          <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="unit">°C</span>
        </div>
    </div>
  </div>
    <div className="col-6">
       <ul>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}km/h</li>
        </ul>
      </div>
    </div>
  </div>
  );
} else {
  const apiKey = "96771e971243152d6b8948878c26adde";
  let city ="London";
  let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

}
