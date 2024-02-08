import type { Location, Current, Forecast } from "../util/apiDef"
import getHour from "../util/getHour"
import NextTwentyFour from "./NextTwentyFour"

import { dayNames } from "../util/dayNames"
import TodaysWeatherExtra from "./TodayWeatherExtra"

export default function TodayWeather({ location, current, forecast }: TodaysWeatherProps) {
    return (
        <div className="shadow-md lg:h-96 w-11/12 lg:w-4/6 mb-10 bg-white p-8 rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
                <h2 className="font-bold text-5xl mb-4">{dayNames[(new Date(location.localtime)).getDay()]}</h2>
                <h4 className="font-semibold text-xl"><i className="fa-solid fa-location-dot"></i> {location.name}, {location.country}</h4>
                <div className="flex items-center mt-2">
                    <i className="font-semibold fa-regular fa-clock mr-1 pt-0.5"></i>
                    <h3 className="text-2xl">{getHour(location.localtime)}</h3>
                </div>
                <div className="h-3/6 flex flex-col justify-center">
                    <div className="flex justify-center">
                        <img src={current.condition.icon} className="ml-2 w-20" alt={current.condition.text} />
                        <h2 className="text-7xl text-center">{Math.round(current.temp_c)}°</h2>
                    </div>
                    <p className="text-xl text-center">
                        <i className="fa-solid fa-arrow-down text-blue-600 text-sm pr-2"></i>
                        {Math.round(forecast.forecastday[0].day.mintemp_c)}°
                        <i className="fa-solid fa-arrow-up text-red-600 text-sm px-2"></i>
                        {Math.round(forecast.forecastday[0].day.maxtemp_c)}°
                    </p>
                    <h4 className="text-center">Feels like {Math.round(current.feelslike_c)}°</h4>
                </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2">
                <TodaysWeatherExtra vis_km={current.vis_km} humidity={current.humidity} wind_kph={current.wind_kph} pressure_mb={current.pressure_mb} />
                <NextTwentyFour hour={getHour(location.localtime)} forecast={forecast} />
            </div>
        </div>
    )
}

interface TodaysWeatherProps {
    location: Location,
    current: Current,
    forecast: Forecast
}