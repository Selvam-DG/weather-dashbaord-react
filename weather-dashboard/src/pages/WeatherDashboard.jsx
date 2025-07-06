import { useState, useEffect } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import HourlyForecast from '../components/HourlyForecast';

function WeatherDashboard() {

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [location, setLocation] = useState('');
  const [ coords, setCoords ] = useState({lat:52.52, lon:13.41}); // default to Berlin

 


  // Load Coords and fetch
  useEffect( () => {
    const storedCoords = localStorage.getItem('weatherCoords');
    if (storedCoords){
      const {lat, lon } = JSON.parse(storedCoords);
      setCoords( { lat, lon});
    }
  }, [])

    // 2) Whenever coords change, re-fetch weather
  useEffect(() => {
    fetchWeather(coords);
  }, [coords]);



  const fetchWeather = async ({ lat, lon}) => {
     const dailyParams = 'temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum,sunrise,sunset,wind_speed_10m_max,uv_index_max'
     const houryParams = 'temperature_2m,weathercode'

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=${dailyParams}&timezone=auto&forecast_days=16&hourly=${houryParams}`;

      const result = await fetch(url);
      const data = await result.json();
      if (!data || !data.current_weather) {
        setError("Weather Data not available");
        setWeather(null);
        return;
      }

      setWeather(data);
      console.log(data);
    } catch (error) {
      console.error("Network error: ", error);
      setError("Failed to fetch weather data");
    }
  };


  

  return (

    <div className="min-h-screen  bg-gradient-to-br from-indigo-100 to-cyan-100 ">
        <div className='max-w-6xl mx-auto  px-6 py-6'>
            {weather && (
            <div>
                <CurrentWeather data={weather} locationLabel={location} />
                < HourlyForecast data= {weather}/>
                <Forecast data={weather} />
            </div> 
            )}
        </div>
    </div>
  );
}

export default WeatherDashboard;

