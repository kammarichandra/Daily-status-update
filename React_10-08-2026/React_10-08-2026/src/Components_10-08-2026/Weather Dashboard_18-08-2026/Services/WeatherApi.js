import axios from "axios";

export const searchCity = async (city) => {

  const response = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search",
    {
      params: {
        name: city,
        count: 1,
        language: "en",
        format: "json",
      },
    }
  );

  return response.data;
};


export const getWeather = async (latitude, longitude) => {

  const response = await axios.get(
    "https://api.open-meteo.com/v1/forecast",
    {
      params: {
        latitude: latitude,
        longitude: longitude,
        current: "temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code",
      },
    }
  );

  return response.data;
};