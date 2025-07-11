export const weatherCodeToIcon = (code) => {
  const map = {
    0: "☀️", // Clear
    1: "🌤️", // Mainly clear
    2: "⛅", // Partly cloudy
    3: "☁️", // Overcast
    45: "🌫️", // Fog
    48: "🌫️", // Fog
    51: "🌦️", // Light drizzle
    53: "🌦️",
    55: "🌧️", // Moderate drizzle
    56: "🌧️",
    57: "🌧️",
    61: "🌧️", // Light rain
    63: "🌧️", // Moderate rain
    65: "🌧️", // Heavy rain
    66: "🌨️", // Freezing rain
    67: "🌨️",
    71: "❄️", // Snow fall
    73: "❄️",
    75: "❄️",
    77: "🌨️",
    80: "🌧️", // Rain showers
    81: "🌧️",
    82: "🌧️",
    85: "❄️", // Snow showers
    86: "❄️",
    95: "⛈️", // Thunderstorm
    96: "⛈️",
    99: "⛈️"
  };

  return map[code] || "❔";
};
