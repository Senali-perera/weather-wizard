import { DailyUnitsType, DailyWeatherType } from "../../views/WeatherView";
import DayCard from "../DayCard";

const DailyWeather = ({
  dailyWeather,
  dailyUnits,
}: {
  dailyWeather: DailyWeatherType;
  dailyUnits: DailyUnitsType;
}) => {
  const { time, temperature_2m_max, temperature_2m_min, weather_code } =
    dailyWeather;
  const newMap = time.map((_, index) => ({
    time: time[index],
    tempMax: temperature_2m_max[index],
    tempMin: temperature_2m_min[index],
    weatherCode: weather_code[index],
    unit: dailyUnits["temperature_2m_max"],
  }));
  return (
    <>
      <div
          id="daily-weather"
          className="rounded-lg shadow-lg bg-white overflow-x-auto flex h-full gap-1">
        {newMap.map((weather) => (
          <DayCard key={weather.time} weather={weather} />
        ))}
      </div>
    </>
  );
};

export default DailyWeather;
