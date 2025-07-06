import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!location.trim()) return;

    try {
      // Geocode the entered city name
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError('Location not found');
        return;
      }

      // Use the first result
      const city = geoData.results[0];
      const { latitude: lat, longitude: lon, name, country } = city;

      // Save coords and display name to localStorage
      localStorage.setItem('weatherCoords', JSON.stringify({ lat, lon }));
      localStorage.setItem('locationName', `${name}, ${country}`);

      // Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Search error:', err);
      setError('Failed to search location');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-80">
      <h1 className="text-2xl font-bold mb-4">Search Weather</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter City..."
        className="p-2 border border-gray-400 rounded w-64 mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}
