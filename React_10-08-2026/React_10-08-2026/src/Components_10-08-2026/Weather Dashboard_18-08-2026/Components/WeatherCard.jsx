import React from "react";

function WeatherCard({ weather }) {

  return (
    <div className="weather-card">

      <h2>{weather.city}</h2>

      <h1>
        🌡️ {weather.temperature}°C
      </h1>

      <div className="weather-info">

        <div>
          <h3>💧 Humidity</h3>
          <p>{weather.humidity}%</p>
        </div>

        <div>
          <h3>💨 Wind</h3>
          <p>{weather.wind} km/h</p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;