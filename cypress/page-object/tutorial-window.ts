import Chainable = Cypress.Chainable;

class tutorialWindow {
  assertionAccountNumberInput() {
    this.getAccountNumberInputWithHelperText()
      .should("not.contain", "Must contain at least 9 digits")
      .and("not.contain", "Must contain no more than 12 digits");
    return this;
  }
  assertionEmptyAccountNumberInput() {
    this.getAccountNumberInputError().should("contain", "Enter a valid bank account number");
    return this;
  }
  assertionShortAccountNumberInput() {
    this.getAccountNumberInputError().should("contain", "Must contain at least 9 digits");
    return this;
  }
  assertionLongAccountNumberInput() {
    this.getAccountNumberInputError().should("contain", "Must contain no more than 12 digits");
    return this;
  }
  assertionBankNameInput() {
    this.getBankNameInputWithHelperText()
      .should("not.contain", "Must contain at least 5 characters")
      .and("not.contain", "Enter a bank name");
    return this;
  }
  assertionEmptyBankNameInput() {
    this.getBankNameInputError().should("contain", "Enter a bank name");
    return this;
  }
  assertionShortBankNameInput() {
    this.getBankNameInputError().should("contain", "Must contain at least 5 characters");
    return this;
  }
  assertionRoutingNumberInput() {
    this.getRoutingNumberInputWithHelperText()
      .should("not.contain", "Enter a valid bank routing number")
      .and("not.contain", "Must contain a valid routing number");
    return this;
  }
  assertionEmptyRoutingNumberInput() {
    this.getRoutingNumberInputError().should("contain", "Enter a valid bank routing number");
    return this;
  }
  assertionShortRoutingNumberInput() {
    this.getRoutingNumberInputError().should("contain", "Must contain a valid routing number");
    return this;
  }
  assertionSaveButton() {
    this.getSaveButton().should("not.be.disabled");
    return this;
  }

  assertionTitle() {
    this.getTitle().should("have.text", "Create Bank Account");
    return this;
  }
  clearBankNameInput() {
    this.getBankNameInput().clear();
    return this;
  }
  clearRoutingNumberInput() {
    this.getRoutingNumberInput().clear();
    return this;
  }
  clearAccountNumberInput() {
    this.getAccountNumberInput().clear();
    return this;
  }
  clickAccountNumberInput() {
    this.getAccountNumberInput().click();
    return this;
  }
  clickBankNameInput() {
    this.getBankNameInput().click();
    return this;
  }
  clickRoutingNumberInput() {
    this.getRoutingNumberInput().click();
    return this;
  }
  clickSaveButton() {
    this.getSaveButton().click();
    return this;
  }
  clickTitle() {
    this.getTitle().click();
    return this;
  }
  dblclickDisabledSaveButton() {
    this.getSaveButton().dblclick().should("be.disabled");
    return this;
  }
  fillAccountNumberInput(accountNumber: string): this {
    this.getAccountNumberInput().type(accountNumber, { delay: 50 });
    return this;
  }
  fillShortAccountNumberInput(shortAccountNumber: string): this {
    this.getAccountNumberInput().type(shortAccountNumber, { delay: 50 });
    return this;
  }
  fillLongBAccountNumberInput(longAccountNumber: string): this {
    this.getAccountNumberInput().type(longAccountNumber, { delay: 50 });
    return this;
  }
  fillBankNameInput(bankName: string): this {
    this.getBankNameInput().type(bankName, { delay: 50 });
    return this;
  }
  fillShortBankNameInput(shortBankName: string): this {
    this.getBankNameInput().type(shortBankName, { delay: 50 });
    return this;
  }
  fillRoutingNumberInput(routingNumber: string): this {
    this.getRoutingNumberInput().type(routingNumber, { delay: 50 });
    return this;
  }
  fillShortRoutingNumberInput(shortRoutingNumber: string): this {
    this.getRoutingNumberInput().type(shortRoutingNumber, { delay: 50 });
    return this;
  }
  placeholderAccountNumberInput() {
    this.getAccountNumberInput().should("have.attr", "placeholder", "Account Number");
    return this;
  }
  placeholderBankNameInput() {
    this.getBankNameInput().should("have.attr", "placeholder", "Bank Name");
    return this;
  }
  placeholderRoutingNumberInput() {
    this.getRoutingNumberInput().should("have.attr", "placeholder", "Routing Number");
    return this;
  }
  private getAccountNumberInput(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-accountNumber-input"]');
  }
  private getAccountNumberInputError(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-accountNumber-input-helper-text"]');
  }
  private getAccountNumberInputWithHelperText(): Chainable<JQuery> {
    return cy.get('[data-test="bankaccount-accountNumber-input"]');
  }
  private getBankNameInput(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-bankName-input"]');
  }
  private getBankNameInputError(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-bankName-input-helper-text"]');
  }
  private getBankNameInputWithHelperText(): Chainable<JQuery> {
    return cy.get('[data-test="bankaccount-bankName-input"]');
  }
  private getRoutingNumberInput(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-routingNumber-input"]');
  }
  private getRoutingNumberInputError(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-routingNumber-input-helper-text"]');
  }
  private getRoutingNumberInputWithHelperText(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-routingNumber-input"]');
  }
  private getSaveButton(): Chainable<JQuery> {
    return cy.get('[data-test="bankaccount-submit"]');
  }
  private getTitle(): Chainable<JQuery> {
    return cy.get('[data-test="user-onboarding-dialog-title"');
  }
}
export default new tutorialWindow();
