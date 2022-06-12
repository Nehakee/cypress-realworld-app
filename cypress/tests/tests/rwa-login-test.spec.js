/// <reference types="cypress" />
const person1 = {
  Firstname: "Abel",
  Lastname: "Fernandez",
  Username: "Abel1",
  Password: "abel1",
};

describe("Main test Real world app", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });
  it("Register account", () => {
    cy.get('[data-test="signup"]').click();
    cy.url().should("eq", "http://localhost:3000/signup");
    cy.get('[id="firstName"]').should("be.visible").type(person1.Firstname);
    cy.get('[id="lastName"]').should("be.visible").type(person1.Lastname);
    cy.get('[id="username"]').should("be.visible").type(person1.Username);
    cy.get('[id="password"]').should("be.visible").type(person1.Password);
    cy.get('[id="confirmPassword"]').should("be.visible").type(person1.Password);
    cy.get('[class="MuiButton-label"]').should("be.visible").click();
    cy.url().should("eq", "http://localhost:3000/signin");
  });

  it("Checkout login page", () => {
    cy.get('[class="makeStyles-logo-22"]').should("be.visible");
    cy.get('[class="MuiTypography-root MuiTypography-h5"]')
      .should("exist")
      .and("contain", "Sign in");
    cy.get('[id="username"]').should("be.visible");
    cy.get('[id="password"]').should("be.visible");
    cy.get('[class="PrivateSwitchBase-input-33"]').should("not.be.checked");
    cy.get('[class="MuiButton-label"]').should("be.visible");
    cy.get('[data-test="signup"]').should("be.visible").click();
    cy.url().should("eq", "http://localhost:3000/signup");
  });

  it("Website login check", () => {
    cy.go("back");
    cy.url().should("eq", "http://localhost:3000/signin");
    cy.wait(1000);
    cy.intercept("POST", "http://localhost:3001/login").as("login");
    cy.get('[id="username"]').type(person1.Username);
    cy.get('[id="password"]').type(person1.Password);
    cy.get('[class="MuiButton-label"]').click();
    cy.url().should("eq", "http://localhost:3000/");

    cy.wait("@login").then((request) => {
      expect(request.request.body.username).to.contain(person1.Username);
      expect(request.request.body.password).to.contain(person1.Password);
      expect(request.response.statusCode).to.eq(200);
    });
    cy.get('[role="dialog"]').should("be.visible");
  });
});
