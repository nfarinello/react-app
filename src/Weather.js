import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData ({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png"
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);

  }
  function search() {
    const apiKey = "3980a7c8f2a782241a093131b099f993";
    let apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
if (weatherData.ready) {
  return (
    <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
      <WeatherInfo data={weatherData}/>
    </div>
  );

} else {
search();
return "Loading...";
}

}
