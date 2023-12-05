import HourlyWeather from "./index.tsx";
import {hourlyUnits, hourlyWeather} from "../../Data";

describe("HourlyWeather component testing", () => {
  it('renders', ()=>{
    cy.mount(<HourlyWeather hourlyWeather={hourlyWeather} hourlyUnits={hourlyUnits} />
    );
    cy.get("div#hourly-weather").find(".weather-chart").should("exist");
  })
});
