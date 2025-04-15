import { useState, useEffect } from 'react';
import { fetchWeatherData } from '../services/weatherService';

export default function useWeather(initialLocation) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(initialLocation);
  }, [initialLocation]);

  return { weatherData, loading, error, fetchWeather };
}