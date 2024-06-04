import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");

  let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherData.icon}.png`;

  function showTheForecast(response) {
    let forecast = response.data.daily;
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
      wind: response.data.wind.speed,
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

  if (weatherData.ready) {
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
        <div className="cityInfo">
          <div>
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />,{" "}
                <span>{weatherData.description}</span>
              </li>
              <li>
                Humidity:{" "}
                <span className="accentColor">{weatherData.humidity}%</span>{" "}
                Wind:{" "}
                <span className="accentColor">{weatherData.wind} mi/h</span>
              </li>
            </ul>
          </div>
          <div className="cityTemperature">
            <img className="icon" src={iconUrl} alt="☀️" />
            <span className="temperature">{weatherData.temperature}</span>{" "}
            <span className="tempUnit">℉</span>
          </div>
        </div>
        <div className="Forecast">
          <div className="forecastContainer">
            <ul className="forecast">
              <li>
                <div className="forecastDay">Wed</div>
                <div className="forecastIcon">🌧️</div>
                <div className="forecastTemperature">
                  <span className="maxTemp accentColor">26°</span>
                  <span className="minTemp accentColor">14°</span>
                </div>
              </li>
              <li>
                {" "}
                <div className="forecastDay">Thurs</div>
                <div className="forecastIcon">⛈️</div>
                <div className="forecastTemperature">
                  <span className="maxTemp accentColor">26°</span>
                  <span className="minTemp accentColor">14°</span>
                </div>
              </li>
              <li>
                {" "}
                <div className="forecastDay">Fri</div>
                <div className="forecastIcon">🌦️</div>
                <div className="forecastTemperature">
                  <span className="maxTemp accentColor">26°</span>
                  <span className="minTemp accentColor">14°</span>
                </div>
              </li>
              <li>
                {" "}
                <div className="forecastDay">Sat</div>
                <div className="forecastIcon">⛅️</div>
                <div className="forecastTemperature">
                  <span className="maxTemp accentColor">26°</span>
                  <span className="minTemp accentColor">14°</span>
                </div>
              </li>
              <li>
                {" "}
                <div className="forecastDay">Sun</div>
                <div className="forecastIcon">🌤️</div>
                <div className="forecastTemperature">
                  <span className="maxTemp accentColor">26°</span>
                  <span className="minTemp accentColor">14°</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <footer>
          <p>
            This project was coded by{" "}
            <a href="https://www.linkedin.com/in/djcmichaels/">
              Jenny D. Michaels
            </a>{" "}
            and is open-sourced on{" "}
            <a href="https://github.com/cjsekdms37/weather-app-react">GitHub</a>{" "}
            and hosten on{" "}
            <a href="https://weather-app-react-djcm.netlify.app/">Netlify</a>.
          </p>
        </footer>
      </div>
    );
  } else {
    const apiKey = `b6d6abf04ta9967430a746of97dac003`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTheCity);
    return "Loading...";
  }
}
