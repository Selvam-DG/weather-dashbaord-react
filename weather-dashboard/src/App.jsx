import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';



function App() {

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [location, setLocation] = useState('London');
  const [days, setDays] = useState(3);
  const api_key = import.meta.env.VITE_WEATHER_API_KEY;
  const fetchWeather = async () => {

    try {
      const result = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${location}&days=${days}&aqi=no&alerts=no`
      );
      const data = await result.json();
      if (data.error) {
        console.error("API Error: ", data.error.message);
        return;
      }

      setWeather(data);
    } catch (error) {
      setError("Network error");
      setWeather(null);

    }
  };
  useEffect(() => {
    fetchWeather();
  }, [location, days]);



  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <Navbar />

      <div className='mb-4'>
        <form onSubmit={(e) => { e.preventDefault(); fetchWeather(location, days) }}>
          <input type="text" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <input type="number" placeholder='Enter Number of days' value={days} onChange={(e) => setDays(e.target.value)} />
          <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600" >Get Forecast</button>
        </form>
      </div>
      {error && (
        <div className="mb-4 text-red-600 font-semibold">{error}   </div>
      )}
      {weather && (
        <div className="bg-white rounded shadow p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">
            {weather.location.name}, {weather.location.country}
          </h2>
          <p className="mb-1">{weather.current.condition.text}</p>
          <p className="text-lg font-bold">
            {weather.current.temp_c}°C / {weather.current.temp_f}°F
          </p>

          <h3 className="mt-6 mb-2 font-semibold">{days} Forecast</h3>
          <div className="grid grid-cols-2 gap-4">
            {weather.forecast.forecastday.map((day) => (
              <div
                key={day.date}
                className="border rounded p-2 bg-blue-100 text-center"
              >
                <div>{day.date}</div>
                <img
                  src={`https:${day.day.condition.icon}`}
                  alt={day.day.condition.text}
                  className="mx-auto"
                />
                <div>{day.day.condition.text}</div>
                <div>
                  {day.day.avgtemp_c}°C / {day.day.avgtemp_f}°F
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

