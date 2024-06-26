import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");
  const [forecastData, setForecastData] = useState({ ready: false });

  function showTheForecast(response) {
    setForecastData({ ...response.data.daily, ready: true });
  }

  function handleForecast(longitude, latitude) {
    let apiKey2 = `b6d6abf04ta9967430a746of97dac003`;
    let apiUrl2 = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey2}&units=imperial`;
    axios.get(apiUrl2).then(showTheForecast);
  }

  function showTheCity(response) {
    let longitude = response.data.coordinates.longitude;
    let latitude = response.data.coordinates.latitude;
    setWeatherData({
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
    });
    handleForecast(longitude, latitude);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `b6d6abf04ta9967430a746of97dac003`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTheCity);
  }

  function updateCity(event) {
    return setCity(event.target.value);
  }

  function search() {
    const apiKey = `b6d6abf04ta9967430a746of97dac003`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTheCity);
  }

  if (weatherData.ready && forecastData.ready) {
    return (
      <div>
        <div className="Search">
          <form className="searchForm" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              className="searchInput"
              onChange={updateCity}
              autoFocus="on"
              required
            />
            <input type="submit" value="Search" className="submitButton" />
          </form>
        </div>
        <hr />
        <WeatherInfo data={weatherData} forecastDatas={forecastData} />
        <hr />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/djcmichaels/"
              target="_blank"
              rel="noreferrer"
            >
              Jenny D. Michaels
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/cjsekdms37/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosten on{" "}
            <a
              href="https://weather-app-react-djcm.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </p>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
