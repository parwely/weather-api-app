import axios from "axios";

/**
 * Weather API service to fetch weather data.
 */
const weatherService = {
  /**
   * Fetches weather data for a given location.
   *
   * @param {string} location - The name of the location to fetch weather data for.
   * @returns {Promise<Object>} - A promise that resolves to the weather data object.
   * @throws {Error} - Throws an error if the API call fails.
   */
  async getWeatherData(location) {
    try {
      // Get API key from environment variables
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

      // Make the API call using Axios
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  },
};

export default weatherService;