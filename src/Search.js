import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [showCity, setShowCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`;

  function showTheForecast(response) {
    let forecast = response.data.daily;
    console.log(forecast);
  }
  function handleForecast(longitude, latitude) {
    let apiKey2 = `b6d6abf04ta9967430a746of97dac003`;
    let apiUrl2 = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey2}&units=imperial`;
    axios.get(apiUrl2).then(showTheForecast);
  }

  function showTheCity(response) {
    let longitude = response.data.coordinates.longitude;
    let latitude = response.data.coordinates.latitude;
    setShowCity(response.data.city);
    setTemperature(Math.round(response.data.temperature.current));
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.condition.description);
    setIcon(response.data.condition.icon);
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

  return (
    <div>
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="searchInput"
            onChange={updateCity}
            required
          />
          <input type="submit" value="Search" className="submitButton" />
        </form>
      </div>
      <hr />
      <div className="cityInfo">
        <div>
          <h1>{showCity}</h1>
          <ul>
            <li>
              Wednesday 16:18, <span>{description}</span>
            </li>
            <li>
              Humidity: <span className="accentColor">{humidity}%</span> Wind:{" "}
              <span className="accentColor">{wind} mi/h</span>
            </li>
          </ul>
        </div>
        <div className="cityTemperature">
          <img className="icon" src={iconUrl} alt="☀️" />
          <span className="temperature">{temperature}</span>{" "}
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
}
