import { useState, useEffect } from 'react';
import weatherService from './weatherService';

/**
 * Custom React hook to fetch and manage weather data.
 *
 * @param {string} initialLocation - The initial location to fetch weather data for.
 * @returns {Object} - An object containing:
 *   - `weatherData` (Object|null): The fetched weather data or null if not available.
 *   - `loading` (boolean): Indicates whether the weather data is being fetched.
 *   - `error` (string|null): Error message if the fetch fails, or null if no error.
 *   - `fetchWeather` (Function): A function to manually fetch weather data for a given location.
 */
export default function useWeather(initialLocation) {
  const [weatherData, setWeatherData] = useState(null); // State to store weather data
  const [loading, setLoading] = useState(false); // State to indicate loading status
  const [error, setError] = useState(null); // State to store error messages

  /**
   * Fetches weather data for a given location.
   *
   * @param {string} location - The location to fetch weather data for.
   * @returns {Promise<void>} - A promise that resolves when the fetch is complete.
   */
  const fetchWeather = async (location) => {
    if (!location) return;

    setLoading(true);
    setError(null);

    try {
      const data = await weatherService.getWeatherData(location); // Fetch weather data
      setWeatherData(data); // Update weather data state
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.'); // Set error message
      console.error(err); // Log error to console
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Effect to fetch weather data when the initial location changes
  useEffect(() => {
    if (initialLocation) {
      fetchWeather(initialLocation);
    }
  }, [initialLocation]);

  // Return the state and fetch function
  return { weatherData, loading, error, fetchWeather };
}