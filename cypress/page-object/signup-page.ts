import Chainable = Cypress.Chainable;

class SignUpPage {
  assertionFirstNameInput() {
    this.getFirstNameInput().should("have.value", "Abel");
    return this;
  }
  assertionEmptyFirstNameInput() {
    this.getFirstNameInputWithHelperText().should("contain", "First Name is required");
    return this;
  }
  assertionShrinkFirstNameInput() {
    this.getShrinkFirstNameInput().should("have.attr", "data-shrink", "true");
    return this;
  }
  assertionLastNameInput() {
    this.getLastNameInput().should("have.value", "Fernandez").and("be.visible");
    return this;
  }
  assertionEmptyLastNameInput() {
    this.getLastNameInputWithHelperText().should("contain", "Last Name is required");
    return this;
  }
  assertionShrinkLastNameInput() {
    this.getShrinkLastNameInput().should("have.attr", "data-shrink", "true");
    return this;
  }
  assertionUsernameInput() {
    this.getUsernameInput().should("have.value", "Abel1").and("be.visible");
    return this;
  }
  assertionEmptyUsernameInput() {
    this.getUsernameInputWithHelperText().should("contain", "Username is required");
    return this;
  }
  assertionShrinkUsernameInput() {
    this.getShrinkUsernameInput().should("have.attr", "data-shrink", "true");
    return this;
  }
  assertionPasswordInput() {
    this.getPasswordInput().should("have.value", "abel1").and("be.visible");
    return this;
  }
  assertionEmptyPasswordInput() {
    this.getPasswordInputWithHelperText().should("contain", "Enter your password");
    return this;
  }
  assertionShortPasswordInput() {
    this.getPasswordInputWithHelperText().should(
      "contain",
      "Password must contain at least 4 characters"
    );
    return this;
  }
  assertionShrinkPasswordInput() {
    this.getShrinkPasswordInput().should("have.attr", "data-shrink", "true");
    return this;
  }
  assertionConfirmPasswordInput() {
    this.getConfirmPasswordInput().should("have.value", "abel1").and("be.visible");
    return this;
  }
  assertionEmptyConfirmPasswordInput() {
    this.getConfirmPasswordInputWithHelperText().should("contain", "Confirm your password");
    return this;
  }
  assertionMatchConfirmPasswordInput() {
    this.getConfirmPasswordInputWithHelperText().should("contain", "Password does not match");
    return this;
  }
  assertionShrinkConfirmPasswordInput() {
    this.getShrinkConfirmPasswordInput().should("have.attr", "data-shrink", "true");
    return this;
  }
  assertionSignUpTitle() {
    this.getSignUpTitle().should("have.text", "Sign Up");
    return this;
  }

  assertionSignUpButton() {
    this.getSignUpButton().should("be.visible");
    return this;
  }

  beDisabledSignUpButton() {
    this.getSignUpButton().should("be.disabled");
    return this;
  }
  notDisabledSignUpButton() {
    this.getSignUpButton().should("not.to.be.disabled");
  }
  checkSignUpUrl() {
    cy.url().should("eq", "http://localhost:3000/signup");
    return this;
  }
  clearPasswordInput() {
    this.getPasswordInput().clear();
    return this;
  }
  clearConfirmPasswordInput() {
    this.getConfirmPasswordInput().clear();
    return this;
  }
  clickSignUpButton() {
    this.getSignUpButton().click();
    return this;
  }
  clickFirstNameInput() {
    this.getFirstNameInput().click();
    return this;
  }
  clickLastNameInput() {
    this.getLastNameInput().click();
    return this;
  }
  clickUsernameInput() {
    this.getUsernameInput().click();
    return this;
  }
  clickPasswordInput() {
    this.getPasswordInput().click();
    return this;
  }
  clickConfirmPasswordInput() {
    this.getConfirmPasswordInput().click();
    return this;
  }
  clickHaveAnAccount() {
    this.getHaveAnAccount().click();
    return this;
  }
  fillFirstNameInput(firstName: string): this {
    this.getFirstNameInput().type(firstName, { delay: 50 });
    return this;
  }

  fillLastNameInput(lastName: string): this {
    this.getLastNameInput().type(lastName, { delay: 50 });
    return this;
  }
  fillUsernameInput(username: string): this {
    this.getUsernameInput().type(username, { delay: 50 });
    return this;
  }

  fillPasswordInput(password: string): this {
    this.getPasswordInput().type(password, { delay: 50 });
    return this;
  }
  fillShortPasswordInput(shortPassword: string): this {
    this.getPasswordInput().type(shortPassword, { delay: 50 });
    return this;
  }
  fillConfirmPasswordInput(password: string): this {
    this.getConfirmPasswordInput().type(password, { delay: 50 });
    return this;
  }
  fillShortConfirmPasswordInput(password: string): this {
    this.getConfirmPasswordInput().type(password, { delay: 50 });
    return this;
  }
  private getFirstNameInput(): Chainable<JQuery> {
    return cy.get('[id="firstName"]');
  }
  private getFirstNameInputWithHelperText(): Chainable<JQuery> {
    return cy.get('[data-test="signup-first-name"]');
  }
  private getShrinkFirstNameInput(): Chainable<JQuery> {
    return cy.get('[id="firstName-label"]');
  }
  private getLastNameInput(): Chainable<JQuery> {
    return cy.get('[id="lastName"]');
  }
  private getLastNameInputWithHelperText(): Chainable<JQuery> {
    return cy.get('[data-test="signup-last-name"]');
  }
  private getShrinkLastNameInput(): Chainable<JQuery> {
    return cy.get('[id="lastName-label"]');
  }
  private getUsernameInput(): Chainable<JQuery> {
    return cy.get('[id="username"]');
  }
  private getUsernameInputWithHelperText(): Chainable<JQuery> {
    return cy.get('[data-test="signup-username"]');
  }
  private getShrinkUsernameInput(): Chainable<JQuery> {
    return cy.get('[id="username-label"]');
  }
  private getPasswordInput(): Chainable<JQuery> {
    return cy.get('[id="password"]');
  }
  private getPasswordInputWithHelperText(): Chainable<JQuery> {
    return cy.get('[data-test="signup-password"]');
  }
  private getShrinkPasswordInput(): Chainable<JQuery> {
    return cy.get('[id="password-label"]');
  }
  private getConfirmPasswordInput(): Chainable<JQuery> {
    return cy.get('[id="confirmPassword"]');
  }
  private getConfirmPasswordInputWithHelperText(): Chainable<JQuery> {
    return cy.get('[data-test="signup-confirmPassword"]');
  }
  private getShrinkConfirmPasswordInput(): Chainable<JQuery> {
    return cy.get('[id="confirmPassword-label"]');
  }
  private getSignUpButton(): Chainable<JQuery> {
    return cy.get('[data-test="signup-submit"]');
  }
  private getSignUpTitle(): Chainable<JQuery> {
    return cy.get('[data-test="signup-title"]');
  }
  private getHaveAnAccount(): Chainable<JQuery> {
    return cy.get('[class="MuiGrid-root MuiGrid-item"]');
  }
}
export default new SignUpPage();
