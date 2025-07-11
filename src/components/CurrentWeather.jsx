export default function CurrentWeather({ data, locationLabel }) {
  const weather = data.current_weather;
  if (!weather) return null;

  return (
    <div className="rounded p-4 shadow-md text-center">
      <h2 className="text-xl font-semibold mb-2">{locationLabel}</h2>
      <p className="text-4xl font-bold mb-2">{weather.temperature.toFixed(1)}°C</p>
      <p className="text-gray-500 mb-1">
        {new Date(weather.time).toLocaleDateString()} -
        {new Date(weather.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </p>
      <p><strong>Wind:</strong> {weather.windspeed} km/h, Dir: {weather.winddirection}°</p>
    </div>
  );
}
