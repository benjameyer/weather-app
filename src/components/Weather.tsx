import axios from "axios"
import { useEffect, useRef, useState } from "react"

import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import TodayWeather from "./TodayWeather"
import Forecast from "./Forecast"

import type { Weather } from "../util/apiDef"

const API_KEY = import.meta.env.VITE_API_KEY;

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
        })
        .catch(err => {
          console.log(err.response.data.message);
          setErrorAlert(true);
        })
    }
    fetchData();
  }, [API_URL]);

  return (
    <div id="background" className="pt-40 pb-10 sm:pt-32 min-h-screen bg-gray-200 flex flex-col items-center">
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
      {
        weatherData &&
        <>
          <TodayWeather location={weatherData.location} current={weatherData.current} forecast={weatherData.forecast} />
          <Forecast forecast={weatherData.forecast}/>
        </>
        ||
        <div className="h-96 flex justify-center items-center text-3xl">
          <img className="animate-spin w-14 mr-4" src="/sun-icon.png" alt="sun-icon" />
        </div>
      }
    </div>
  )
}

interface WeatherProps {
  country: string,
}
