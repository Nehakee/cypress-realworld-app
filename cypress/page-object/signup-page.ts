import Chainable = Cypress.Chainable;

class SignUpPage {
  assertionEmptyInput(selector: string, text: string) {
    this.getSelector(selector).find("p").should("contain", text);
    return this;
  }
  assertionMatchConfirmPasswordInput() {
    this.getConfirmPasswordInputWithHelperText().should("contain", "Password does not match");
    return this;
  }
  assertionShrinkInput(selector: string) {
    this.getSelector(selector).children().should("have.attr", "data-shrink", "true");
    return this;
  }
  assertionShortPasswordInput() {
    this.getPasswordInputWithHelperText().should(
      "contain",
      "Password must contain at least 4 characters"
    );
    return this;
  }
  assertionSignUpTitle() {
    this.getSignUpTitle().should("have.text", "Sign Up");
    return this;
  }
  beDisabledSignUpButton() {
    this.getSignUpButton().should("be.disabled");
    return this;
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
  clickHaveAnAccount() {
    this.getHaveAnAccount().click();
    return this;
  }
  clickInput(selector: string) {
    this.getSelector(selector).click();
    return this;
  }
  clickSignUpButton() {
    this.getSignUpButton().click();
    return this;
  }
  fillAndAssertInput(selector: string, value: string): this {
    this.getSelector(selector).type(value).find("input").should("have.value", value);
    return this;
  }
  fillConfirmPasswordInput(password: string): this {
    this.getConfirmPasswordInput().type(password, { delay: 50 });
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
  fillPasswordInput(password: string): this {
    this.getPasswordInput().type(password, { delay: 50 });
    return this;
  }
  fillShortPasswordInput(shortPassword: string): this {
    this.getPasswordInput().type(shortPassword, { delay: 50 });
    return this;
  }
  fillShortConfirmPasswordInput(password: string): this {
    this.getConfirmPasswordInput().type(password, { delay: 50 });
    return this;
  }
  fillUsernameInput(username: string): this {
    this.getUsernameInput().type(username, { delay: 50 });
    return this;
  }
  getSelector(selector: string): Chainable<JQuery> {
    return cy.get(`[data-test=${selector}]`);
  }
  notDisabledSignUpButton() {
    this.getSignUpButton().should("not.to.be.disabled");
  }
  private getConfirmPasswordInput(): Chainable<JQuery> {
    return cy.get('[id="confirmPassword"]');
  }
  private getConfirmPasswordInputWithHelperText(): Chainable<JQuery> {
    return cy.get('[data-test="signup-confirmPassword"]');
  }
  private getFirstNameInput(): Chainable<JQuery> {
    return cy.get('[id="firstName"]');
  }
  private getHaveAnAccount(): Chainable<JQuery> {
    return cy.get('[class="MuiGrid-root MuiGrid-item"]');
  }
  private getLastNameInput(): Chainable<JQuery> {
    return cy.get('[id="lastName"]');
  }
  private getPasswordInput(): Chainable<JQuery> {
    return cy.get('[id="password"]');
  }
  private getPasswordInputWithHelperText(): Chainable<JQuery> {
    return cy.get('[data-test="signup-password"]');
  }
  private getSignUpButton(): Chainable<JQuery> {
    return cy.get('[data-test="signup-submit"]');
  }
  private getSignUpTitle(): Chainable<JQuery> {
    return cy.get('[data-test="signup-title"]');
  }
  private getUsernameInput(): Chainable<JQuery> {
    return cy.get('[id="username"]');
  }
}
export default new SignUpPage();
