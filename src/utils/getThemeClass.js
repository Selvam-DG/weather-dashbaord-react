export const getThemeClass = (weatherCode, hour) => {
  const isDay = hour >= 6 && hour <= 18;
  const textColor = isDay ? "text-black" : "text-white drop-shadow-md ";

  const themeMap = [
    {
      codes: [0, 1],
      bg: isDay
        ? "bg-gradient-to-br from-yellow-100 to-blue-200"
        : "bg-gradient-to-br from-gray-800 to-black",
      text: textColor,
    },
    {
      codes: [2, 3],
      bg: isDay
        ? "bg-gradient-to-br from-gray-200 to-blue-300"
        : "bg-gradient-to-br from-gray-700 to-gray-900",
      text: "text-white drop-shadow-md",
    },
    {
      codes: [45, 48],
      bg: "bg-gradient-to-br from-gray-400 to-gray-700",
      text: "text-white drop-shadow-md",
    },
    {
      codes: [51, 53, 55, 61, 63, 65, 80, 81, 82],
      bg: isDay
        ? "bg-gradient-to-br from-blue-200 to-gray-300"
        : "bg-gradient-to-br from-gray-800 to-black",
      text: textColor,
    },
    {
      codes: [71, 73, 75, 77, 85, 86],
      bg: "bg-gradient-to-br from-blue-100 to-white",
      text: "text-black drop-shadow-md",
    },
    {
      codes: [95, 96, 99],
      bg: "bg-gradient-to-br from-yellow-500 to-red-700",
      text: "text-white",
    },
  ];

  return themeMap.find(({ codes }) => codes.includes(weatherCode)) || {
    bg: isDay
      ? "bg-gradient-to-br from-blue-100 to-blue-300"
      : "bg-gradient-to-br from-gray-900 to-black",
    text: textColor,
  };
};
