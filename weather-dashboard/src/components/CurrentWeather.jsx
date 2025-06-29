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
        <div className="flex flex-col w-full md:w-2/3 p-4 bg-transparent">
            <div className="bg-gradient-to-r from-zinc-600 to-gray-500 text-white  rounded  mb-5 p-3 ">
                <h3 className="text-lg font-semibold"> Hourly Forecast on {dayData.date}  </h3>
            </div>



            <div className="flex flex-row gap-2 overflow-x-auto p-2" ref={listRef}>
                {dayData.hour.map((hour) => {
                    const hourTime = new Date(hour.time);
                    const isNow = dayIndex === 0 && hourTime.getHours() === currentHour;
                    return (
                        <div key={hour.time_epoch} className={`bg-gradient-to-b from-gray-800 to-gray-500 text-white border-2 flex flex-col items-center justify-between gap-4 p-3 rounded${isNow ? "text-md " : "text-xl"
                            }`}>
                            <div className="text-md">{hour.time.split(" ")[1]}</div>
                            <img src={`https:${hour.condition.icon}`} alt="" className="mx-auto" width={30} />
                            <div className="text-lg font-semibold">{hour.temp_c}°C</div>

                        </div>
                    );
                })}
            </div>


        </div>
    );
}