import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {HourlyWeatherFormator} from "../../utils/DateTimeUtils.tsx";
import {HourlyUnitsType, HourlyWeatherType} from "../../utils/Types.tsx";

const WeatherChart = ({
  hourlyWeather,
  hourlyUnits,
}: {
  hourlyWeather: HourlyWeatherType;
  hourlyUnits: HourlyUnitsType;
}) => {
  const formattedDates = hourlyWeather.time.map((item) => {
    return HourlyWeatherFormator(item);
  });

  const chartOptions = {
    xAxis: {
      categories: formattedDates,
      labels: {
        step: 24,
      },
      title: {
        text: "",
      },
    },
    series: [
      {
        data: hourlyWeather.temperature_2m,
        name: `Temperature (${hourlyUnits["temperature_2m"]})`,
        showInLegend: false,
      },
    ],
    title: {
      text: "Temperature changes",
    },
    chart: {
      type: "area",
    },
    yAxis: {
      title: {
        text: "", // Set an empty string to remove y-axis title
      },
    },
  };
  return (
    <>
      <div className="h-full weather-chart">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps={{ style: { height: "100%" } }}
        />
      </div>
    </>
  );
};
export default WeatherChart;
