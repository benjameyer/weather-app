
export default function TodayWeather({location} : TodaysWeatherProps) {
    return (
        <div className="h-40 mb-10 bg-white flex justify-center items-center">
            <p className="font-bold">weather app - {location}</p>
        </div>
    )
}

interface TodaysWeatherProps {
    location: string
}