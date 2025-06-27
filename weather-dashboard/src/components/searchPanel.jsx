export default function ({ location, setLocation, days, setDays, onSearch }) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); onSearch(); }} className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-center">
            <input
                className="border px-4 py-2 rounded w-60"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter Location"
            />
            <input
                type="number"
                className="border px-4 py-2 rounded w-40"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="Days(1-7)"
                min={1}
                max={7}

            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
                Get Forecast

            </button>
        </form>
    );

}