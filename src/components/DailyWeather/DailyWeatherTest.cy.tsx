import DailyWeather from "./index.tsx";
import {dailyUnits, dailyWeather} from "../../Data";

describe('DailyWeather component testing', ()=>{
    it('renders', ()=>{
        cy.mount(<DailyWeather dailyWeather={dailyWeather} dailyUnits={dailyUnits}/>);
        cy.get('div#daily-weather').find(".day-card").should("have.length",7);
    })
});