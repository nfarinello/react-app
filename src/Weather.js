import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }
if (ready) {
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
      <li>Mostly Cloudy</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="d-flex">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
            className="float-left"
          />
         <div className="float-left">
          <span className="temperature">{Math.round(temperature)}</span>
          <span className="unit">°C</span>
        </div>
    </div>
  </div>
    <div className="col-6">
       <ul>
          <li>Precipitation: 75%</li>
          <li>Humidity: 78%</li>
          <li>Wind: 6 km/h</li>
        </ul>
      </div>
    </div>
  </div>
  );
} else {
  const apiKey = "96771e971243152d6b8948878c26adde";
  let city ="London";
  let apiUrl =
  `http://api.openweathermap.org/data/2.5/weather?q=${city}appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

}
