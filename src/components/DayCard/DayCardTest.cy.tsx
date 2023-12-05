import DayCard from "./index.tsx";
import {weather} from "../../Data";

describe('DayCard component testing', ()=>{
    it('renders', ()=>{
        cy.mount(<DayCard weather={weather}/>)
        cy.get("div#day-card-weather-desc").should("have.text", "Overcast");
        cy.get("div#day-card-date").should("have.text", "Sat, Dec 2");
        cy.get("div#day-card-min-max-temperature").should("have.text", "L: -10°C H: -5°C");
        cy.get("img").should('have.attr', 'src').should('include','3');
    })
});