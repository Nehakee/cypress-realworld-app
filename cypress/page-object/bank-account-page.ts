import Chainable = Cypress.Chainable;

class BankAccountPage {
  assertionBankList(bankName: String): this {
    this.getBankList().should("contain", bankName, { delay: 50 });
    return this;
  }
  clickCreateButton() {
    this.getCreateButton().click();
    return this;
  }
  private getBankList(): Chainable<JQuery> {
    return cy.get('[data-test="bankaccount-list"]');
  }
  private getCreateButton(): Chainable<JQuery> {
    return cy.get('[data-test="bankaccount-new"]');
  }
}

export default new BankAccountPage();
