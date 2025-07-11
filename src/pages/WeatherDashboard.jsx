import { useState, useEffect } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import HourlyForecast from '../components/HourlyForecast';
import { getThemeClass } from '../utils/getThemeClass';


function WeatherDashboard() {


  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [location, setLocation] = useState(localStorage.getItem('locationName') || '');
  const [loading, setLoading] = useState(true);
  const [selectedDate, SetSelectedDate] = useState(null);
  const currentHour = new Date().getHours();
  const currentWeatherCode = weather ? weather.current_weather.weathercode : false ; 
  const { bg, text } = getThemeClass(currentWeatherCode, currentHour);
 
  useEffect(() => {
    const storedCoords = localStorage.getItem('weatherCoords');
    if (storedCoords) {
      const { lat, lon } = JSON.parse(storedCoords);
      fetchWeather({ lat, lon });
    } else {
      // fallback to Berlin
      const lat = 52.52;
      const lon = 13.41;
      fetchWeather({ lat, lon });
    }
  }, []);






  const fetchWeather = async ({ lat, lon}) => {
    setLoading(true);
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
      SetSelectedDate(data.daily.time[0])

    } catch (error) {
      console.error("Network error: ", error);
      setError("Failed to fetch weather data");
    }finally{
      setLoading(false);
    }
  };
  console.log(weather);

  

  return (

    <div className={` min-h-screen ${bg} ${text} transition-colors duration-500 backdrop-brightness-90`}>
        <div className='max-w-6xl mx-auto  px-6 py-6'>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
              </div>
            ):(weather ? (
                <div className='flex flex-col'>
                    <CurrentWeather data={weather} locationLabel={location} />
                    < HourlyForecast data= {weather} selectedDate = {selectedDate}/>
                    <div className='flex '>
                      <Forecast data={weather} onDaySelect = {SetSelectedDate} selectedDate= {selectedDate} />

                    </div> 
                </div>
            ):(
                  <p className='text-red-600 text-center'>{error}</p>
            ) 
            )}
        </div>
    </div>
  );
}

export default WeatherDashboard;

