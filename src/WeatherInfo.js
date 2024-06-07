import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  const forecastZeroMax = Math.round(
    props.forecastDatas[0].temperature.maximum
  );
  const forecastZeroMin = Math.round(
    props.forecastDatas[0].temperature.minimum
  );
  const forecastFirstMax = Math.round(
    props.forecastDatas[1].temperature.maximum
  );
  const forecastFirstMin = Math.round(
    props.forecastDatas[1].temperature.minimum
  );
  const forecastTwoMax = Math.round(props.forecastDatas[2].temperature.maximum);
  const forecastTwoMin = Math.round(props.forecastDatas[2].temperature.minimum);
  const forecastThreeMax = Math.round(
    props.forecastDatas[3].temperature.maximum
  );
  const forecastThreeMin = Math.round(
    props.forecastDatas[3].temperature.minimum
  );
  const forecastFourMax = Math.round(
    props.forecastDatas[4].temperature.maximum
  );
  const forecastFourMin = Math.round(
    props.forecastDatas[4].temperature.minimum
  );

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
          <WeatherTemperature fahrenheit={props.data.temperature} />
        </div>
      </div>
      <div className="Forecast">
        <div className="forecastContainer">
          <ul className="forecast">
            <li>
              <div className="forecastDay">Wed</div>
              <div className="forecastIcon">🌧️</div>
              <div className="forecastTemperature">
                <span className="maxTemp accentColor">{forecastZeroMax}°</span>
                <span className="minTemp accentColor">{forecastZeroMin}°</span>
              </div>
            </li>
            <li>
              {" "}
              <div className="forecastDay">Thurs</div>
              <div className="forecastIcon">⛈️</div>
              <div className="forecastTemperature">
                <span className="maxTemp accentColor">{forecastFirstMax}°</span>
                <span className="minTemp accentColor">{forecastFirstMin}°</span>
              </div>
            </li>
            <li>
              {" "}
              <div className="forecastDay">Fri</div>
              <div className="forecastIcon">🌦️</div>
              <div className="forecastTemperature">
                <span className="maxTemp accentColor">{forecastTwoMax}°</span>
                <span className="minTemp accentColor">{forecastTwoMin}°</span>
              </div>
            </li>
            <li>
              {" "}
              <div className="forecastDay">Sat</div>
              <div className="forecastIcon">⛅️</div>
              <div className="forecastTemperature">
                <span className="maxTemp accentColor">{forecastThreeMax}°</span>
                <span className="minTemp accentColor">{forecastThreeMin}°</span>
              </div>
            </li>
            <li>
              {" "}
              <div className="forecastDay">Sun</div>
              <div className="forecastIcon">🌤️</div>
              <div className="forecastTemperature">
                <span className="maxTemp accentColor">{forecastFourMax}°</span>
                <span className="minTemp accentColor">{forecastFourMin}°</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
