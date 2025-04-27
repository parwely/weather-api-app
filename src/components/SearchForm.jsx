export default function SearchForm({ location, onLocationChange, onSearch, loading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <div className="w-full max-w-5xl mb-8">
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label htmlFor="location-search" className="text-gray-700 font-medium mb-2 sm:mb-0 sm:mr-4 sm:w-32">
            Search location:
          </label>
          <div className="flex flex-1">
            <input
              id="location-search"
              type="text"
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              placeholder="Enter city name"
              className="flex-1 py-2 px-3 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300 px-5 py-2 rounded-r-md font-medium"
              disabled={loading}
            >
              <div className="h-5 w-full flex items-center justify-center">
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <span>Search</span>
                )}
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
