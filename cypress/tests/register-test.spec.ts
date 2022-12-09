/// <reference types="cypress" />
import signInPage from "../page-object/signin-page";
import signUpPage from "../page-object/signup-page";

const { be } = require("date-fns/locale");

const mainUser = {
  firstName: "Abel",
  lastName: "Fernandez",
  username: "Abel1",
  password: "abel1",
};
const testUser = {
  firstName: "Alexi",
  lastName: "Laiho",
  username: "Alexi1",
  password: "al1",
};

describe("Register account test", () => {
  before(() => {
    signInPage.visitLoginPage();
  });

  it("Create account", () => {
    signInPage.clickSignUpQuestion();
    signUpPage
      .checkSignUpUrl()
      .fillAndAssertInput("signup-first-name", mainUser.firstName)
      .fillAndAssertInput("signup-last-name", mainUser.lastName)
      .fillAndAssertInput("signup-username", mainUser.username)
      .fillAndAssertInput("signup-password", mainUser.password)
      .fillAndAssertInput("signup-confirmPassword", mainUser.password)
      .clickSignUpButton();
    signInPage.checkSignInUrl();
  });
  it("Checkout sign up page", () => {
    signInPage.clickSignUpQuestion();
    signUpPage
      .checkSignUpUrl()
      .assertionSignUpTitle()
      .clickSignUpButton()
      .beDisabledSignUpButton()
      .clickInput("signup-first-name")
      .assertionEmptyInput("signup-first-name", "First Name is required")
      .fillAndAssertInput("signup-first-name", mainUser.firstName)
      .assertionShrinkInput("signup-first-name")
      .clickInput("signup-last-name")
      .clickInput("signup-first-name")
      .assertionEmptyInput("signup-last-name", "Last Name is required")
      .fillAndAssertInput("signup-last-name", mainUser.lastName)
      .assertionShrinkInput("signup-last-name")
      .clickInput("signup-username")
      .clickInput("signup-last-name")
      .assertionEmptyInput("signup-username", "Username is required")
      .fillAndAssertInput("signup-username", mainUser.username)
      .assertionShrinkInput("signup-username")
      .clickInput("signup-password")
      .clickInput("signup-username")
      .assertionEmptyInput("signup-password", "Enter your password")
      .fillShortPasswordInput(testUser.password)
      .assertionShortPasswordInput()
      .clearPasswordInput()
      .fillAndAssertInput("signup-password", mainUser.password)
      .assertionShrinkInput("signup-password")
      .clickInput("signup-confirmPassword")
      .clickInput("signup-password")
      .assertionEmptyInput("signup-confirmPassword", "Confirm your password")
      .fillShortConfirmPasswordInput(testUser.password)
      .assertionMatchConfirmPasswordInput()
      .beDisabledSignUpButton()
      .clearConfirmPasswordInput()
      .fillAndAssertInput("signup-confirmPassword", mainUser.password)
      .assertionShrinkInput("signup-confirmPassword")
      .notDisabledSignUpButton();
    signUpPage.clickSignUpButton();
    signInPage.checkSignInUrl().clickSignUpQuestion();
    cy.wait(500);
    signUpPage.clickHaveAnAccount();
    signInPage.checkSignInUrl();
  });
});
