/// <reference types="cypress" />

const { Android } = require("@material-ui/icons");

const firstUser = {
  firstName: "Abel",
  lastName: "Fernandez",
  userName: "Abel1",
  password: "abel1",
  bankName: "Mbank",
  routingNumber: "123456789",
  accountNumber: "000012345678",
  emailAddress: "abelfernandez@gmail.com",
  phoneNumber: "670132456",
};
const secondUser = {
  firstName: "Zvi",
  lastName: "Spinoza",
  userName: "Zvi1",
  password: "zvi1",
  bankName: "Millennium",
  routingNumber: "987654321",
  accountNumber: "000087654321",
  emailAddress: "zvispinoza@gmail.com",
  phoneNumber: "670132543",
};

describe("Tutorial page test", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });
  it("Register account", () => {
    cy.get('[data-test="signup"]').click();
    cy.get('[id="firstName"]').type(mainUser.firstName);
    cy.get('[id="lastName"]').type(mainUser.lastName);
    cy.get('[id="username"]').type(mainUser.userName);
    cy.get('[id="password"]').type(mainUser.password);
    cy.get('[id="confirmPassword"]').type(mainUser.password);
    cy.get('[class="MuiButton-label"]').click();
    cy.wait(200);
  });

  it("Login", () => {
    cy.get('[id="username"]').type(mainUser.userName);
    cy.get('[id="password"]').type(mainUser.password);
    cy.get('[class="MuiButton-label"]').click();
  });

  it("Tutorial real world app", () => {
    cy.get('[data-test="user-onboarding-next"]').click();
    cy.get('[data-test="bankaccount-submit"]').dblclick().should("be.disabled");
    cy.get('[id="bankaccount-bankName-input"]')
      .should("have.attr", "placeholder", "Bank Name")
      .click();

    cy.get('[data-test="user-onboarding-dialog-title"').click();
    cy.get('[data-test="bankaccount-bankName-input"]').should("contain", "Enter a bank name");
    cy.get('[id="bankaccount-bankName-input"]').type("M");
    cy.get('[data-test="bankaccount-bankName-input"]').should(
      "contain",
      "Must contain at least 5 characters"
    );
    cy.get('[id="bankaccount-bankName-input"]').clear().type(firstUser.bankName);
    cy.get('[data-test="bankaccount-bankName-input"]')
      .should("not.contain", "Must contain at least 5 characters")
      .and("not.contain", "Enter a bank name");

    cy.get('[id="bankaccount-routingNumber-input"]')
      .should("have.attr", "placeholder", "Routing Number")
      .click();
    cy.get('[data-test="user-onboarding-dialog-title"').click();
    cy.get('[data-test="bankaccount-routingNumber-input"]').should(
      "contain",
      "Enter a valid bank routing number"
    );
    cy.get('[id="bankaccount-routingNumber-input"]').type("1");
    cy.get('[data-test="bankaccount-routingNumber-input"]').should(
      "contain",
      "Must contain a valid routing number"
    );
    cy.get('[id="bankaccount-routingNumber-input"]').clear().type(firstUser.routingNumber);
    cy.get('[data-test="bankaccount-routingNumber-input"]')
      .should("not.contain", "Enter a valid bank routing number")
      .and("not.contain", "Must contain a valid routing number");

    cy.get('[id="bankaccount-accountNumber-input"]')
      .should("have.attr", "placeholder", "Account Number")
      .click();
    cy.get('[data-test="user-onboarding-dialog-title"').click();
    cy.get('[data-test="bankaccount-accountNumber-input"]').should(
      "contain",
      "Enter a valid bank account number"
    );
    cy.get('[id="bankaccount-accountNumber-input"]').type("000012");
    cy.get('[data-test="bankaccount-accountNumber-input"]').should(
      "contain",
      "Must contain at least 9 digits"
    );
    cy.get('[id="bankaccount-accountNumber-input"]').clear().type("000012124124123124123");
    cy.get('[data-test="bankaccount-accountNumber-input"]').should(
      "contain",
      "Must contain no more than 12 digits"
    );
    cy.get('[id="bankaccount-accountNumber-input"]').clear().type(firstUser.accountNumber);
    cy.get('[data-test="bankaccount-accountNumber-input"]')
      .should("not.contain", "Must contain at least 9 digits")
      .and("not.contain", "Must contain no more than 12 digits");
    cy.get('[data-test="bankaccount-submit"]').should("not.be.disabled").click();
    cy.get('[data-test="user-onboarding-next"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Check Main Page", () => {
    cy.get('[data-test="app-name-logo"]').should("be.visible");
    cy.get('[data-test="sidenav-user-full-name"]')
      .should("be.visible")
      .should("contain", firstUser.firstName);

    cy.get('[data-test="sidenav-username"]')
      .should("be.visible")
      .should("contain", firstUser.userName);
  });
  it("My Account", () => {
    cy.get('[data-test="sidenav-user-settings" ]').click();
    cy.url().should("eq", "http://localhost:3000/user/settings");
    cy.get('[data-test="user-settings-firstName-input"]').should("have.value", firstUser.firstName);
    cy.get('[data-test="user-settings-lastName-input"]').should("have.value", firstUser.lastName);
    cy.get('[data-test="user-settings-email-input"]')
      .should("have.attr", "placeholder", "Email")
      .dblclick();
    cy.get('[data-test="user-settings-form"]').click(100, 200);
    cy.get('[id="user-settings-email-input-helper-text"]').should(
      "contain",
      "Enter an email address"
    );
    cy.get('[data-test="user-settings-email-input"]').type("124124@werwers");
    cy.get('[id="user-settings-email-input-helper-text"]').should(
      "contain",
      "Must contain a valid email address"
    );
    cy.get('[data-test="user-settings-email-input"]').clear().type(firstUser.emailAddress);
    cy.get('[id="user-settings-phoneNumber-input"]').should(
      "have.attr",
      "placeholder",
      "Phone Number"
    );
    cy.get('[data-test="user-settings-form"]').click(100, 200);
    cy.get('[id="user-settings-phoneNumber-input-helper-text"]').should(
      "have.text",
      "Enter a phone number"
    );
    cy.get('[id="user-settings-phoneNumber-input"]').type("11233");
    cy.get('[id="user-settings-phoneNumber-input-helper-text"]').should(
      "have.text",
      "Phone number is not valid"
    );

    cy.get('[id="user-settings-phoneNumber-input"]').clear().type(firstUser.phoneNumber);
    cy.get('[data-test="user-settings-submit"]').click();
    cy.get('[data-test="signin-error"]').should("contain", "401");
    //It shouldn't be an error

    cy.get('[id="username"]').type(firstUser.userName);
    cy.get('[id="password"]').type(firstUser.password);
    cy.get('[class="MuiButton-label"]').click();
    cy.get('[data-test="sidenav-user-settings" ]').click();
    //it doesn't save email nad phone number
    cy.get('[data-test="sidenav-bankaccounts"]').click();
    cy.get('[data-test="bankaccount-list"]').should("contain", firstUser.bankName);
    cy.get('[data-test="bankaccount-new"]').click();
    cy.url().should("eq", "http://localhost:3000/bankaccounts/new");
  });
});
