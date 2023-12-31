import { useEffect, useState } from "react";
import { fetchWeatherData, TemperatureUnits } from "../../utils";
import CurrentWeather from "../../components/CurrentWeather";
import DailyWeather from "../../components/DailyWeather";
import HourlyWeather from "../../components/HourlyWeather";
import SwitchUnitsButton from "../../components/SwitchUnitsButton";
import RefreshButton from "../../components/RefreshButton";
import LoadingScreen from "../LoadingScreen";
import {
  CurrentUnitsType,
  CurrentWeatherType,
  DailyUnitsType,
  DailyWeatherType, HourlyUnitsType,
  HourlyWeatherType
} from "../../utils/Types.tsx";

/*This component works as the main component to display the main page of weather wizard*/
const WeatherView = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>();
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherType>();
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherType>();
  const [currentUnits, setCurrentUnits] = useState<CurrentUnitsType>();
  const [dailyUnits, setDailyUnits] = useState<DailyUnitsType>();
  const [hourlyUnits, setHourlyUnits] = useState<HourlyUnitsType>();
  const [tempUnit, setTempUnit] = useState(TemperatureUnits.CELSIUS);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1150);
  const [longitude, setLongitude] = useState<number>();
  const [latitude, setLatitude] = useState<number>();

  useEffect(() => {
    getLocationInfo();
    fetchData();
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tempUnit, longitude, latitude]);

  const fetchData = async () => {
    /*TODO add type to response*/

    if (!latitude || !longitude) {
      return null;
    }

    try {
      const res = await fetchWeatherData(tempUnit, latitude, longitude);
      setCurrentWeather(res.current);
      setDailyWeather(res.daily);
      setHourlyWeather(res.hourly);
      setCurrentUnits(res.current_units);
      setDailyUnits(res.daily_units);
      setHourlyUnits(res.hourly_units);
    } catch (e) {
      console.log(e);
    }
  };

  const getLocationInfo = () => {
    const location = window.navigator && window.navigator.geolocation;
    if (location) {
      location.getCurrentPosition((position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      });
    }
  };

  return (
    <>
      {!currentWeather || !latitude || !longitude ? (
        <LoadingScreen />
      ) : (
        <div className="h-screen">
          <div className={isMobile ? "flex-col h-1/2" : `flex h-1/4`}>
            {/* Section A (25% width) */}
            <div
              className={
                isMobile
                  ? "pt-1 pl-1 pr-1 pb-0.5 h-1/2"
                  : "w-1/4 pt-1 pl-1 pr-0.5 pb-0.5"
              }
            >
              {/* Content for Section A */}
              {currentWeather && currentUnits && (
                <CurrentWeather
                  currentWeather={currentWeather}
                  currentUnits={currentUnits}
                />
              )}
            </div>

            {/* Section B (75% width) */}
            <div
              className={
                isMobile
                  ? "pt-0.5 pl-1 pr-1 pb-0.5 h-1/2"
                  : "w-3/4 pl-0.5 pt-1 pr-1 pb-0.5"
              }
            >
              {/* Content for Section B */}
              {dailyWeather && dailyUnits && (
                <DailyWeather
                  dailyWeather={dailyWeather}
                  dailyUnits={dailyUnits}
                />
              )}
            </div>
          </div>
          <div
            className={
              isMobile
                ? "pt-0.5 pr-1 pl-1 pb-1 h-1/2"
                : "w-full h-3/4 pr-1 pl-1 pb-1 pt-0.5"
            }
          >
            {/* Content for Section C */}
            {hourlyWeather && hourlyUnits && (
              <HourlyWeather
                hourlyWeather={hourlyWeather}
                hourlyUnits={hourlyUnits}
              />
            )}
            <div className="fixed flex bottom-4 right-4">
              <RefreshButton onClick={fetchData} />
              <SwitchUnitsButton
                onToggle={() => {
                  setTempUnit(
                    tempUnit == TemperatureUnits.CELSIUS
                      ? TemperatureUnits.FAHRENHEIT
                      : TemperatureUnits.CELSIUS,
                  );
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherView;
