
export default function TodaysWeatherExtra({ vis_km, humidity, wind_kph, pressure_mb }: TodaysWeatherExtraProps) {
    const divClass = 'flex flex-col text-xs py-2 items-center w-1/2 sm:w-1/4';
    return (
        <div className="bg-gray-100 w-full h-40 sm:h-20 rounded-md flex justify-around flex-row flex-wrap sm:flex-nowrap">
            <div className={divClass}>
                <p>Visibility</p>
                <i className="fa-regular fa-eye text-xl mt-1"></i>
                <p>{vis_km} km</p>
            </div>
            <div className={divClass}>
                <p>Humidity</p>
                <i className="fa-solid fa-droplet text-xl mt-1"></i>
                <p>{humidity}%</p>
            </div>
            <div className={divClass}>
                <p>Wind speed</p>
                <i className="fa-solid fa-wind text-xl mt-1"></i>
                <p>{wind_kph} km/h</p>
            </div>
            <div className={divClass}>
                <p>Air pressure</p>
                <img className="w-8" src="https://cdn.icon-icons.com/icons2/2106/PNG/512/barometer_icon_129778.png" alt="" />
                <p>{pressure_mb} hPa</p>
            </div>
        </div>
    )
}

interface TodaysWeatherExtraProps {
    vis_km: number,
    humidity: number,
    wind_kph: number,
    pressure_mb: number
}