import Chainable = Cypress.Chainable;

class SignInPage {
  visitLoginPage() {
    cy.visit("http://localhost:3000");
  }
  assertionPasswordInput() {
    this.getPasswordInput().should("be.visible");
    return this;
  }
  assertionRememberMeCheckbox() {
    this.getRememberMeCheckbox().should("not.be.checked");
    return this;
  }
  assertionSignInButton() {
    this.getSignInButton().should("be.visible");
    return this;
  }
  assertionSignUpQuestion() {
    this.getSignUpQuestion().should("be.visible");
    return this;
  }
  assertionSignUpTitle() {
    this.getSignInTitle().should("exist").and("contain", "Sign in");
    return this;
  }
  assertionUsernameInput() {
    this.getUsernameInput().should("be.visible");
    return this;
  }
  checkSignInUrl() {
    cy.url().should("eq", "http://localhost:3000/signin");
    return this;
  }
  clickSignInButton() {
    this.getSignInButton().click();
    return this;
  }
  clickSignUpQuestion() {
    this.getSignUpQuestion().click();
    return this;
  }
  fillSigninPasswordInput(username: string): this {
    this.getPasswordInput().type(username, { delay: 50 });
    return this;
  }
  fillSigninUsernameInput(username: string): this {
    this.getUsernameInput().type(username, { delay: 50 });
    return this;
  }
  private getPasswordInput(): Chainable<JQuery> {
    return cy.get('[id="password"]');
  }
  private getRememberMeCheckbox(): Chainable<JQuery> {
    return cy.get('[name="remember"]');
  }
  private getSignInButton(): Chainable<JQuery> {
    return cy.get('[class="MuiButton-label"]');
  }
  private getSignInTitle(): Chainable<JQuery> {
    return cy.get('[class="MuiTypography-root MuiTypography-h5"]');
  }
  private getSignUpQuestion(): Chainable<JQuery> {
    return cy.get('[data-test="signup"]');
  }
  private getUsernameInput(): Chainable<JQuery> {
    return cy.get('[id="username"]');
  }
}
export default new SignInPage();
