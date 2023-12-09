import useComponentWidth from "../UseComponentWidth";
import { getWeatherInfo } from "../../utils";
import {DailyWeatherFormator} from "../../utils/DateTimeUtils.tsx";
import {DayWeatherType} from "../../utils/Types.tsx";

const DayCard = ({ weather }: { weather: DayWeatherType }) => {
  const { componentWidth, componentRef } = useComponentWidth();

  const formattedDate = DailyWeatherFormator(weather.time)

  const weatherData = getWeatherInfo(weather.weatherCode); // Get the weather code data

  return (
    <>
      <div
        data-testid="todo-1"
        ref={componentRef}
        className={`min-w-[120px] bg-white shadow-lg border border-gray-300 flex-1 rounded-lg flex flex-col justify-evenly day-card`}
      >
        <div
            id="day-card-date"
          className="text-center"
          style={{ fontSize: `${Math.floor(componentWidth / 10)}px` }}
        >
          {formattedDate}
        </div>
        <div className="justify-center flex flex-col items-center mt-1">
          <img
            className="object-fill max-w-[150px] max-h-[150px] w-[70%] h-auto"
            src={weatherData.image}
            alt=""
          />
        </div>
        <div
            id="day-card-weather-desc"
          className={`text-center`}
          style={{ fontSize: `${Math.floor(componentWidth / 10)}px` }}
        >
          {weatherData.description}
        </div>
        <div
            id="day-card-min-max-temperature"
          className={`text-center`}
          style={{ fontSize: `${Math.floor(componentWidth / 12)}px` }}
        >
          L: {weather.tempMin}
          {weather.unit} H: {weather.tempMax}
          {weather.unit}
        </div>
      </div>
    </>
  );
};

export default DayCard;
