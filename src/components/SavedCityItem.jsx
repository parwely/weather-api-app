import { Trash2 } from "lucide-react";

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
