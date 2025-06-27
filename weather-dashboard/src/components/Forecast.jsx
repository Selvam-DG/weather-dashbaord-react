export default function Forecast({ forecast, onSelect }) {
    return (
        <div className="w-full md:1/3 p-4">
            <h3 className="text-lg font-semibold mb-2">Forecast</h3>
            <div className="flex flex-col gap-4">
                {forecast.map((day, index) => (
                    <button key={day.date} className="bg-white rounded shadow p-3 text-left hover:bg-blue-100" onClick={() => onSelect(index)}>
                        <div className="flex items-center gap-2">
                            <img src={`http:${day.day.condition.icon}`} alt="icon" className="w-8 h-8" />
                            <div>
                                <h4 className="font-semibold">{day.date}</h4>
                                <p>{day.day.condition.text}</p>
                                <p>{day.day.avgtemp_c}°C / {day.day.avgtemp_f}°F</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}