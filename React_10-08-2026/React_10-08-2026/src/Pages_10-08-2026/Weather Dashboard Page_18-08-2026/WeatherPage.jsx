import React, { useState } from "react";

import Searchbar from './../../Components_10-08-2026/Weather Dashboard_18-08-2026/Components/Searchbar';
import WeatherCard from './../../Components_10-08-2026/Weather Dashboard_18-08-2026/Components/WeatherCard';
import Loading from './../../Components_10-08-2026/Weather Dashboard_18-08-2026/Components/Loading';
import Errormsg from './../../Components_10-08-2026/Weather Dashboard_18-08-2026/Components/Errormsg';
import { searchCity , getWeather} from './../../Components_10-08-2026/Weather Dashboard_18-08-2026/Services/WeatherApi';

function App() {

  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");


  const handleSearch = async (city) => {

    try {

      setLoading(true);
      setError("");
      setWeather(null);


      // Step 1: Find city
      const cityData = await searchCity(city);


      if (
        !cityData.results ||
        cityData.results.length === 0
      ) {
        throw new Error("City not found");
      }


      const location = cityData.results[0];


      // Step 2: Get weather
      const weatherData = await getWeather(
        location.latitude,
        location.longitude
      );


      // Step 3: Handle response
      setWeather({
        city: location.name,
        temperature:
          weatherData.current.temperature_2m,
        humidity:
          weatherData.current.relative_humidity_2m,
        wind:
          weatherData.current.wind_speed_10m,
      });


    } catch (error) {

      console.log(error);

      setError(
        error.message || "Failed to fetch weather"
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <div className="app">

      <h1>🌦️ Weather Dashboard</h1>


      <Searchbar
        onSearch={handleSearch}
      />


      {loading && <Loading />}


      {error && (
        <Errormsg
          message={error}
        />
      )}


      {weather && !loading && (
        <WeatherCard
          weather={weather}
        />
      )}

    </div>
  );
}

export default App;