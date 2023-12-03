import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {HourlyUnitsType, HourlyWeatherType} from "../../views/WeatherView";

const WeatherChart = ({hourlyWeather, hourlyUnits} : {hourlyWeather : HourlyWeatherType, hourlyUnits : HourlyUnitsType}) => {
    const formattedDates = hourlyWeather.time.map((item) => {
        const parsedDate = new Date(item);

        const options: Intl.DateTimeFormatOptions = {
            month: "short",
            day: "numeric",
        };

        return parsedDate.toLocaleDateString(
            "en-US",
            options,
        );
    });

    const chartOptions = {
        xAxis: {
            categories: formattedDates,
            labels: {
                step: 24,
            },
        },
        series: [
            {
                data: hourlyWeather.temperature_2m,
                name: `Temperature (${hourlyUnits["temperature_2m"]})`,
            },
        ],
        title: {
            text: "Temperature changes",
        },
        chart: {
            type: "area",
        },
    };
    return (
        <>
            <div className="h-full">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                    containerProps={{ style: { height: "100%" } }}
                />
            </div>
        </>
    );

}
export default WeatherChart