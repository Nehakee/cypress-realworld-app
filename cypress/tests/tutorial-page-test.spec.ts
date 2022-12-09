/// <reference types="cypress" />
import bankAccountPage from "../page-object/bank-account-page";
import createBankAccountPage from "../page-object/create-bank-account-page";
import finishedWindow from "../page-object/finished-window";
import getStartedWindow from "../page-object/getstarted-window";
import homePage from "../page-object/home-page";
import homePageHeader from "../page-object/home-page-header";
import homePageSidebar from "../page-object/home-page-sidebar";
import signInPage from "../page-object/signin-page";
import signUpPage from "../page-object/signup-page";
import tutorialWindow from "../page-object/tutorial-window";
import usersettingsPage from "../page-object/usersettings-page";

const { Android } = require("@material-ui/icons");

const mainUser = {
  firstName: "Abel",
  lastName: "Fernandez",
  username: "Abel1",
  password: "abel1",
  bankName: "Mbank",
  routingNumber: "123456789",
  accountNumber: "000012345678",
  emailAddress: "abelfernandez@gmail.com",
  phoneNumber: "670132456",
};
const testUser = {
  firstName: "Alexi",
  lastName: "Laiho",
  username: "Alexi1",
  password: "al1",
  bankName: "M",
  routingNumber: "12",
  accountNumber: "000012",
  accountNumber2: "000012124124123124123",
  emailAddress: "124124@werwers",
  phoneNumber: "11233",
};

describe("Tutorial page test", () => {
  before(() => {
    signInPage.visitLoginPage();
  });

  it("Register account", () => {
    signInPage.clickSignUpQuestion();
    signUpPage
      .fillFirstNameInput(mainUser.firstName)
      .fillLastNameInput(mainUser.lastName)
      .fillUsernameInput(mainUser.username)
      .fillPasswordInput(mainUser.password)
      .fillConfirmPasswordInput(mainUser.password)
      .clickSignUpButton();
    cy.wait(200);
  });

  it("Login", () => {
    signInPage
      .fillSigninUsernameInput(mainUser.username)
      .fillSigninPasswordInput(mainUser.password)
      .clickSignInButton();
  });

  it("Tutorial real world app", () => {
    getStartedWindow.clickNextButton();
    tutorialWindow
      .dblclickDisabledSaveButton()
      .assertionPlaceholderInput("bankaccount-bankName-input", "Bank Name")
      .assertionTitle()
      .assertionEmptyInput("bankaccount-bankName-input", "Enter a bank name")
      .fillShortBankNameInput(testUser.bankName)
      .assertionShortBankNameInput()
      .clearInput("bankaccount-bankName-input")
      .assertionEmptyInput("bankaccount-bankName-input", "Enter a bank name")
      .fillAndAssertInput(
        "bankaccount-bankName-input",
        mainUser.bankName,
        "Must contain at least 5 characters",
        "Enter a bank name"
      )
      .assertionPlaceholderInput("bankaccount-routingNumber-input", "Routing Number")
      .clickInput("bankaccount-routingNumber-input")
      .clickTitle()
      .assertionEmptyInput("bankaccount-routingNumber-input", "Enter a valid bank routing number")
      .fillShortRoutingNumberInput(testUser.routingNumber)
      .assertionShortRoutingNumberInput()
      .clearInput("bankaccount-routingNumber-input")
      .assertionEmptyInput("bankaccount-routingNumber-input", "Enter a valid bank routing number")
      .fillAndAssertInput(
        "bankaccount-routingNumber-input",
        mainUser.routingNumber,
        "Enter a valid bank routing number",
        "Must contain a valid routing number"
      )
      .assertionPlaceholderInput("bankaccount-accountNumber-input", "Account Number")
      .clickInput("bankaccount-accountNumber-input")
      .clickTitle()
      .assertionEmptyInput("bankaccount-accountNumber-input", "Enter a valid bank account number")
      .fillShortAccountNumberInput(testUser.accountNumber)
      .assertionShortAccountNumberInput()
      .clearInput("bankaccount-accountNumber-input")
      .fillLongBAccountNumberInput(testUser.accountNumber2)
      .assertionLongAccountNumberInput()
      .clearInput("bankaccount-accountNumber-input")
      .fillAndAssertInput(
        "bankaccount-accountNumber-input",
        mainUser.accountNumber,
        "Must contain at least 9 digits",
        "Must contain no more than 12 digits"
      )
      .assertionSaveButton()
      .clickSaveButton();
    finishedWindow.clickDoneButton();
    homePage.checkHomePageUrl();
  });

  it("Check Main Page", () => {
    homePageHeader.assertionHomePageLogo();
    homePageSidebar
      .assertionHomePageFullName(mainUser.firstName)
      .assertionHomePageUsername(mainUser.username);
  });
  it("My Account", () => {
    homePageSidebar.clickMyAccountButton();
    usersettingsPage
      .checkUserSettingsUrl()
      .assertionFirstNameInput(mainUser.firstName)
      .assertionLastNameInput(mainUser.lastName)
      .assertionPlaceholderInput("user-settings-email-input", "Email")
      .clickInput("user-settings-email-input")
      .clickInput("user-settings-phoneNumber-input");
    usersettingsPage
      .assertionEmptyInput("user-settings-email-input-helper-text", "Enter an email address")
      .fillWrongEmailInput(testUser.emailAddress)
      .assertionWrongEmailInput()
      .clearInput("user-settings-email-input")
      .fillAndAssertInput("user-settings-email-input", mainUser.emailAddress)
      .assertionPlaceholderInput("user-settings-phoneNumber-input", "Phone Number")
      .clickInput("user-settings-phoneNumber-input");
    usersettingsPage
      .assertionEmptyInput("user-settings-phoneNumber-input-helper-text", "Enter a phone number")
      .fillShortPhoneNumberInput(testUser.phoneNumber)
      .assertionShortPhoneNumberInput()
      .clearInput("user-settings-phoneNumber-input")
      .fillAndAssertInput("user-settings-phoneNumber-input", mainUser.phoneNumber)
      .clickSaveButton();
    cy.get('[data-test="signin-error"]').should("contain", "401");
    //Shouldn't be an error 401

    signInPage
      .fillSigninUsernameInput(mainUser.username)
      .fillSigninPasswordInput(mainUser.password)
      .clickSignInButton();
    homePageSidebar
      .clickMyAccountButton()
      //it doesn't save email nad phone number
      .clickBankAccountsButton();
    bankAccountPage.assertionBankList(mainUser.bankName).clickCreateButton();
    createBankAccountPage.checkCreateBankAccountUrl();
  });
});
