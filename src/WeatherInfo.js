import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="cityInfo">
        <div>
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />,{" "}
              <span>{props.data.description}</span>
            </li>
            <li>
              Humidity:{" "}
              <span className="accentColor">{props.data.humidity}%</span> Wind:{" "}
              <span className="accentColor">{props.data.wind} mi/h</span>
            </li>
          </ul>
        </div>
        <div className="cityTemperature">
          <WeatherIcon code={props.data.icon} alt="☀️" />
          <span className="temperature"> {props.data.temperature}</span>{" "}
          <span className="tempUnit">
            <a className="fahrenheit">℉</a> |<a className="celcius">℃</a>
          </span>
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
    </div>
  );
}
