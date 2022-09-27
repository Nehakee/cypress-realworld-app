import Chainable = Cypress.Chainable;

class HomePage {
  checkHomePageUrl() {
    cy.url().should("eq", "http://localhost:3000/");
    return this;
  }
}
export default new HomePage();
