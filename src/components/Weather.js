import React from 'react';

const Weather = ({ weatherData }) => {
  if (!weatherData) return <div>No Data</div>;

  const { name, main, weather, wind } = weatherData;

  return (
    <div className="weather-info">
      <h2>{name}</h2>
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Description: {weather[0].description}</p>
    </div>
  );
};

export default Weather;
