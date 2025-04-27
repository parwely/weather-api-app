import SavedCityItem from "./SavedCityItem";

export default function SavedCities({ cities, onDeleteCity }) {
  if (cities.length === 0) {
    return (
      <div className="bg-white p-6 shadow-md rounded-lg text-center">
        <p className="text-gray-500">No saved cities yet. Search for a city and add it to your list.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Saved Cities</h2>
      <div className="max-h-96 overflow-y-auto">
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
