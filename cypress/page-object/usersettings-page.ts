import Chainable = Cypress.Chainable;

class UserSettingsPage {
  assertionEmptyEmailInput() {
    this.getEmailInputError().should("contain", "Enter an email address");
    return this;
  }
  assertionWrongEmailInput() {
    this.getEmailInputError().should("contain", "Must contain a valid email address");
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
  assertionEmptyPhoneNumberInput() {
    this.getPhoneNumberInputError().should("have.text", "Enter a phone number");
    return this;
  }
  assertionShortPhoneNumberInput() {
    this.getPhoneNumberInputError().should("have.text", "Phone number is not valid");
    return this;
  }

  checkUserSettingsUrl() {
    cy.url().should("eq", "http://localhost:3000/user/settings");
    return this;
  }
  clickEmailInput() {
    this.getEmailInput().click();
    return this;
  }
  clickSaveButton() {
    this.getSaveButton().click();
    return this;
  }
  clearEmailInput() {
    this.getEmailInput().clear();
    return this;
  }
  clearPhoneNumberInput() {
    this.getPhoneNumberInput().clear();
    return this;
  }
  fillEmailInput(emailAddress: string): this {
    this.getEmailInput().type(emailAddress, { delay: 50 });
    return this;
  }
  fillWrongEmailInput(wrongEmailAddress: string): this {
    this.getEmailInput().type(wrongEmailAddress, { delay: 50 });
    return this;
  }
  fillPhoneNumberInput(phoneNumber: string): this {
    this.getPhoneNumberInput().type(phoneNumber, { delay: 50 });
    return this;
  }
  fillShortPhoneNumberInput(shortPhoneNumber: string): this {
    this.getPhoneNumberInput().type(shortPhoneNumber, { delay: 50 });
    return this;
  }
  placeholderEmailInput() {
    this.getEmailInput().should("have.attr", "placeholder", "Email");
    return this;
  }
  placeholderPhoneNumberInput() {
    this.getPhoneNumberInput().should("have.attr", "placeholder", "Phone Number");
    return this;
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
