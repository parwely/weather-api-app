import { formatDate } from '../services/dateUtils';
import WeatherDetails from './WeatherDetails';
import { ThermometerSun, ThermometerSnowflake, PlusCircle, Check } from 'lucide-react';
import { forwardRef } from 'react';

/**
 * WeatherCard Component
 *
 * A card component that displays detailed weather information for a specific location.
 * Includes features to save the city to a list and displays current weather conditions,
 * temperature, and additional details.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {Object} props.weatherData - Weather data object containing information about the location
 * @param {Function} props.onAddCity - Callback function to add the city to the saved list
 * @param {boolean} props.isSaved - Indicates whether the city is already saved
 * @param {React.Ref} ref - Reference to the card element
 * @returns {JSX.Element} The rendered WeatherCard component
 */
const WeatherCard = forwardRef(function WeatherCard({ weatherData, onAddCity, isSaved }, ref) {
    return (
        <div ref={ref} className="flex-1 max-w-5xl w-full mx-auto p-6 justify-center bg-white shadow-md rounded-md mb-8 relative flex flex-col">
            {/* Save City Button - Top Right Corner */}
            <button
                onClick={onAddCity}
                className={`absolute top-4 right-4 p-2 rounded-full ${
                    isSaved
                        ? 'bg-green-100 text-green-600 cursor-default'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                } transition-colors`}
                disabled={isSaved}
                title={isSaved ? 'City already saved' : 'Save city to list'}
            >
                {isSaved ? <Check size={20} /> : <PlusCircle size={20} />}
            </button>

            {/* City name and date */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800">{weatherData.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{formatDate(new Date())}</p>
            </div>

            {/* Primary weather information */}
            <div className="flex items-center justify-between mb-8">
                {/* Left side: Icon and condition */}
                <div className="flex items-center">
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        alt={weatherData.weather[0].description}
                        className="w-24 h-24 mr-2"
                    />
                    <div>
                        <p className="font-medium text-gray-700 capitalize">{weatherData.weather[0].description}</p>
                        <p className="text-gray-500">Feels like: {Math.round(weatherData.main.feels_like)}°</p>
                    </div>
                </div>

                {/* Right side: Temperature */}
                <div className="text-right">
                    <p className="text-6xl font-light text-gray-800">{Math.round(weatherData.main.temp)}°</p>
                </div>
            </div>

            {/* Min/Max temperatures */}
            <div className="flex justify-between items-center bg-gray-50 rounded-md p-3 mb-8">
                <div className="flex items-center">
                    <ThermometerSnowflake size={18} className="text-blue-500 mr-2" />
                    <div>
                        <p className="text-xs text-gray-500">LOW</p>
                        <p className="font-medium">{Math.round(weatherData.main.temp_min)}°</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <ThermometerSun size={18} className="text-orange-500 mr-2" />
                    <div>
                        <p className="text-xs text-gray-500">HIGH</p>
                        <p className="font-medium">{Math.round(weatherData.main.temp_max)}°</p>
                    </div>
                </div>
            </div>

            {/* Details */}
            <div>
                <WeatherDetails weatherData={weatherData} />
            </div>
        </div>
    );
});

export default WeatherCard;
