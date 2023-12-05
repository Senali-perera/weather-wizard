import WeatherChart from "../WeatherChart";
import { HourlyUnitsType, HourlyWeatherType } from "../../views/WeatherView";

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
