export const fetchWeatherData = async () => {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=65.01&longitude=25.47&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto");
    return await response.json();
}
