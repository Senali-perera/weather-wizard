import CurrentWeather from "./index.tsx";
import {currentUnits, currentWeather} from "../../Data";
import {getWeatherInfo} from "../../utils";
import {CurrentWeatherFormator} from "../../utils/DateTimeUtils.tsx";

describe("CurrentWeather component testing", ()=>{
    it('renders', ()=>{
        cy.mount(<CurrentWeather currentWeather={currentWeather} currentUnits={currentUnits}/>);
        cy.get('div#current-weather-temperature').should("have.text",`${currentWeather.temperature_2m}${currentUnits.temperature_2m}`);
        cy.get('div#current-weather-dsc').should("have.text",`${getWeatherInfo(currentWeather.weather_code, !!currentWeather.is_day).description}`);
        cy.get('div#current-weather-wind-speed').should("have.text", `Wind: ${currentWeather.wind_speed_10m}${currentUnits.wind_speed_10m}`);
        cy.get('div#current-weather-last-updated').should("have.text", "Last Updated");
        cy.get('div#current-weather-datetime').should('have.text', `${CurrentWeatherFormator(currentWeather.time)}`);
        cy.get('img').should('have.attr','src').should('include','3');
    })
})