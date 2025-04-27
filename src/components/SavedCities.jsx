import SavedCityItem from "./SavedCityItem";

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
