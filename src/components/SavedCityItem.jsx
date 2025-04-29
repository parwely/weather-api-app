import { Trash2 } from "lucide-react";

/**
 * SavedCityItem Component
 *
 * Represents a single saved city item in the list, displaying its weather information
 * and providing an option to delete it from the saved list.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {Object} props.weatherData - Weather data object for the saved city
 * @param {string} props.weatherData.name - Name of the city
 * @param {Object[]} props.weatherData.weather - Array containing weather details
 * @param {string} props.weatherData.weather[0].icon - Icon code for the weather condition
 * @param {string} props.weatherData.weather[0].description - Description of the weather condition
 * @param {Object} props.weatherData.main - Main weather data object
 * @param {number} props.weatherData.main.temp - Current temperature in the city
 * @param {Function} props.onDelete - Callback function to delete the city from the saved list
 * @returns {JSX.Element} The rendered SavedCityItem component
 */
export default function SavedCityItem({ weatherData, onDelete }) {
    return (
        <div className="bg-gray-50 p-4 rounded-md flex justify-between hover:bg-blue-50 transition-colors">
            <div className="flex items-center flex-1 mr-4">
                <img
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt={weatherData.weather[0].description}
                    className="w-12 h-12 mr-2 flex-shrink-0"
                />
                <div className="min-w-0 flex-grow">
                    <h3 className="font-bold text-gray-800 overflow-visible">{weatherData.name}</h3>
                    <p className="text-sm text-gray-600 overflow-visible">{weatherData.weather[0].description}</p>
                </div>
            </div>

            <div className="flex items-center flex-shrink-0 ml-auto">
                <div className="text-xl font-medium mr-4 whitespace-nowrap">{Math.round(weatherData.main.temp)}°C</div>
                <button
                    onClick={() => onDelete(weatherData.id)}
                    className="p-1 text-gray-500 hover:text-red-600 transition-colors flex-shrink-0"
                    aria-label="Delete city"
                >
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
}