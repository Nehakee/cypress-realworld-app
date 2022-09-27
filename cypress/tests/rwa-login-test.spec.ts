/// <reference types="cypress" />
import homePage from "../page-object/home-page";
import signInPage from "../page-object/signin-page";
import signUpPage from "../page-object/signup-page";

const mainUser = {
  firstName: "Abel",
  lastName: "Fernandez",
  userName: "Abel1",
  password: "abel1",
};
var firstName = mainUser.firstName;
var lastName = mainUser.lastName;
var username = mainUser.userName;
var password = mainUser.password;

describe("Main test Real world app", () => {
  beforeEach(() => {
    signInPage.visitLoginPage();
  });
  it("Register account", () => {
    signInPage.clickSignUpQuestion();
    signUpPage
      .checkSignUpUrl()
      .fillFirstNameInput(firstName)
      .assertionFirstNameInput()
      .fillLastNameInput(lastName)
      .assertionLastNameInput()
      .fillUsernameInput(username)
      .assertionUsernameInput()
      .fillPasswordInput(password)
      .assertionPasswordInput()
      .fillConfirmPasswordInput(password)
      .assertionConfirmPasswordInput()
      .assertionSignUpButton()
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
      .fillSigninUsernameInput(username)
      .fillSigninPasswordInput(password)
      .clickSignInButton();
    homePage.checkHomePageUrl();

    cy.wait("@login").then((request) => {
      expect(request.request.body.username).to.contain(mainUser.userName);
      expect(request.request.body.password).to.contain(mainUser.password);
      expect(request.response.statusCode).to.eq(200);
    });
  });
});
