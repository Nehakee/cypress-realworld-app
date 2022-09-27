import Chainable = Cypress.Chainable;

class CreateBankAccountPage {
  checkCreateBankAccountUrl() {
    cy.url().should("eq", "http://localhost:3000/bankaccounts/new");
    return this;
  }
}

export default new CreateBankAccountPage();
