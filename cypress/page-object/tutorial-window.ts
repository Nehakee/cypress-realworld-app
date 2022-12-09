import Chainable = Cypress.Chainable;

class tutorialWindow {
  assertionEmptyInput(selector: string, text: string) {
    this.getSelector(selector).find("p").should("contain", text);
    return this;
  }
  assertionLongAccountNumberInput() {
    this.getAccountNumberInputError().should("contain", "Must contain no more than 12 digits");
    return this;
  }
  assertionPlaceholderInput(selector: string, text: string) {
    this.getSelector(selector).find("input").should("have.attr", "placeholder", text);
    return this;
  }
  assertionSaveButton() {
    this.getSaveButton().should("not.be.disabled");
    return this;
  }
  assertionShortBankNameInput() {
    this.getBankNameInputError().should("contain", "Must contain at least 5 characters");
    return this;
  }
  assertionShortAccountNumberInput() {
    this.getAccountNumberInputError().should("contain", "Must contain at least 9 digits");
    return this;
  }
  assertionShortRoutingNumberInput() {
    this.getRoutingNumberInputError().should("contain", "Must contain a valid routing number");
    return this;
  }
  assertionTitle() {
    this.getTitle().should("have.text", "Create Bank Account");
    return this;
  }
  clearInput(selector: string) {
    this.getSelector(selector).clear();
    return this;
  }
  clickInput(selector: string) {
    this.getSelector(selector).find("input").click();
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
  fillAndAssertInput(
    selector: string,
    value: string,
    firstCondition: string,
    secondCondition: string
  ): this {
    this.getSelector(selector)
      .type(value)
      .find("input")
      .should("have.value", value)
      .should("not.contain", firstCondition)
      .and("not.contain", secondCondition);
    return this;
  }
  fillLongBAccountNumberInput(longAccountNumber: string): this {
    this.getAccountNumberInput().type(longAccountNumber, { delay: 50 });
    return this;
  }
  fillShortAccountNumberInput(shortAccountNumber: string): this {
    this.getAccountNumberInput().type(shortAccountNumber, { delay: 50 });
    return this;
  }
  fillShortBankNameInput(shortBankName: string): this {
    this.getBankNameInput().type(shortBankName, { delay: 50 });
    return this;
  }
  fillShortRoutingNumberInput(shortRoutingNumber: string): this {
    this.getRoutingNumberInput().type(shortRoutingNumber, { delay: 50 });
    return this;
  }
  getSelector(selector: string): Chainable<JQuery> {
    return cy.get(`[data-test=${selector}]`);
  }
  private getAccountNumberInput(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-accountNumber-input"]');
  }
  private getAccountNumberInputError(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-accountNumber-input-helper-text"]');
  }
  private getBankNameInput(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-bankName-input"]');
  }
  private getBankNameInputError(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-bankName-input-helper-text"]');
  }
  private getRoutingNumberInput(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-routingNumber-input"]');
  }
  private getRoutingNumberInputError(): Chainable<JQuery> {
    return cy.get('[id="bankaccount-routingNumber-input-helper-text"]');
  }
  private getSaveButton(): Chainable<JQuery> {
    return cy.get('[data-test="bankaccount-submit"]');
  }
  private getTitle(): Chainable<JQuery> {
    return cy.get('[data-test="user-onboarding-dialog-title"');
  }
}
export default new tutorialWindow();
