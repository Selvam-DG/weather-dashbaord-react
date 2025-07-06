export default function SearchPanel({ location, setLocation, days, setDays, onSearch }) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); onSearch(); }} className="flex flex-col md:flex-row gap-4 mt-5 mb-6 items-center justify-center">
            <label className="font-semibold">Location: </label>
            <input
                className="border px-4 py-2 rounded w-60"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter Location"
            />
            <label className="font-semibold">Days: </label>
            <input
                type="number"
                className="border px-4 py-2 rounded w-40"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="Days(1-16)"
                min={1}
                max={16}

            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
                Get Forecast

            </button>
        </form>
    );

}