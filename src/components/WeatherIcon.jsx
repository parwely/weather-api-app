import { Cloud, CloudRain, Sun } from 'lucide-react';

export default function WeatherIcon({ condition, size = 24 }) {
    switch (condition) {
      case 'Clear':
        return <Sun size={size} className="text-yellow-500" />;
      case 'Clouds':
        return <Cloud size={size} className="text-gray-400" />;
      case 'Rain':
        return <CloudRain size={size} className="text-blue-400" />;
      default:
        return <Sun size={size} className="text-yellow-500" />;
    }
  }