# 🌤️ Weather Forecast App

A modern, responsive web application for checking weather forecasts for cities around the world.  
Built with **React** and the **OpenWeatherMap API**.

---

## 🔧 Technologies Used

- ⚛️ React
- 🌐 Axios (for API requests)
- 🎨 TailwindCSS (for styling)
- ⚡ Vite (for build tooling)
- 🌍 OpenWeatherMap API

---

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn
- [OpenWeatherMap API key](https://openweathermap.org/api)

---

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/weather-forecast-app.git
   cd weather-forecast-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment setup**:
   - Copy `.env.example` to `.env`
   - Replace `your_api_key_here` with your actual **OpenWeatherMap API key**

4. **Start the development server**:
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure

```
weather-forecast-app/
├── public/
│   └── weather-icon.svg
├── src/
│   ├── components/
│   │   ├── SearchForm.jsx
│   │   ├── WeatherCard.jsx
│   │   └── WeatherDetails.jsx
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
```

---

## Documentation

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the powerful UI library
