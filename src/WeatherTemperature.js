import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius() {
    return (props.fahrenheit - 32) / 1.8;
  }

  if (unit === "fahrenheit") {
    return (
      <span className="temperature">
        {" "}
        {Math.round(props.fahrenheit)}
        <span className="tempUnit">
          <a className="fahrenheit">℉</a> |
          <a className="celcius" onClick={showCelsius}>
            ℃
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="temperature">
        {" "}
        {Math.round(convertToCelsius())}
        <span className="tempUnit">
          <a className="fahrenheit" onClick={showFahrenheit}>
            ℉
          </a>{" "}
          |<a className="celcius">℃</a>
        </span>
      </span>
    );
  }
}