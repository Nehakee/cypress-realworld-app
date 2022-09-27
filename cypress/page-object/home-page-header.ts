import Chainable = Cypress.Chainable;

class HomePageHeader {
  assertionHomePageLogo() {
    this.getHomePageLogo().should("be.visible");
    return this;
  }
  private getHomePageLogo(): Chainable<JQuery> {
    return cy.get('[data-test="app-name-logo"]');
  }
}
export default new HomePageHeader();
