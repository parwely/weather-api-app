import { useState, useEffect } from 'react';
import WeatherService from './weatherService';

export default function useWeather(initialLocation) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    if (!location) return;
    
    setLoading(true);
    setError(null);

    try {
      const data = await WeatherService.getWeatherData(location);
      setWeatherData(data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialLocation) {
      fetchWeather(initialLocation);
    }
  }, [initialLocation]);

  return { weatherData, loading, error, fetchWeather };
}