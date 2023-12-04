export const fetchWeatherData = async (
  tempUnit: TemperatureUnits = TemperatureUnits.CELSIUS,
) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=65.01&longitude=25.47&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&temperature_unit=${tempUnit}`,
  );
  return await response.json();
};

export enum TemperatureUnits {
  CELSIUS = "celsius",
  FAHRENHEIT = "fahrenheit",
}

//Clear Sky Day and Night
import ClearDayImage from "../assets/Day/0.png";
import ClearNightImage from "../assets/Night/0.png";

//Mostly Clear Sky Day and Night
import MostlyClearDayImage from "../assets/Day/1.png";
import MostlyClearNightImage from "../assets/Night/1.png";

//Partly Cloudy Sky Day and Night
import PartlyCloudyDayImage from "../assets/Day/2.png";
import PartlyCloudyNightImage from "../assets/Night/2.png";

//Overcast Sky Day and Night
import OvercastDayImage from "../assets/Day/3.png";
import OvercastNightImage from "../assets/Night/3.png";

//Mist Day and Night
import MistDayImage from "../assets/Day/45.png";
import MistNightImage from "../assets/Night/45.png";

//Fog Day and Night
import FogDayImage from "../assets/Day/48.png";
import FogNightImage from "../assets/Night/48.png";

//Light Drizzle Day and Night
import LightDrizzleDayImage from "../assets/Day/51.png";
import LightDrizzleNightImage from "../assets/Night/51.png";

//Moderate Drizzle Day and Night
import ModerateDrizzleDayImage from "../assets/Day/53.png";
import ModerateDrizzleNightImage from "../assets/Night/53.png";

//Heavy Drizzle Day and Night
import HeavyDrizzleDayImage from "../assets/Day/55.png";
import HeavyDrizzleNightImage from "../assets/Night/55.png";

//Light Freezing Drizzle Day and Night
import LightFreezingDrizzleDayImage from "../assets/Day/56.png";
import LightFreezingDrizzleNightImage from "../assets/Night/56.png";

//Heavy Freezing Drizzle Day and Night
import HeavyFreezingDrizzleDayImage from "../assets/Day/57.png";
import HeavyFreezingDrizzleNightImage from "../assets/Night/57.png";

//Slight Rain Day and Night
import SlightRainDayImage from "../assets/Day/61.png";
import SlightRainNightImage from "../assets/Night/61.png";

//Moderate Rain Day and Night
import ModerateRainDayImage from "../assets/Day/63.png";
import ModerateRainNightImage from "../assets/Night/63.png";

//Heavy Rain Day and Night
import HeavyRainDayImage from "../assets/Day/65.png";
import HeavyRainNightImage from "../assets/Night/65.png";

//Light Freezing Rain Day and Night
import LightFreezingRainDayImage from "../assets/Day/66.png";
import LightFreezingRainNightImage from "../assets/Night/66.png";

//Heavy Freezing Rain Day and Night
import HeavyFreezingRainDayImage from "../assets/Day/67.png";
import HeavyFreezingRainNightImage from "../assets/Night/67.png";

//Slight Snow Day and Night
import SlightSnowDayImage from "../assets/Day/71.png";
import SlightSnowNightImage from "../assets/Night/71.png";

//Moderate Snow Day and Night
import ModerateSnowDayImage from "../assets/Day/73.png";
import ModerateSnowNightImage from "../assets/Night/73.png";

//Heavy Snow Day and Night
import HeavySnowDayImage from "../assets/Day/75.png";
import HeavySnowNightImage from "../assets/Night/75.png";

//Snow Grains Day and Night
import SnowGrainsDayImage from "../assets/Day/77.png";
import SnowGrainsNightImage from "../assets/Night/77.png";

//Slight Rain Showers Day and Night
import SlightRainShowersDayImage from "../assets/Day/80.png";
import SlightRainShowersNightImage from "../assets/Night/80.png";

//Moderate Rain Showers Day and Night
import ModerateRainShowersDayImage from "../assets/Day/81.png";
import ModerateRainShowersNightImage from "../assets/Night/81.png";

//Violent Rain Showers Day and Night
import ViolentRainShowersDayImage from "../assets/Day/82.png";
import ViolentRainShowersNightImage from "../assets/Night/82.png";

//Slight Snow Showers Day and Night
import SlightSnowShowersDayImage from "../assets/Day/85.png";
import SlightSnowShowersNightImage from "../assets/Night/85.png";

//Heavy Snow Showers Day and Night
import HeavySnowShowersDayImage from "../assets/Day/86.png";
import HeavySnowShowersNightImage from "../assets/Night/86.png";

//Thunderstorm Day and Night
import ThunderstormDayImage from "../assets/Day/95.png";
import ThunderstormNightImage from "../assets/Night/95.png";

//Slight Thunderstorm Hail Day and Night
import SlightThunderstormHailDayImage from "../assets/Day/96.png";
import SlightThunderstormHailNightImage from "../assets/Night/96.png";

//Heavy Thunderstorm Hail Day and Night
import HeavyThunderstormHailDayImage from "../assets/Day/99.png";
import HeavyThunderstormHailNightImage from "../assets/Night/99.png";

export enum WeatherCodes {
  CLEAR = 0,
  MOSTLY_CLEAR = 1,
  PARTLY_CLOUDY = 2,
  OVERCAST = 3,
  MIST = 45,
  FOG = 48,
  LIGHT_DRIZZLE = 51,
  MODERATE_DRIZZLE = 53,
  HEAVY_DRIZZLE = 55,
  LIGHT_FREEZING_DRIZZLE = 56,
  HEAVY_FREEZING_DRIZZLE = 57,
  SLIGHT_RAIN = 61,
  MODERATE_RAIN = 63,
  HEAVY_RAIN = 65,
  LIGHT_FREEZING_RAIN = 66,
  HEAVY_FREEZING_RAIN = 67,
  SLIGHT_SNOW = 71,
  MODERATE_SNOW = 73,
  HEAVY_SNOW = 75,
  SNOW_GRAINS = 77,
  SLIGHT_RAIN_SHOWERS = 80,
  MODERATE_RAIN_SHOWERS = 81,
  VIOLENT_RAIN_SHOWERS = 82,
  SLIGHT_SNOW_SHOWERS = 85,
  HEAVY_SNOW_SHOWERS = 86,
  THUNDERSTORM = 95,
  SLIGHT_THUNDERSTORM_HAIL = 96,
  HEAVY_THUNDERSTORM_HAIL = 99,
}

export const getWeatherInfo = (weatherCode: number, isDay: boolean = true) => {
  switch (weatherCode) {
    case WeatherCodes.CLEAR: {
      return {
        weatherCode,
        description: "Clear",
        image: isDay ? ClearDayImage : ClearNightImage,
      };
    }
    case WeatherCodes.MOSTLY_CLEAR: {
      return {
        weatherCode,
        description: "Mostly Clear",
        image: isDay ? MostlyClearDayImage : MostlyClearNightImage,
      };
    }
    case WeatherCodes.PARTLY_CLOUDY: {
      return {
        weatherCode,
        description: "Partly Cloudy",
        image: isDay ? PartlyCloudyDayImage : PartlyCloudyNightImage,
      };
    }
    case WeatherCodes.OVERCAST: {
      return {
        weatherCode,
        description: "Overcast",
        image: isDay ? OvercastDayImage : OvercastNightImage,
      };
    }
    case WeatherCodes.MIST: {
      return {
        weatherCode,
        description: "Mist",
        image: isDay ? MistDayImage : MistNightImage,
      };
    }
    case WeatherCodes.FOG: {
      return {
        weatherCode,
        description: "Fog",
        image: isDay ? FogDayImage : FogNightImage,
      };
    }
    case WeatherCodes.LIGHT_DRIZZLE: {
      return {
        weatherCode,
        description: "Light Drizzle",
        image: isDay ? LightDrizzleDayImage : LightDrizzleNightImage,
      };
    }
    case WeatherCodes.MODERATE_DRIZZLE: {
      return {
        weatherCode,
        description: "Moderate Drizzle",
        image: isDay ? ModerateDrizzleDayImage : ModerateDrizzleNightImage,
      };
    }
    case WeatherCodes.HEAVY_DRIZZLE: {
      return {
        weatherCode,
        description: "Heavy Drizzle",
        image: isDay ? HeavyDrizzleDayImage : HeavyDrizzleNightImage,
      };
    }
    case WeatherCodes.LIGHT_FREEZING_DRIZZLE: {
      return {
        weatherCode,
        description: "Freezing Drizzle",
        image: isDay
          ? LightFreezingDrizzleDayImage
          : LightFreezingDrizzleNightImage,
      };
    }
    case WeatherCodes.HEAVY_FREEZING_DRIZZLE: {
      return {
        weatherCode,
        description: "Freezing Drizzle",
        image: isDay
          ? HeavyFreezingDrizzleDayImage
          : HeavyFreezingDrizzleNightImage,
      };
    }
    case WeatherCodes.SLIGHT_RAIN: {
      return {
        weatherCode,
        description: "Slight Rain",
        image: isDay ? SlightRainDayImage : SlightRainNightImage,
      };
    }
    case WeatherCodes.MODERATE_RAIN: {
      return {
        weatherCode,
        description: "Rain",
        image: isDay ? ModerateRainDayImage : ModerateRainNightImage,
      };
    }
    case WeatherCodes.HEAVY_RAIN: {
      return {
        weatherCode,
        description: "Heavy Rain",
        image: isDay ? HeavyRainDayImage : HeavyRainNightImage,
      };
    }
    case WeatherCodes.LIGHT_FREEZING_RAIN: {
      return {
        weatherCode,
        description: "Freezing Rain",
        image: isDay ? LightFreezingRainDayImage : LightFreezingRainNightImage,
      };
    }
    case WeatherCodes.HEAVY_FREEZING_RAIN: {
      return {
        weatherCode,
        description: "Freezing Rain",
        image: isDay ? HeavyFreezingRainDayImage : HeavyFreezingRainNightImage,
      };
    }
    case WeatherCodes.SLIGHT_SNOW: {
      return {
        weatherCode,
        description: "Slight Snow",
        image: isDay ? SlightSnowDayImage : SlightSnowNightImage,
      };
    }
    case WeatherCodes.MODERATE_SNOW: {
      return {
        weatherCode,
        description: "Snow",
        image: isDay ? ModerateSnowDayImage : ModerateSnowNightImage,
      };
    }
    case WeatherCodes.HEAVY_SNOW: {
      return {
        weatherCode,
        description: "Heavy Snow",
        image: isDay ? HeavySnowDayImage : HeavySnowNightImage,
      };
    }
    case WeatherCodes.SNOW_GRAINS: {
      return {
        weatherCode,
        description: "Snow Grains",
        image: isDay ? SnowGrainsDayImage : SnowGrainsNightImage,
      };
    }
    case WeatherCodes.SLIGHT_RAIN_SHOWERS: {
      return {
        weatherCode,
        description: "Rain Showers",
        image: isDay ? SlightRainShowersDayImage : SlightRainShowersNightImage,
      };
    }
    case WeatherCodes.MODERATE_RAIN_SHOWERS: {
      return {
        weatherCode,
        description: "Rain Showers",
        image: isDay
          ? ModerateRainShowersDayImage
          : ModerateRainShowersNightImage,
      };
    }
    case WeatherCodes.VIOLENT_RAIN_SHOWERS: {
      return {
        weatherCode,
        description: "Rain Showers",
        image: isDay
          ? ViolentRainShowersDayImage
          : ViolentRainShowersNightImage,
      };
    }
    case WeatherCodes.SLIGHT_SNOW_SHOWERS: {
      return {
        weatherCode,
        description: "Snow Showers",
        image: isDay ? SlightSnowShowersDayImage : SlightSnowShowersNightImage,
      };
    }
    case WeatherCodes.HEAVY_SNOW_SHOWERS: {
      return {
        weatherCode,
        description: "Snow Showers",
        image: isDay ? HeavySnowShowersDayImage : HeavySnowShowersNightImage,
      };
    }
    case WeatherCodes.THUNDERSTORM: {
      return {
        weatherCode,
        description: "Thunderstorm",
        image: isDay ? ThunderstormDayImage : ThunderstormNightImage,
      };
    }
    case WeatherCodes.SLIGHT_THUNDERSTORM_HAIL: {
      return {
        weatherCode,
        description: "Thunderstorm Hail",
        image: isDay
          ? SlightThunderstormHailDayImage
          : SlightThunderstormHailNightImage,
      };
    }
    case WeatherCodes.HEAVY_THUNDERSTORM_HAIL: {
      return {
        weatherCode,
        description: "Thunderstorm Hail",
        image: isDay
          ? HeavyThunderstormHailDayImage
          : HeavyThunderstormHailNightImage,
      };
    }
    default: {
      return { weatherCode, description: "Invalid", image: ClearDayImage };
    }
  }
};
