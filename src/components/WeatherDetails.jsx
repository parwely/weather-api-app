import { Droplets, Wind, Sunrise, Sunset } from "lucide-react";
import { formatTime } from "../services/dateUtils";

export default function WeatherDetails({ weatherData }) {
  return (
    <div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Weather Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded flex items-center">
            <Droplets size={24} className="text-blue-500 mr-3" />
            <div>
              <p className="text-gray-500 text-sm">Humidity</p>
              <p className="font-medium">{weatherData.main.humidity}%</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded flex items-center">
            <Wind size={24} className="text-blue-500 mr-3" />
            <div>
              <p className="text-gray-500 text-sm">Wind Speed</p>
              <p className="font-medium">{weatherData.wind.speed} m/s</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded flex items-center">
            <Sunrise size={24} className="text-yellow-500 mr-3" />
            <div>
              <p className="text-gray-500 text-sm">Sunrise</p>
              <p className="font-medium">
                {formatTime(weatherData.sys.sunrise, weatherData.timezone)}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded flex items-center">
            <Sunset size={24} className="text-orange-500 mr-3" />
            <div>
              <p className="text-gray-500 text-sm">Sunset</p>
              <p className="font-medium">
                {formatTime(weatherData.sys.sunset, weatherData.timezone)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-8">
        Last updated: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}
