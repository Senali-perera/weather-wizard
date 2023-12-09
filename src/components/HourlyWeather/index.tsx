import WeatherChart from "../WeatherChart";
import {HourlyUnitsType, HourlyWeatherType} from "../../utils/Types.tsx";

/*Intro: This component shows the hourly details of a week
* Props: hourlyWeather: HourlyWeatherType (Array of hourly weather details of a week)
*        hourlyUnits: HourlyUnitsType (Measurement units of HourlyWeatherType parameters)*/
const HourlyWeather = ({
  hourlyWeather,
  hourlyUnits,
}: {
  hourlyWeather: HourlyWeatherType;
  hourlyUnits: HourlyUnitsType;
}) => {
  return (
    <>
      <div
          id="hourly-weather"
          className="block rounded-lg bg-white shadow-lg border border-gray-300 h-full">
        <WeatherChart hourlyWeather={hourlyWeather} hourlyUnits={hourlyUnits} />
      </div>
    </>
  );
};
export default HourlyWeather;
