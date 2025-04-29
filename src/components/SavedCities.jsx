import SavedCityItem from "./SavedCityItem";

/**
 * SavedCities Component
 *
 * Displays a list of saved cities with their weather information. If no cities are saved,
 * it shows a placeholder message. The component dynamically adjusts its height based on
 * the provided `height` prop.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {Array} props.cities - Array of saved city objects containing weather data
 * @param {Function} props.onDeleteCity - Callback function to delete a city from the saved list
 * @param {number} props.height - Dynamic height for the component, used for UI consistency
 * @returns {JSX.Element} The rendered SavedCities component
 */
export default function SavedCities({ cities, onDeleteCity, height }) {
  // Inline style for dynamic height
  const cardStyle = {
    height: height ? `${height}px` : 'auto',
    minHeight: '300px', // Fallback minimum height
  };

  if (cities.length === 0) {
    return (
        <div
            className="bg-white p-6 shadow-md rounded-md text-center mb-8 flex items-center justify-center"
            style={cardStyle}
        >
          <p className="text-gray-500">No saved cities yet. Search for a city and add it to your list.</p>
        </div>
    );
  }

  return (
      <div
          className="bg-white p-6 shadow-md rounded-md mb-8 flex flex-col"
          style={cardStyle}
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Saved Cities</h2>
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {cities.map(city => (
              <SavedCityItem
                  key={city.id}
                  weatherData={city}
                  onDelete={onDeleteCity}
              />
          ))}
        </div>
      </div>
  );
}