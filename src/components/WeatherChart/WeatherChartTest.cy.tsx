import WeatherChart from "./index.tsx";
import {hourlyUnits, hourlyWeather} from "../../Data";

describe('WeatherChart component testing', ()=>{
    it('renders', ()=>{
        cy.mount(<WeatherChart hourlyWeather={hourlyWeather} hourlyUnits={hourlyUnits}/>)
        cy.get(".weather-chart").should('be.visible');
    })
});