import Chainable = Cypress.Chainable;

class FinishedWindow {
  clickDoneButton() {
    this.getDoneButton().click();
    return this;
  }
  private getDoneButton(): Chainable<JQuery> {
    return cy.get('[data-test="user-onboarding-next"]');
  }
}
export default new FinishedWindow();
