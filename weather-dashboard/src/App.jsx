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
  const [location, setLocation] = useState('');
  const [days, setDays] = useState(3);
  const [selectedDay, setSelectedDay] = useState(0);
  const api_key = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported. Showing default location");
      setLocation("London");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
        setLocation(coords);
        console.log('coordinates', coords);
      },
      (err) => {
        console.error("Geolocation error: ", err);
        setError("Location not found. Showing Default location");
        setLocation('London');
      }
    );

  }, [])
  const fetchWeather = async () => {

    try {
      const result = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${location}&days=${days}&aqi=no&alerts=no`
      );
      const data = await result.json();
      if (data.error) {
        console.error("API Error: ", data.error.message);
        setWeather(null);
        return;
      }

      setWeather(data);
      console.log(data);
    } catch (error) {
      setError("Network error");
      setWeather(null);

    }
  };


  const handleSearch = () => {
    fetchWeather();
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-indigo-100 to-cyan-100 ">
      <Navbar />

      <div className='max-w-6xl mx-auto  px-6 py-6'>
        <Intro />
        <SearchPanel
          location={location}
          setLocation={setLocation}
          days={days}
          setDays={setDays}
          onSearch={handleSearch}
        />

        {weather && (
          <div>
            <div>
              <h1 className='text-3xl text-center font-bold justify-center p-4 mb-5'>{weather.location.name}, {weather.location.region}, {weather.location.country}</h1>
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

