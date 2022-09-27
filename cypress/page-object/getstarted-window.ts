import Chainable = Cypress.Chainable;

class GetStartedWindow {
  clickNextButton() {
    this.getNextButton().click();
    return this;
  }
  private getNextButton(): Chainable<JQuery> {
    return cy.get('[data-test="user-onboarding-next"]');
  }
}
export default new GetStartedWindow();
