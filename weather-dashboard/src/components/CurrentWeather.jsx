import { useEffect, useRef } from "react";

export default function CurrentWeather({ data, dayIndex = 0 }) {
    const listRef = useRef(null);
    const dayData = data[dayIndex];
    const now = new Date();
    const currentHour = now.getHours();
    useEffect(() => {
        if (listRef.current) {
            const activeItem = listRef.current.querySelector(".current-hour");
            if (activeItem) {
                activeItem.scrollIntoView({ behavior: "smooth", block: "center" })
            }
        }
    }, [dayIndex])

    return (
        <div className="w-full md:w-2/3 p-4 overflow-y-auto border rounded bg-yellow-200">
            <h3 className="text-lg font-semibold">{dayData.date}- Hourly Forecast    </h3>
            <div className="flex flex-col gap-2 " ref={listRef}>
                {dayData.hour.map((hour) => {
                    const hourTime = new Date(hour.time);
                    const isNow = dayIndex === 0 && hourTime.getHours() === currentHour;
                    return (
                        <div key={hour.time_epoch} className={`flex items-center justify-between gap-4 p-3 rounded${isNow ? "bg-blue-100 font-bold current-hour" : "bg-gray-5ß"
                            }`}>
                            <div className="text-sm">{hour.time.split(" ")[1]}</div>
                            <img src={`https:${hour.condition.icon}`} alt="" className="mx-auto" width={30} />
                            <div>{hour.temp_c}°C</div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}