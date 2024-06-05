import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  let forecastZeroMax = Math.round(
    props.forecastData.forecast[0].temperature.maximum
  );
  let forecastZeroMin = Math.round(
    props.forecastData.forecast[0].temperature.minimum
  );
  let forecastOneMax = Math.round(
    props.forecastData.forecast[1].temperature.maximum
  );
  let forecastOneMin = Math.round(
    props.forecastData.forecast[1].temperature.minimum
  );
  let forecastTwoMax = Math.round(
    props.forecastData.forecast[2].temperature.maximum
  );
  let forecastTwoMin = Math.round(
    props.forecastData.forecast[2].temperature.minimum
  );
  let forecastThreeMax = Math.round(
    props.forecastData.forecast[3].temperature.maximum
  );
  let forecastThreeMin = Math.round(
    props.forecastData.forecast[3].temperature.minimum
  );
  let forecastFourMax = Math.round(
    props.forecastData.forecast[4].temperature.maximum
  );
  let forecastFourMin = Math.round(
    props.forecastData.forecast[4].temperature.minimum
  );
  console.log(props.forecastData.forecast[0].temperature.maximum);
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
                <span className="maxTemp accentColor">{forecastOneMax}°</span>
                <span className="minTemp accentColor">{forecastOneMin}°</span>
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
