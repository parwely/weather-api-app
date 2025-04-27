import { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import SavedCities from "./components/SavedCities";
import useWeather from "./services/useWeather";

export default function App() {
  const [location, setLocation] = useState("Berlin");
  const { weatherData, loading, error, fetchWeather } = useWeather(null);
  const [savedCities, setSavedCities] = useState([]);

  // Load saved cities from localStorage on initial load
  useEffect(() => {
    const saved = localStorage.getItem("savedCities");
    if (saved) {
      setSavedCities(JSON.parse(saved));
    }
    fetchWeather("Berlin"); // Initial city
  }, []);

  // Save to localStorage whenever savedCities changes
  useEffect(() => {
    localStorage.setItem("savedCities", JSON.stringify(savedCities));
  }, [savedCities]);

  const handleSearch = (searchLocation) => {
    fetchWeather(searchLocation);
  };

  const addCityToList = () => {
    if (!weatherData) return;
    
    // Check if city already exists in the list
    const cityExists = savedCities.some(city => city.id === weatherData.id);
    
    if (!cityExists) {
      setSavedCities(prev => [weatherData, ...prev]);
    }
  };

  const deleteCity = (cityId) => {
    setSavedCities(prev => prev.filter(city => city.id !== cityId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center py-12 px-4">
      {/* Header */}
      <header className="py-4 p-8 text-center border-b border-gray-200 bg-white mb-6 shadow-md rounded-md w-full max-w-5xl">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <svg
            className="w-8 h-8"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="32" fill="#3B82F6" />
            <circle cx="24" cy="24" r="10" fill="#FBBF24" />
            <path
              d="M46 36C46 40.4183 42.4183 44 38 44H22C17.5817 44 14 40.4183 14 36C14 31.5817 17.5817 28 22 28H38C42.4183 28 46 31.5817 46 36Z"
              fill="white"
            />
            <path
              d="M50 36C50 40.4183 46.4183 44 42 44H26C21.5817 44 18 40.4183 18 36C18 31.5817 21.5817 28 26 28H42C46.4183 28 50 31.5817 50 36Z"
              fill="white"
            />
          </svg>
          <h1 className="text-3xl font-bold text-gray-800">Weather App</h1>
        </div>
        <p className="text-gray-600">Check the weather anywhere</p>
      </header>

      {/* Search Form */}
      <SearchForm
        location={location}
        onLocationChange={setLocation}
        onSearch={handleSearch}
        loading={loading}
      />

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md">
          <p>{error}</p>
        </div>
      )}

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Weather Card */}
        <div className="lg:col-span-1">
          {weatherData && (
            <>
              <WeatherCard
                weatherData={weatherData}
                onAddCity={addCityToList}
                isSaved={savedCities.some(city => city.id === weatherData.id)}
              />
            </>
          )}
        </div>
        
        {/* Saved Cities List */}
        <div className="lg:col-span-1">
          <SavedCities 
            cities={savedCities} 
            onDeleteCity={deleteCity} 
          />
        </div>
      </div>
    </div>
  );
}
