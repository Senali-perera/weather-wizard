describe('Weather Wizard', () => {
  it('Complete flow test', () => {
    cy.visit('http://localhost:5173/', fakeLocation(65.01, 25.47));
    cy.get("#current-weather-temperature").contains("°C").should("exist");
    cy.get("#current-weather-temperature").contains("°F").should("not.exist");
    cy.get("#refresh-btn").click();
    cy.get("#unit-toggle").click();
    cy.wait(2000);
    cy.get("#current-weather-temperature").contains("°F").should("exist");
    cy.get("#current-weather-temperature").contains("°C").should("not.exist");
  })
})

function fakeLocation(latitude, longitude) {
  return {
    onBeforeLoad(win) {
      cy.stub(win.navigator.geolocation, "getCurrentPosition", (cb, err) => {
        if (latitude && longitude) {
          return cb({ coords: { latitude, longitude } });
        }
        throw err({ code: 1 });
      });
    }
  };
}