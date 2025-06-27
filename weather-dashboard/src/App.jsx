import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchPanel from './components/SearchPanel';
import Intro from './components/Intro';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import './App.css';



function App() {

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [location, setLocation] = useState('London');
  const [days, setDays] = useState(3);
  const [selectedDay, setSelectedDay] = useState(0);
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
      console.log(data);
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

      <div className='w-full  px-6 py-6'>
        <Intro />
        <SearchPanel
          location={location}
          setLocation={setLocation}
          days={days}
          setDays={setDays}
          onSearch={fetchWeather}
        />

        {weather && (
          <div>
            <div>
              <h1 className='text-3xl text-center font-bold justify-center p-4 mb-5'>{weather.location.name}, {weather.location.country}</h1>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>

              <CurrentWeather data={weather.forecast.forecastday} dayIndex={selectedDay} />
              <Forecast forecast={weather.forecast.forecastday} onSelect={(index) => setSelectedDay(index)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

