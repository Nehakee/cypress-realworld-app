import Chainable = Cypress.Chainable;

class UserSettingsPage {
  assertionEmptyInput(selector: string, text: string) {
    this.getIdSelector(selector).should("contain", text);
    return this;
  }
  assertionFirstNameInput(firstName: String): this {
    this.getFirstNameInput().should("have.value", firstName, { delay: 50 });
    return this;
  }
  assertionLastNameInput(lastName: String): this {
    this.getLastNameInput().should("have.value", lastName, { delay: 50 });
    return this;
  }
  assertionPlaceholderInput(selector: string, text: string) {
    this.getSelector(selector).should("have.attr", "placeholder", text);
    return this;
  }
  assertionShortPhoneNumberInput() {
    this.getPhoneNumberInputError().should("have.text", "Phone number is not valid");
    return this;
  }
  assertionWrongEmailInput() {
    this.getEmailInputError().should("contain", "Must contain a valid email address");
    return this;
  }
  checkUserSettingsUrl() {
    cy.url().should("eq", "http://localhost:3000/user/settings");
    return this;
  }
  clearInput(selector: string) {
    this.getSelector(selector).clear();
    return this;
  }
  clickInput(selector: string) {
    this.getSelector(selector).click();
    return this;
  }
  clickSaveButton() {
    this.getSaveButton().click();
    return this;
  }
  fillAndAssertInput(selector: string, value: string): this {
    this.getSelector(selector).type(value).should("have.value", value);
    return this;
  }
  fillShortPhoneNumberInput(shortPhoneNumber: string): this {
    this.getPhoneNumberInput().type(shortPhoneNumber, { delay: 50 });
    return this;
  }
  fillWrongEmailInput(wrongEmailAddress: string): this {
    this.getEmailInput().type(wrongEmailAddress, { delay: 50 });
    return this;
  }
  getSelector(selector: string): Chainable<JQuery> {
    return cy.get(`[data-test=${selector}]`);
  }
  getIdSelector(selector: string): Chainable<JQuery> {
    return cy.get(`[id=${selector}]`);
  }
  private getEmailInput(): Chainable<JQuery> {
    return cy.get('[data-test="user-settings-email-input"]');
  }
  private getEmailInputError(): Chainable<JQuery> {
    return cy.get('[id="user-settings-email-input-helper-text"]');
  }
  private getFirstNameInput(): Chainable<JQuery> {
    return cy.get('[data-test="user-settings-firstName-input"]');
  }
  private getLastNameInput(): Chainable<JQuery> {
    return cy.get('[data-test="user-settings-lastName-input"]');
  }
  private getPhoneNumberInput(): Chainable<JQuery> {
    return cy.get('[id="user-settings-phoneNumber-input"]');
  }
  private getPhoneNumberInputError(): Chainable<JQuery> {
    return cy.get('[id="user-settings-phoneNumber-input-helper-text"]');
  }
  private getSaveButton(): Chainable<JQuery> {
    return cy.get('[data-test="user-settings-submit"]');
  }
}
export default new UserSettingsPage();
