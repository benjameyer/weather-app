export interface Weather {
    location: Location,
    current: Current,
    forecast: Forecast,
}

export interface Location {
    country: string,
    lat: number,
    localtime: string,
    localtime_epoch: number,
    lon: number,
    name: string,
    region: string,
    tz_id: string
}

export interface Current {
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
export interface Condition {
    icon: string,
    text: string
}

export interface Forecast {
    forecastday: ForecastDay[]
}
export interface ForecastDay {
    astro: unknown,
    date: string,
    date_epoch: number,
    day: Day,
    hour: Hour[]
}
export interface Day {
    avghumidity: number,
    avgtemp_c: number,
    condition: Condition,
    daily_chance_of_rain: number,
    maxtemp_c: number,
    maxwind_kph: number,
    mintemp_c: number
}
export interface Hour {
    condition: Condition,
    diff_rad: number,
    is_day: number,
    short_rad: number,
    temp_c: number,
    time: string
}