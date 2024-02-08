import type { ForecastDay } from "../util/apiDef"

import { dayNames } from "../util/dayNames"

export default function ForecastContainer({ forecastday }: ForecastContainer) {
    const divClass = "flex justify-between text-xs sm:text-sm items-center h-1/3 px-5"
    return (
        <div className="px-8 h-96 lg:h-52 p-4 bg-white flex flex-col lg:flex-row justify-center items-start rounded-lg">
            <div className="lg:w-1/2">
                <h2 className="font-bold text-3xl mt-2 mb-4">{dayNames[(new Date(forecastday.hour[1].time)).getDay()]}</h2>
                <div className="h-3/6 flex flex-col justify-center">
                    <div className="flex justify-center">
                        <img src={forecastday.day.condition.icon} className="ml-2 w-14" alt={forecastday.day.condition.text} />
                        <h2 className="text-6xl text-center">{Math.round(forecastday.day.avgtemp_c)}°</h2>
                    </div>
                    <p className="text-lg text-center">
                        <i className="fa-solid fa-arrow-down text-blue-600 text-sm pr-2"></i>
                        {Math.round(forecastday.day.mintemp_c)}°
                        <i className="fa-solid fa-arrow-up text-red-600 text-sm px-2"></i>
                        {Math.round(forecastday.day.maxtemp_c)}°
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 mt-3 lg:mt-0">
                <div className="bg-gray-100 w-full h-44 rounded-md flex justify-around flex-col">
                    <div className={divClass}>
                        <p>Humidity</p>
                        <i className="fa-solid fa-droplet text-xl mt-1 px-1"></i>
                        <p className="text-right">{forecastday.day.avghumidity}%</p>
                    </div>
                    <div className={divClass}>
                        <p>Wind speed (Max)</p>
                        <i className="fa-solid fa-wind text-xl mt-1 px-1"></i>
                        <p className="text-right">{forecastday.day.maxwind_kph} km/h</p>
                    </div>
                    <div className={divClass}>
                        <p>Chance of rain</p>
                        <i className="fa-solid fa-cloud-rain text-xl mt-1 px-1"></i>
                        <p className="text-right">{forecastday.day.daily_chance_of_rain}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface ForecastContainer {
    forecastday: ForecastDay
}