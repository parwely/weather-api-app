Weather Forecast App
    A modern, responsive web application for checking weather forecasts for cities around the world. Built with React and OpenWeatherMap API.


Technologies Used
- React
- Axios for API requests
- TailwindCSS for styling
- Vite for build tooling
- OpenWeatherMap API

Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (get one for free at https://openweathermap.org/api)


Installation
1. Clone the repository:
    git clone https://github.com/yourusername/weather-forecast-app.git
    cd weather-forecast-app

2. Install dependencies:
    npm install
    
3. Environment setup:
    - Copy .env.example to .env
    - Replace your_api_key_here with your actual OpenWeatherMap API key

4. Start the development server:
    npm run dev

Project Structure

weather-forecast-app/
├── public/
│   └── weather-icon.svg
├── src/
│   ├── components/
│   │   ├── SearchForm.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── WeatherDetails.jsx
│   │   └── WeatherIcon.jsx
│   ├── services/
│   │   ├── dateUtils.js
│   │   ├── useDebounce.js
│   │   ├── useWeather.js
│   │   └── weatherService.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .env.example
├── .gitignore
└── README.md

License
    This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
    - OpenWeatherMap for providing the weather data API
    - TailwindCSS for the utility-first CSS framework
    - React for the UI library