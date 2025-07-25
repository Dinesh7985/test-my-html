import React, { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const apiKey = "9983a7fba112d378e6ec2d2c69c80877";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

  const handleSearch = async () => {
    if (!city) return;
    try {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setError(false);
      }
    } catch (err) {
      setError(true);
      setWeatherData(null);
    }
  };

  const getWeatherIcon = (type) => {
    switch (type) {
      case "Clouds":
        return "images/clouds.png";
      case "Clear":
        return "images/clear.png";
      case "Rain":
        return "images/rain.png";
      case "Drizzle":
        return "images/drizzle.png";
      case "Mist":
        return "images/mist.png";
      default:
        return "images/default.png";
    }
  };

  return (
    <div className="card">
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          spellCheck="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img src="images/search.png" alt="search" />
        </button>
      </div>

      {error && (
        <div className="error">
          <p>Invalid city name</p>
        </div>
      )}

      {weatherData && (
        <div className="weather">
          <img
            src={getWeatherIcon(weatherData.weather[0].main)}
            className="weather-icon"
            alt="weather"
          />
          <h1 className="temp">{Math.round(weatherData.main.temp)}°c</h1>
          <h2 className="city">{weatherData.name}</h2>
          <div className="details">
            <div className="col">
              <img src="images/humidity.png" alt="humidity" />
              <div>
                <p className="humidity">{weatherData.main.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="images/wind.png" alt="wind" />
              <div>
                <p className="wind">{weatherData.wind.speed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
