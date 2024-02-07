import axios from "axios"
import { useEffect, useRef, useState } from "react"

import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import TodayWeather from "./TodayWeather"
import ForecastContainer from "./ForecastContainer"

const API_KEY = import.meta.env.VITE_API_KEY;


interface Weather {
  location: Location,
  current: Current,
  forecast: Forecast,
}

interface Location {
  country: string,
  lat: number,
  localtime: string,
  localtime_epoch: number,
  lon: number,
  name: string,
  region: string,
  tz_id: string
}

interface Current {
  condition: Condition,
  feelslike_c: number,
  gust_kph: number,
  humidity: number,
  is_day: number,
  last_updated: string,
  last_updated_epoch: number,
  pressure_mb: number,
  temp_c: number,
  vis_km: number,
  wind_kph: number
}
interface Condition {
  icon: string,
  text: string
}

interface Forecast {
  forecastday: ForecastDay[]
}
interface ForecastDay {
  astro: unknown,
  date: string,
  date_epoch: number,
  day: Day,
  hour: Hour[]
}
interface Day {
  avghumidity: number,
  avgtemp_c: number,
  condition: Condition,
  daily_chance_of_rain: number,
  maxtemp_c: number,
  maxwind_kph: number,
  mintemp_c: number
}
interface Hour {
  condition: Condition,
  diff_rad: number,
  is_day: number,
  short_rad: number,
  temp_c: number,
  time: string
}

export default function Weather({ country }: WeatherProps) {

  const [weatherData, setWeatherData] = useState<Weather>();
  const [errorAlert, setErrorAlert] = useState<boolean>(false);

  const errorDiv = useRef<HTMLDivElement>(null)

  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${country}&days=3&aqi=no&alerts=no`;

  useEffect(() => {
    setErrorAlert(false);
    const fetchData = async () => {
      await axios.get(API_URL)
        .then(res => {
          setWeatherData(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err.response.data.message);
          setErrorAlert(true);
        })
    }
    fetchData();
  }, [API_URL]);

  return (
    <div id="background" className="pt-40 sm:pt-32 min-h-screen bg-gray-200 flex flex-col items-center">
      {(errorAlert === true) && (
        <div ref={errorDiv} className="transition-all absolute bg-white rounded-xl top-4 error-alert">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Try Again</AlertTitle>
            <AlertDescription>
              No matching location found.
            </AlertDescription>
          </Alert>
        </div>
        )}
      <TodayWeather location={weatherData?.location.name as string} />
      <ForecastContainer />
      <ForecastContainer />
      <ForecastContainer />
    </div>
  )
}

interface WeatherProps {
  country: string
}
