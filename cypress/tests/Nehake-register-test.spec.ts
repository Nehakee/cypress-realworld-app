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
  userName: "Alexi1",
  password: "al1",
};

var firstName = mainUser.firstName;
var lastName = mainUser.lastName;
var username = mainUser.username;
var password = mainUser.password;
var shortPassword = testUser.password;

describe("Register account test", () => {
  before(() => {
    signInPage.visitLoginPage();
  });

  it("Create account", () => {
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
      .clickSignUpButton();
    signInPage.checkSignInUrl();
  });
  it.only("Checkout sign up page", () => {
    signInPage.clickSignUpQuestion();
    signUpPage
      .checkSignUpUrl()
      .assertionSignUpTitle()
      .clickSignUpButton()
      .beDisabledSignUpButton()
      .clickFirstNameInput();
    cy.get('[id="root"]').click(255, 255);
    signUpPage.assertionEmptyFirstNameInput();
    signUpPage
      .fillFirstNameInput(firstName)
      .assertionFirstNameInput()
      .assertionShrinkFirstNameInput()
      .clickLastNameInput();
    cy.get('[id="root"]').click(255, 255);
    signUpPage
      .assertionEmptyLastNameInput()
      .fillLastNameInput(lastName)
      .assertionLastNameInput()
      .assertionShrinkLastNameInput();
    signUpPage.clickUsernameInput();
    cy.get('[id="root"]').click(255, 255);
    signUpPage
      .assertionEmptyUsernameInput()
      .fillUsernameInput(username)
      .assertionUsernameInput()
      .assertionShrinkUsernameInput()
      .clickPasswordInput();
    cy.get('[id="root"]').click(255, 255);
    signUpPage
      .assertionEmptyPasswordInput()
      .fillShortPasswordInput(shortPassword)
      .assertionShortPasswordInput()
      .clearPasswordInput()
      .fillPasswordInput(password)
      .assertionShrinkPasswordInput()
      .clickConfirmPasswordInput();
    cy.get('[id="root"]').click(255, 255);
    signUpPage
      .assertionEmptyConfirmPasswordInput()
      .fillShortConfirmPasswordInput(shortPassword)
      .assertionMatchConfirmPasswordInput()
      .beDisabledSignUpButton()
      .clearConfirmPasswordInput()
      .fillConfirmPasswordInput(password)
      .assertionConfirmPasswordInput()
      .assertionShrinkConfirmPasswordInput()
      .notDisabledSignUpButton();
    signUpPage.clickSignUpButton();
    signInPage.checkSignInUrl().clickSignUpQuestion();
    cy.wait(500);
    signUpPage.clickHaveAnAccount();
    signInPage.checkSignInUrl();
  });
});
