/// <reference types="cypress" />
import homePage from "../page-object/home-page";
import signInPage from "../page-object/signin-page";
import signUpPage from "../page-object/signup-page";

const mainUser = {
  firstName: "Abel",
  lastName: "Fernandez",
  username: "Abel1",
  password: "abel1",
};

describe("Main test Real world app", () => {
  beforeEach(() => {
    signInPage.visitLoginPage();
  });
  it("Register account", () => {
    signInPage.clickSignUpQuestion();
    signUpPage
      .checkSignUpUrl()
      .fillFirstNameInput(mainUser.firstName)
      .fillLastNameInput(mainUser.lastName)
      .fillUsernameInput(mainUser.username)
      .fillPasswordInput(mainUser.password)
      .fillConfirmPasswordInput(mainUser.password)
      .clickSignUpButton()
      .checkSignUpUrl();
  });

  it("Checkout login page", () => {
    signInPage
      .assertionSignUpTitle()
      .assertionUsernameInput()
      .assertionPasswordInput()
      .assertionRememberMeCheckbox()
      .assertionSignInButton()
      .assertionSignUpQuestion()
      .clickSignUpQuestion();
    signUpPage.checkSignUpUrl();
  });

  it("Website login check", () => {
    signInPage.checkSignInUrl();
    cy.intercept("POST", "http://localhost:3001/login").as("login");
    signInPage
      .fillSigninUsernameInput(mainUser.username)
      .fillSigninPasswordInput(mainUser.password)
      .clickSignInButton();
    homePage.checkHomePageUrl();
    cy.wait("@login").then((request) => {
      expect(request.request.body.username).to.contain(mainUser.username);
      expect(request.request.body.password).to.contain(mainUser.password);
      expect(request.response.statusCode).to.eq(200);
    });
  });
});
