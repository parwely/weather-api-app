import { formatDate } from '../services/dateUtils';
import WeatherIcon from './WeatherIcon';
import WeatherDetails from './WeatherDetails';
import { ThermometerSun, ThermometerSnowflake } from 'lucide-react';

export default function WeatherCard({ weatherData }) {
    return (
      <div className="flex-1 max-w-5xl w-full mx-auto p-4 justify-center bg-white shadow-lg rounded-lg mt-8 mb-8">
          {/* City and Date */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800">{weatherData.name}</h2>
              <p className="text-lg opacity-90 mt-1">{formatDate(new Date())}</p>
              <p className="text-gray-500">{weatherData.weather[0].description}</p>
            </div>
            <div className="flex items-center">
              {WeatherIcon(weatherData.weather[0].main)}
            </div>
          </div>
          
          {/* Main Temperature */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-7xl font-light">{Math.round(weatherData.main.temp)}°</p>
              <p className="text-gray-500">Feels like: {Math.round(weatherData.main.feels_like)}°</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end mb-1">
                <ThermometerSun size={16} className="mr-1" />
                <p className="text-sm">High: {Math.round(weatherData.main.temp + 2)}°</p>
              </div>
              <div className="flex items-center justify-end">
                <ThermometerSnowflake size={16} className="mr-1" />
                <p className="text-sm">Low: {Math.round(weatherData.main.temp - 2)}°</p>
              </div>
            </div>
          </div>
        
        {/* Details */}
        <WeatherDetails weatherData={weatherData} />
      </div>
    );
  }