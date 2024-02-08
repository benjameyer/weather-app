import type { Forecast, Hour } from "../util/apiDef"
import getHour from "../util/getHour"

// this function will receive the current hour, and the data from today and tomorrows 24 hour forecast
// and will return an array of 25 elements of type Hour, containing the data from the next hour to 24 hours later. Ex: from 2:00 am to 2:00 am next day

export default function getNextTwentyFour(hour : string, forecast : Forecast): Hour[] {
    const todaysHours = forecast.forecastday[0].hour;
    const tomorrowsHours = forecast.forecastday[1].hour;
    const hourNow = parseInt(hour.split(':')[0]);
    const nextTwentyFour : Hour[] = []
    for (let index = 0; index < todaysHours.length; index++) {
        const indexHour = parseInt(getHour(todaysHours[index].time).split(':')[0]);
        if (indexHour > hourNow) {
            nextTwentyFour.push(todaysHours[index]);
        }
    }
    for (let index = 0; index < tomorrowsHours.length; index++) {
        const indexHour = parseInt(getHour(tomorrowsHours[index].time).split(':')[0]);
        if (indexHour <= hourNow + 1) {
            nextTwentyFour.push(tomorrowsHours[index]);
        }
    }
    return nextTwentyFour;
}