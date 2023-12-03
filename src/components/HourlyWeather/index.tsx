import WeatherChart from "../WeatherChart";
import {HourlyUnitsType, HourlyWeatherType} from "../../views/WeatherView";

const HourlyWeather =({hourlyWeather, hourlyUnits} : {hourlyWeather : HourlyWeatherType, hourlyUnits : HourlyUnitsType}) =>{
    return (
        <>
            <div
                className="block rounded-lg bg-white dark:bg-neutral-700 h-full">
                <WeatherChart hourlyWeather={hourlyWeather} hourlyUnits={hourlyUnits} />
            </div>
        </>
    )
}
export default HourlyWeather