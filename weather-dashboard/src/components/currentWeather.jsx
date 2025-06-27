export default function currentWeather({ data }) {
    const { location, current } = data;
    return (
        <div className="bg-white p-6 rounded shadow mb-6 text-center">
            <h2 className="text-xl font-bold">{location.name},{location.country}    </h2>
            <p>{current.condition.text}</p>
            <img src={`http:${current.condition.icon}`} alt="condition" className="mx-auto" />
            <p className="text-lg font-bold">{current.temp_c}°C / {current.temp_f}°F </p>

            <div className="mt-4">
                <h3 className="font-semibold mb-2">Hourly Today</h3>
                <div className="grid grid-cols-4 gap-2 text-sm">


                </div>
            </div>

        </div>
    );
}