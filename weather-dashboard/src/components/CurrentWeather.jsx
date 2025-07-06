

import { useEffect, useRef } from "react";

const CurrentWeather = ({ data, locationLabel }) => {
    const current_weather = data.current_weather;
    if(!current_weather) return null;

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6 text-center space-y-4">
      <h2 className="text-2xl font-bold mb-2">{locationLabel || data.timezone}</h2>
      <p className="text-4xl font-semibold">
        {current_weather.temperature.toFixed(1)}°C
      </p>
      <p className="text-sm text-gray-500 text-center">
        {new Date(current_weather.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </p>
      
      <div className="mt-4">
        <span className="font-medium">Wind Speed:</span> {current_weather.windspeed} km/h
      </div >
      <div className="mt-4">
        <span className="font-medium">Wind Dir:</span> {current_weather.winddirection}°
      </div>
      
    </div>
  );
};

export default CurrentWeather;
