import Chainable = Cypress.Chainable;

class HomePageHeader {
  assertionomePageFullName(firstName: String): this {
    this.getHomePageFullName().should("be.visible").should("contain", firstName, { delay: 50 });
    return this;
  }
  assertionHomePageUsername(userName: String): this {
    this.getHomePageUsername().should("be.visible").should("contain", userName, { delay: 50 });
    return this;
  }
  clickMyAccountButton() {
    this.getMyAccountButton().click();
    return this;
  }
  clickBankAccountsButton() {
    this.getBankAccountsButton().click();
    return this;
  }
  private getHomePageFullName(): Chainable<JQuery> {
    return cy.get('[data-test="sidenav-user-full-name"]');
  }
  private getHomePageUsername(): Chainable<JQuery> {
    return cy.get('[data-test="sidenav-username"]');
  }
  private getMyAccountButton(): Chainable<JQuery> {
    return cy.get('[data-test="sidenav-user-settings"]');
  }
  private getBankAccountsButton(): Chainable<JQuery> {
    return cy.get('[data-test="sidenav-bankaccounts"]');
  }
}
export default new HomePageHeader();
