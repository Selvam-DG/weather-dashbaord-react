import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrentWeather from '../components/CurrentWeather';
import { getThemeClass } from "../utils/getThemeClass";



export default function Home(){
    const [weather, setWeather ]= useState(null);
    const [error, setError ] = useState('');
    const navigate = useNavigate();

    useEffect( () => {
        // Stored coors
        const storedCcoords = localStorage.getItem('weatherCoords');
        if (storedCcoords){
            const {lat, lon } = JSON.parse(storedCcoords);
            fetchWeather(lat, lon);
            return ;
        }

        // use geolocation or default
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    localStorage.setItem("weatherCoords", JSON.stringify( {lat, lon}));
                    fetchWeather(lat, lon);
                },
                (error) => {
                    // set default location to Berlin
                    const lat= 52.52 ;
                    const lon = 13.41 ;
                    console.error("Geolocation Error: ", error);
                    localStorage.setItem("weatherCoords", JSON.stringify({ lat, lon}));
                    fetchWeather(lat, lon); // default to Berlin
                }
            );
        }else{
            const lat = 52.52;
            const lon = 13.41;
            localStorage.setItem('weatherCoords', JSON.stringify({ lat, lon}));
            fetchWeather(lat, lon);
        }    
    } , [])

    const fetchWeather = async(lat, lon) => {
        try{
            const res = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
            );
            const data = await res.json();
            if(!data?.current_weather){
                setError("Weather data not Available");
                return;
            }
            setWeather(data);
        }catch(error){
            console.error("Fetch weather error: ", error);
            setError("Failed to fetch Weather data")
            }
        }
    let theme = { bg: 'bg-gray-100', text: 'text-gray-900' };

    if (weather?.current_weather) {
        const hour = new Date(weather.current_weather.time).getHours();
        const code = weather.current_weather.weathercode;
        theme = getThemeClass(code, hour);
    }
    return (
        <div className={`min-h-screen ${theme.bg} ${theme.text}  transition-colors duration-300`}>
        <div className=" p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Weather Dashboard</h1>
            <p className="mb-6 ">
                This app provides accurate and fast weather forecasts powered by{" "}
                <a
                href="https://open-meteo.com/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
                >
                Open-Meteo
                </a>
                , a free weather API.
            </p>
             <div className="border border-blue-200 p-4 rounded-lg mb-6">
                <p>
                We use your current location to provide hyperlocal weather forecasts.
                If location access is denied, we’ll show Berlin’s weather instead.
                </p>
            </div>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            {weather ? (
                <div className=" shadow-lg rounded-lg p-6 mb-4 flex items-center justify-between">
                    <div>
                       
                        < CurrentWeather data={weather} locationLabel={localStorage.getItem('locationName') || weather.timezone}/>
                    </div>
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={() => navigate("/dashboard")}
                    >
                        View Detailed Forecast
                    </button>
                </div>
            ):(
                <div className="flex items-center justify-center h-40">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
                    <span className="ml-4 text-blue-700 font-semibold">Loading current weather...</span>
                </div>

            )}
             <div className="mt-10 text-gray-500 text-sm">
                <p>
                🔍 You can also search for other cities using the "Search" option in the navbar.
                </p>
            </div>

            </div>
        </div>
    );

}