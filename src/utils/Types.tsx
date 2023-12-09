/*Current Weather object type*/
export type CurrentWeatherType = {
    time: string;
    interval: number;
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    is_day: number;
};

/*Daily Weather object type*/
export type DailyWeatherType = {
    temperature_2m_max: Array<number>;
    temperature_2m_min: Array<number>;
    time: Array<string>;
    weather_code: Array<number>;
};

/*Hourly Weather object type*/
export type HourlyWeatherType = {
    temperature_2m: Array<number>;
    time: Array<string>;
    wind_speed_10m: Array<number>;
};

/*Current Weather Units object type*/
export type CurrentUnitsType = {
    time: string;
    interval: string;
    temperature_2m: string;
    weather_code: string;
    wind_speed_10m: string;
    is_day: string;
};

/*Daily Weather Units object type*/
export type DailyUnitsType = {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    weather_code: string;
};

/*Hourly Weather Units object type*/
export type HourlyUnitsType = {
    time: string;
    temperature_2m: string;
    wind_speed_10m: string;
};

/*Single day weather object type*/
export type DayWeatherType = {
    time: string;
    tempMax: number;
    tempMin: number;
    weatherCode: number;
    unit: string;
};