/// <reference types="cypress" />

const { be } = require("date-fns/locale");

const mainUser = {
  firstName: "Abel",
  lastName: "Fernandez",
  userName: "Abel1",
  password: "abel1",
};
const testUser = {
  firstName: "Alexi",
  lastName: "Laiho",
  userName: "Alexi1",
  password: "al1",
};

describe("Register account test", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Create account", () => {
    cy.get('[data-test="signup"]').click();
    cy.url().should("eq", "http://localhost:3000/signup");

    cy.get('[id="firstName"]').type(mainUser.firstName, { delay: 50 }).should("have.value", "Abel");
    cy.get('[id="lastName"]')
      .type(mainUser.lastName, { delay: 50 })
      .should("have.value", "Fernandez");
    cy.get('[id="username"]').type(mainUser.userName, { delay: 50 }).should("have.value", "Abel1");
    cy.get('[id="password"]').type(mainUser.password, { delay: 50 }).should("have.value", "abel1");
    cy.get('[id="confirmPassword"]')
      .type(mainUser.password, { delay: 50 })
      .should("have.value", "abel1");
    cy.get('[data-test="signup-submit"]').click();
    cy.url().should("eq", "http://localhost:3000/signin");
  });
  it("Checkout sign up page", () => {
    cy.get('[data-test="signup"]').click();
    cy.url().should("eq", "http://localhost:3000/signup");
    cy.get('[class="makeStyles-logo-36"]').should("be.visible");
    cy.get('[data-test="signup-title"]').should("have.text", "Sign Up");
    cy.get('[data-test="signup-submit"]').click().should("be.disabled");

    cy.get('[id="firstName"]').click();
    cy.get('[id="root"]').click();
    cy.get('[data-test="signup-first-name"]').should("contain", "First Name is required");
    cy.get('[id="firstName"]').type(mainUser.firstName, { delay: 50 }).should("have.value", "Abel");
    cy.get('[id="firstName-label"]').should("have.attr", "data-shrink", "true");

    cy.get('[id="lastName"]').click();
    cy.get('[id="root"]').click();
    cy.get('[data-test="signup-last-name"]').should("contain", "Last Name is required");
    cy.get('[id="lastName"]')
      .type(mainUser.lastName, { delay: 50 })
      .should("have.value", "Fernandez");
    cy.get('[id="lastName-label"]').should("have.attr", "data-shrink", "true");

    cy.get('[id="username"]').click();
    cy.get('[id="root"]').click();
    cy.get('[data-test="signup-username"]').should("contain", "Username is required");
    cy.get('[id="username"]').type(mainUser.userName, { delay: 50 }).should("have.value", "Abel1");
    cy.get('[id="username-label"]').should("have.attr", "data-shrink", "true");

    cy.get('[id="password"]').click();
    cy.get('[id="root"]').click();
    cy.get('[data-test="signup-password"]').should("contain", "Enter your password");
    cy.get('[id="password"]').type(testUser.password, { delay: 50 }).should("have.value", "al1");
    cy.get('[data-test="signup-password"]').should(
      "contain",
      "Password must contain at least 4 characters"
    );
    cy.get('[id="password"]')
      .clear()
      .type(mainUser.password, { delay: 50 })
      .should("have.value", "abel1");
    cy.get('[id="password-label"]').should("have.attr", "data-shrink", "true");

    cy.get('[id="confirmPassword"]').click();
    cy.get('[id="root"]').click();
    cy.get('[data-test="signup-confirmPassword"]').should("contain", "Confirm your password");
    cy.get('[id="confirmPassword"]')
      .type(testUser.password, { delay: 50 })
      .should("have.value", "al1");
    cy.get('[data-test="signup-confirmPassword"]').should("contain", "Password does not match");
    cy.get('[data-test="signup-submit"]').should("be.disabled");
    cy.get('[id="confirmPassword"]')
      .clear()
      .type(mainUser.password, { delay: 50 })
      .should("have.value", "abel1");
    cy.get('[id="confirmPassword-label"]').should("have.attr", "data-shrink", "true");

    cy.get('[data-test="signup-submit"]').should("not.to.be.disabled").click();
    cy.url().should("eq", "http://localhost:3000/signin");
    cy.get('[data-test="signup"]').click();
    cy.wait(500);
    cy.get('[class="MuiGrid-root MuiGrid-item"]').click();
    cy.url().should("eq", "http://localhost:3000/signin");
  });
});
