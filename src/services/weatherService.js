// Mock API function (in real app replace with actual API calls)
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
  // In a real app, this function would use fetch:
// export async function fetchWeatherData(city) {
//   const apiKey = 'your_api_key';
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//   
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error('Failed to fetch weather data');
//   }
//   return await response.json();
// }