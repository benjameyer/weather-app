import ForecastContainer from "./ForecastContainer"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import type { Forecast } from "../util/apiDef"


export default function Forecast({ forecast }: ForecastProps) {
    return (
        <>
            <div className="w-4/6 text-2xl mb-4">
                <h2>Forecast (2 days)</h2>
            </div>
            <div className="bg-white flex flex-column w-4/6 rounded-lg shadow-md">
                <Carousel className="w-full">
                    <CarouselContent>
                        <CarouselItem>
                            <ForecastContainer forecastday={forecast.forecastday[1]}/>
                        </CarouselItem>
                        <CarouselItem>
                            <ForecastContainer forecastday={forecast.forecastday[2]}/>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}

interface ForecastProps {
    forecast: Forecast
}