import { useState } from "react";

const Forecast = ({ data, onDaySelect, selectedDate }) => {
    if (!data || !data.daily){
        return <div className="p-4 text-red-500">Data not available!!!!</div>;
    }
    const [showAll, setShowAll ] = useState(false);
    const forecast = data.daily;
    const daysToShow = showAll? forecast.time.length : 7;
    // console.log('Forecast Data: ', forecast);
  return (
    <div className=" p-4 rounded border-1  shadow-xl">
        <div className="flex justify-between items-center mb-3"> 
            <h2 className='text-2xl font-bold '>Forecast Weather: </h2>
             </div>
        <div className="grid grid-cols-1 gap-3"></div>
        {forecast.time.slice(0, daysToShow).map ((date, idx) => {
            const isSelected = date === selectedDate;
            return (
                <div key={idx} onClick  = {() => onDaySelect(date)} 
                        className={`cursor-pointer p-3 mb-2 rounded border shadow-sm flex${
                        isSelected ? " border-green-300 border-5 shadow-lg" : ""
                    } hover:bg-blue-500`}>
                    <p className=" min-w-[150px] font-semibold ">{ new Date(date).toDateString()}</p>  
                    
                    <p className="min-w-[150px] "> {forecast.temperature_2m_min[idx]}°C / {forecast.temperature_2m_max[idx]}°C  </p>
                    
                    <p>🌧 {forecast.precipitation_sum[idx]} mm</p>

                </div>
            );
        })}
         <button onClick={ () => setShowAll(!showAll) } className="bg-blue-500 text-white p-3 text-sm hover:underline">{showAll? "Show Less": "Show More"}</button>
      

     
    </div>
  );
};

export default Forecast;
