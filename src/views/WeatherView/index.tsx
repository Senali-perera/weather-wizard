import {useEffect, useState} from "react";
import {fetchWeatherData} from "../../utils";

type CurrentWeather  = {
    time: string,
    interval: number,
    temperature_2m : number,
    weather_code : number,
    wind_speed_10m: number
}

type DailyWeather = {
    temperature_2m_max: Array<number>,
    temperature_2m_min: Array<number>,
    time: Array<string>,
    weather_code: Array<number>
}

type HourlyWeather = {
    temperature_2m: Array<number>,
    time: Array<string>,
    wind_speed_10m: Array<number>
}

const WeatherView = () => {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();
    const [dailyWeather, setDailyWeather] = useState<DailyWeather>()
    const [hourlyWeather, setHourlyWeather] = useState<HourlyWeather>()

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetchWeatherData();
        /*TODO add type to response*/
        setCurrentWeather(response.current)
        setDailyWeather(response.daily)
        setHourlyWeather(response.hourly)
    }

    return <>
        {dailyWeather?.weather_code}
    </>
}

export default WeatherView