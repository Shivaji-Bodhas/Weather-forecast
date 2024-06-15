import React, { useState } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import Search from './components/Search';
import DarkModeToggle from './components/DarkModeToggle';
import './styles.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const API_KEY = 'cdd50b23eba685b7226dc6c3d9babbf4'; // Your provided API key

  const fetchWeather = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      console.log('Weather data:', response.data);
    } catch (error) {
      console.error('Error fetching the weather data', error);
      if (error.response) {
        if (error.response.status === 401) {
          alert('Invalid API key. Please check your API key and try again.');
        } else if (error.response.status === 404) {
          alert('Location not found. Please enter a valid city name or zip code.');
        } else {
          alert('Error: ' + error.response.data.message);
        }
      } else if (error.request) {
        alert('Network issue. Please check your internet connection.');
      } else {
        alert('Error: ' + error.message);
      }
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <h1>Weather App</h1>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Search onSearch={fetchWeather} />
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default App;
