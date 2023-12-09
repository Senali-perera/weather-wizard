import {getWeatherInfo} from "../../utils";
import useComponentWidth from "../UseComponentWidth";
import {CurrentWeatherFormator} from "../../utils/DateTimeUtils.tsx";
import {CurrentUnitsType, CurrentWeatherType} from "../../utils/Types.tsx";

/*
* This component shows the current weather details
*
* Props:
*
* currentWeather: CurrentWeatherType (current weather details),
* currentUnits: CurrentUnitsType (Measurement units in current weather parameters)
*/
const CurrentWeather = ({currentWeather, currentUnits}: {currentWeather:CurrentWeatherType, currentUnits:CurrentUnitsType}) => {
    const {componentHeight, componentRef} = useComponentWidth();

    const weatherInfo = getWeatherInfo(currentWeather.weather_code, !!currentWeather.is_day);
    const formattedDateTime = CurrentWeatherFormator(currentWeather.time);

    return (
        <>
            <div ref={componentRef}
                 className="block bg-white rounded-lg shadow-lg border border-gray-300 h-full p-5">
                <div className="flex h-full justify-center">
                    <div className="justify-center flex flex-col items-center mr-3">
                        <img className="object-fill max-w-[150px] max-h-[150px] w-full h-auto" src={weatherInfo.image}
                             alt=""/>
                        <div
                            id="current-weather-last-updated"
                             style={{fontSize: `${Math.floor(componentHeight / 20)}px`}}>Last Updated</div>
                        <div
                            id="current-weather-datetime"
                             style={{fontSize: `${Math.floor(componentHeight / 16)}px`}}>{formattedDateTime}</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div
                            id="current-weather-temperature"
                            className={`font-bold`}
                             style={{fontSize: `${Math.floor(componentHeight / 5)}px`}}>{currentWeather["temperature_2m"]}{currentUnits["temperature_2m"]}</div>
                        <div
                            id='current-weather-dsc'
                             style={{fontSize: `${Math.floor(componentHeight / 10)}px`}}>{weatherInfo.description}</div>
                        {/*<div className={`text-white`} style={{ fontSize: `${Math.floor(componentHeight / 16)}px` }}>H: 35ºC L: 25ºC</div>*/}
                        <div
                            id="current-weather-wind-speed"
                             style={{fontSize: `${Math.floor(componentHeight / 15)}px`}}>Wind: {currentWeather.wind_speed_10m}{currentUnits.wind_speed_10m}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CurrentWeather;