import axios from "axios";

// Weather API service
const WeatherService = {
  // Fetch weather data for a given location
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

export default WeatherService;

// Mock API function (in real app replace with actual API calls)
/*
export async function fetchWeatherData(city) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockData = {
          name: city,
          main: {
            temp: Math.round(10 + Math.random() * 20),
            feels_like: Math.round(8 + Math.random() * 20),
            humidity: Math.round(40 + Math.random() * 40),
            pressure: Math.round(1000 + Math.random() * 30),
          },
          weather: [
            {
              main: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)],
              description: ['Sunny', 'Partly cloudy', 'Light rain'][Math.floor(Math.random() * 3)]
            }
          ],
          wind: {
            speed: Math.round((1 + Math.random() * 9) * 10) / 10,
          },
          sys: {
            sunrise: new Date().setHours(6, 30, 0, 0),
            sunset: new Date().setHours(19, 45, 0, 0),
          }
        };
        resolve(mockData);
      }, 600);
    });
  }
    */
