import { useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';
import useWeather from './services/useWeather';

export default function App() {
  const [location, setLocation] = useState('Berlin');
  const { weatherData, loading, error, fetchWeather } = useWeather(location);

  const handleSearch = (searchLocation) => {
    setLocation(searchLocation);
    fetchWeather(searchLocation);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center py-12 px-4 ">
      {/* Header */}
      <header className="py-4 p-8 text-center border-b border-gray-200 bg-white mb-6 shadow-md rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-800">Weather App</h1>
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
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
            <p>{error}</p>
          </div>
        )}
        
        {/* Weather Card */}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </div>
  
  );
}