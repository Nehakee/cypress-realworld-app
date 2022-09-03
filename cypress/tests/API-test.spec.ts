/// <reference types="cypress" />

import { url } from "inspector";
const mainUser = {
  firstName: "Katharina",
  lastName: "Bernier",
  userName: "Katharina_Bernier",
  password: "s3cret",
};
const testUser = {
  firstName: "Alexi",
  lastName: "Laiho",
  userName: "Alexi1",
  password: "al1",
};

describe("API TEST", () => {
  it("LOGIN (200)", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/login",
      body: {
        username: mainUser.userName,
        password: mainUser.password,
        type: "LOGIN",
      },
    }).then((request) => {
      expect(request.status).to.eq(200);
    });
  });
  it("LOGIN (401)", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/login",
      failOnStatusCode: false,
      body: {
        username: testUser.userName,
        password: testUser.password,
        type: "login",
      },
    }).then((request) => {
      expect(request.status).to.eq(401);
    });
  });
  it("LOGIN (204)", () => {
    cy.request({
      method: "OPTIONS",
      url: "http://localhost:3001/login",
      body: {
        username: mainUser.userName,
        password: mainUser.password,
        type: "login",
      },
    }).then((request) => {
      expect(request.status).to.eq(204);
    });
  });
  it("LOGOUT (200)", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/",
    }).then((request) => {
      expect(request.status).to.eq(200);
    });
  });

  it("LOGOUT (302)", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/logout",
      followRedirect: false,
    }).then((request) => {
      expect(request.status).to.eq(302);
    });
  });
});
