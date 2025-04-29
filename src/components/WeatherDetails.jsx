import { Droplets, Wind, Sunrise, Sunset } from "lucide-react";
import { formatTime } from "../services/dateUtils";

/**
 * WeatherDetails Component
 *
 * Displays detailed weather information such as humidity, wind speed, sunrise, and sunset times.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {Object} props.weatherData - Weather data object containing detailed weather information
 * @returns {JSX.Element} The rendered WeatherDetails component
 */
export default function WeatherDetails({ weatherData }) {
    return (
        <div>
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Weather Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <WeatherDetailItem
                        icon={<Droplets size={20} className="text-blue-500" />}
                        label="Humidity"
                        value={`${weatherData.main.humidity}%`}
                    />

                    <WeatherDetailItem
                        icon={<Wind size={20} className="text-blue-500" />}
                        label="Wind Speed"
                        value={`${weatherData.wind.speed} m/s`}
                    />

                    <WeatherDetailItem
                        icon={<Sunrise size={20} className="text-yellow-500" />}
                        label="Sunrise"
                        value={formatTime(weatherData.sys.sunrise, weatherData.timezone)}
                    />

                    <WeatherDetailItem
                        icon={<Sunset size={20} className="text-orange-500" />}
                        label="Sunset"
                        value={formatTime(weatherData.sys.sunset, weatherData.timezone)}
                    />
                </div>
            </div>

            <p className="text-xs text-gray-500 text-center mt-8">
                Last updated: {new Date().toLocaleTimeString()}
            </p>
        </div>
    );
}

/**
 * WeatherDetailItem Component
 *
 * A helper component for displaying individual weather detail items with an icon, label, and value.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {JSX.Element} props.icon - Icon representing the weather detail
 * @param {string} props.label - Label describing the weather detail
 * @param {string} props.value - Value of the weather detail
 * @returns {JSX.Element} The rendered WeatherDetailItem component
 */
function WeatherDetailItem({ icon, label, value }) {
    return (
        <div className="bg-gray-50 p-4 rounded-md flex items-center">
            <div className="w-8 h-8 flex items-center justify-center mr-3">
                {icon}
            </div>
            <div>
                <p className="text-gray-500 text-sm">{label}</p>
                <p className="font-medium">{value}</p>
            </div>
        </div>
    );
}
