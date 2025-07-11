import { use, useMemo } from "react";
import { weatherCodeToIcon } from "../utils/WeathercodeToIcon";

export default function HourlyForecast({data, selectedDate }){
    const hourly_data = data.hourly;

    const selectedHourly = useMemo( () => {
        const hours = [];
        for (let i = 0; i < hourly_data.time.length; i++){
            if(hourly_data.time[i].startsWith(selectedDate)){
                hours.push({
                    time: hourly_data.time[i],
                    temp : hourly_data.temperature_2m[i],
                    weatherCode : hourly_data.weathercode[i],
                });
            }
        }
        return hours;

    }, [hourly_data, selectedDate]);
    
    if(!selectedDate || !selectedHourly.length){
        return <div className="bg-white p-4 rounded shadow">Select a day to view horly forecast.</div>
    }


    return ( 
        <div className="min-h-50  rounded  mb-5 p-3 border-1">
            <h1 className="text-2xl font-bold mb-3" >Hourly Weather Forecast for { new Date(selectedDate).toLocaleDateString()}</h1>
            <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-blue-500 pb-2 px-2">
                {selectedHourly.map( (hour, idx) => (
                    <div key={idx} className="min-w-[100px] flex-shrink-0 p-3  rounded  shadow-md text-center">
                        <p className="text-sm font-semibold"> {new Date(hour.time).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                        </p>
                        <div className="text-3xl">{weatherCodeToIcon(hour.weatherCode)}</div>
                        <p className="text-lg ">{hour.temp.toFixed(1)}°C</p>


                    </div>
                ))}

            </div>

        </div>
    );

}