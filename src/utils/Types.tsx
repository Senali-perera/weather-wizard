export type CurrentWeatherType = {
    time: string;
    interval: number;
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    is_day: number;
};

export type DailyWeatherType = {
    temperature_2m_max: Array<number>;
    temperature_2m_min: Array<number>;
    time: Array<string>;
    weather_code: Array<number>;
};

export type HourlyWeatherType = {
    temperature_2m: Array<number>;
    time: Array<string>;
    wind_speed_10m: Array<number>;
};

export type CurrentUnitsType = {
    time: string;
    interval: string;
    temperature_2m: string;
    weather_code: string;
    wind_speed_10m: string;
    is_day: string;
};

export type DailyUnitsType = {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    weather_code: string;
};

export type HourlyUnitsType = {
    time: string;
    temperature_2m: string;
    wind_speed_10m: string;
};

export type DayWeatherType = {
    time: string;
    tempMax: number;
    tempMin: number;
    weatherCode: number;
    unit: string;
};