import {getWeatherInfo} from "../../utils";
import useComponentWidth from "../UseComponentWidth";
import {CurrentUnitsType, CurrentWeatherType} from "../../views/WeatherView";

const CurrentWeather = ({currentWeather, currentUnits}: {currentWeather:CurrentWeatherType, currentUnits:CurrentUnitsType}) => {
    const {componentHeight, componentRef} = useComponentWidth();

    const weatherInfo = getWeatherInfo(currentWeather.weather_code, !!currentWeather.is_day);
    const parsedDateTime: Date = new Date(currentWeather.time); //Get the time parameter

    const optionsDate: Intl.DateTimeFormatOptions = {weekday: 'long'}; //Format week day in long format
    const optionsTime: Intl.DateTimeFormatOptions = {hour: '2-digit', minute: '2-digit', hour12: false}; //Time format

    const formattedDate: string = parsedDateTime.toLocaleDateString('en-US', optionsDate);
    const formattedTime: string = parsedDateTime.toLocaleTimeString('en-US', optionsTime);

    const dateTime: string = `${formattedDate}, ${formattedTime}`;
    return (
        <>
            <div ref={componentRef}
                 className="block bg-white rounded-lg shadow-lg border border-gray-300 h-full p-5">
                <div className="flex h-full justify-center">
                    <div className="justify-center flex flex-col items-center mr-3">
                        <img className="object-fill max-w-[150px] max-h-[150px] w-full h-auto" src={weatherInfo.image}
                             alt=""/>
                        <div
                             style={{fontSize: `${Math.floor(componentHeight / 20)}px`}}>Last Updated</div>
                        <div
                             style={{fontSize: `${Math.floor(componentHeight / 16)}px`}}>{dateTime}</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className={`font-bold`}
                             style={{fontSize: `${Math.floor(componentHeight / 5)}px`}}>{currentWeather["temperature_2m"]}{currentUnits["temperature_2m"]}</div>
                        <div
                             style={{fontSize: `${Math.floor(componentHeight / 10)}px`}}>{weatherInfo.description}</div>
                        {/*<div className={`text-white`} style={{ fontSize: `${Math.floor(componentHeight / 16)}px` }}>H: 35ºC L: 25ºC</div>*/}
                        <div
                             style={{fontSize: `${Math.floor(componentHeight / 15)}px`}}>Wind: {currentWeather.wind_speed_10m}{currentUnits.wind_speed_10m}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CurrentWeather;