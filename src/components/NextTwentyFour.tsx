import { useEffect, useState } from "react";
import type { Forecast, Hour } from "../util/apiDef"
import getNextTwentyFour from "../util/getNextTwentyFour"
import getHour from "../util/getHour"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function NextTwentyFour({ hour, forecast }: NextTwentyFourProps) {
    const [nextTwFourForecast, setNextTwFourForecast] = useState<Hour[]>();

    useEffect(() => {
        setNextTwFourForecast(getNextTwentyFour(hour, forecast));
    }, [hour, forecast])

    return ( 
        <ScrollArea className="bg-slate-100 mt-4 h-56 flex flex-col rounded-md">
            {nextTwFourForecast && nextTwFourForecast.map((nextHour, index) =>
                <div key={index} className={`bg-blue-100 flex py-4 px-6 justify-between items-center ${index < 24? 'border-b border-blue-200' : ''}`}>
                    <p className="font-semibold text-lg">{getHour(nextHour.time)}</p>
                    <div className="flex flex-col items-center">
                        <img className="w-10" src={nextHour.condition.icon} alt={nextHour.condition.text} />
                        <p className="text-xs hidden sm:block">{nextHour.condition.text}</p>
                    </div>
                    <p className="font-semibold text-lg">{nextHour.temp_c}°</p>
                </div>
            )}
        </ScrollArea>
    )
}

interface NextTwentyFourProps {
    hour: string,
    forecast: Forecast
}