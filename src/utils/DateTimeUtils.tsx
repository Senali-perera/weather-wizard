/*Current Weather time parameter is formatted to 'Weekday, Hour:Minute' */
export const CurrentWeatherFormator=(timeStamp: string)=>{
  const parsedDateTime: Date = new Date(timeStamp); //Get the time parameter

  const optionsDate: Intl.DateTimeFormatOptions = { weekday: "long" }; //Format week day in long format
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }; //Time format

  const formattedDate: string = parsedDateTime.toLocaleDateString(
    "en-US",
    optionsDate,
  );
  const formattedTime: string = parsedDateTime.toLocaleTimeString(
    "en-US",
    optionsTime,
  );

  const dateTime: string = `${formattedDate}, ${formattedTime}`;
  return dateTime;
}

/*Daily Weather datetime parameter is formatted to 'Short-Weekday, Short-Month Day' */
export const DailyWeatherFormator=(timeStamp: string)=>{
    const parsedDate = new Date(timeStamp);

    const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
    }; 
    
    let formattedDate: string;
    if (parsedDate.toDateString() === new Date().toDateString()) {
        formattedDate = "Today";
    } else {
        formattedDate = parsedDate.toLocaleDateString("en-US", options);
    }
    return formattedDate
}

/*Hourly Weather datetime parameter is formatted to 'Short-Month Day/ */
export const HourlyWeatherFormator = (timeStamp: string)=>{
    const parsedDate = new Date(timeStamp);

    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
    };

    return parsedDate.toLocaleDateString("en-US", options);
}