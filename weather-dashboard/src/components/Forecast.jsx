// export default function Forecast({ forecast, onSelect }) {
//     return (
//         <div className="w-full md:1/3 p-4 bg-transparent">
//             <h3 className="text-lg font-semibold mb-2">Forecast</h3>
//             <div className="flex flex-col gap-4">
//                 {forecast.map((day, index) => (
//                     <button key={day.date} className="bg-gradient-to-b from-slate-600 to-sky-600 text-white rounded shadow p-3 text-left hover:text-lg" onClick={() => onSelect(index)}>
//                         <div className="flex items-center gap-2">
//                             <img src={`http:${day.day.condition.icon}`} alt="icon" className="w-8 h-8" />
//                             <div>
//                                 <h4 className="font-semibold">{day.date}</h4>
//                                 <p>{day.day.condition.text}</p>
//                                 <p>{day.day.avgtemp_c}°C / {day.day.avgtemp_f}°F</p>
//                             </div>
//                         </div>
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// }
const Forecast = ({ forecast, onSelect, selectedDay }) => {
//   return (
//     <div className="bg-white p-4 rounded shadow w-full">
//       <h2 className="text-xl font-bold mb-2">Forecast</h2>
//       <div className="flex flex-col gap-2">
//         {forecast.time.map((date, index) => (
//           <div
//             key={date}
//             className={`cursor-pointer p-2 rounded ${index === selectedDay ? 'bg-blue-100' : ''}`}
//             onClick={() => onSelect(index)}
//           >
//             <p>{date}</p>
//             <p>
//               Max: {forecast.temperature_2m_max[index]}°C, Min: {forecast.temperature_2m_min[index]}°C
//             </p>
//             <p>Precipitation: {forecast.precipitation_sum[index]} mm</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
};

export default Forecast;
