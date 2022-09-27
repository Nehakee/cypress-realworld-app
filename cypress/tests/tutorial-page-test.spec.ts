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
  userName: "Abel1",
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
  userName: "Alexi1",
  password: "al1",
  bankName: "M",
  routingNumber: "12",
  accountNumber: "000012",
  accountNumber2: "000012124124123124123",
  emailAddress: "124124@werwers",
  phoneNumber: "11233",
};

var firstName = mainUser.firstName;
var lastName = mainUser.lastName;
var username = mainUser.userName;
var password = mainUser.password;
var bankName = mainUser.bankName;
var shortBankName = testUser.bankName;
var routingNumber = mainUser.routingNumber;
var shortRoutingNumber = testUser.routingNumber;
var accountNumber = mainUser.accountNumber;
var shortAccountNumber = testUser.accountNumber;
var longAccountNumber = testUser.accountNumber2;
var emailAddress = mainUser.emailAddress;
var wrongEmailAddress = testUser.emailAddress;
var phoneNumber = mainUser.phoneNumber;
var shortPhoneNumber = testUser.phoneNumber;

describe("Tutorial page test", () => {
  before(() => {
    signInPage.visitLoginPage();
  });

  it("Register account", () => {
    signInPage.clickSignUpQuestion();
    signUpPage
      .fillFirstNameInput(firstName)
      .fillLastNameInput(lastName)
      .fillUsernameInput(username)
      .fillPasswordInput(password)
      .fillConfirmPasswordInput(password)
      .clickSignUpButton();
    cy.wait(200);
  });

  it("Login", () => {
    signInPage
      .fillSigninUsernameInput(username)
      .fillSigninPasswordInput(password)
      .clickSignInButton();
  });

  it("Tutorial real world app", () => {
    getStartedWindow.clickNextButton();
    tutorialWindow
      .dblclickDisabledSaveButton()
      .placeholderBankNameInput()
      .assertionTitle()
      .assertionEmptyBankNameInput()
      .fillShortBankNameInput(shortBankName)
      .assertionShortBankNameInput()
      .clearBankNameInput()
      .assertionEmptyBankNameInput()
      .fillBankNameInput(bankName)
      .assertionBankNameInput()
      .placeholderRoutingNumberInput()
      .clickRoutingNumberInput()
      .clickTitle()
      .assertionEmptyRoutingNumberInput()
      .fillShortRoutingNumberInput(shortRoutingNumber)
      .assertionShortRoutingNumberInput()
      .clearRoutingNumberInput()
      .fillRoutingNumberInput(routingNumber)
      .assertionRoutingNumberInput()
      .placeholderAccountNumberInput()
      .clickAccountNumberInput()
      .clickTitle()
      .assertionEmptyAccountNumberInput()
      .fillShortAccountNumberInput(shortAccountNumber)
      .assertionShortAccountNumberInput()
      .clearAccountNumberInput()
      .fillLongBAccountNumberInput(longAccountNumber)
      .assertionLongAccountNumberInput()
      .clearAccountNumberInput()
      .fillAccountNumberInput(accountNumber)
      .assertionAccountNumberInput()
      .assertionSaveButton()
      .clickSaveButton();
    finishedWindow.clickDoneButton();
    homePage.checkHomePageUrl();
  });

  it("Check Main Page", () => {
    homePageHeader.assertionHomePageLogo();
    homePageSidebar.assertionomePageFullName(firstName).assertionHomePageUsername(username);
  });
  it("My Account", () => {
    homePageSidebar.clickMyAccountButton();
    usersettingsPage
      .checkUserSettingsUrl()
      .assertionFirstNameInput(firstName)
      .assertionLastNameInput(lastName)
      .placeholderEmailInput()
      .clickEmailInput();
    cy.get('[data-test="user-settings-form"]').click(100, 200);
    usersettingsPage
      .assertionEmptyEmailInput()
      .fillWrongEmailInput(wrongEmailAddress)
      .assertionWrongEmailInput()
      .clearEmailInput()
      .fillEmailInput(emailAddress)
      .placeholderPhoneNumberInput();
    cy.get('[data-test="user-settings-form"]').click(100, 200);
    usersettingsPage
      .assertionEmptyPhoneNumberInput()
      .fillShortPhoneNumberInput(shortPhoneNumber)
      .assertionShortPhoneNumberInput()
      .clearPhoneNumberInput()
      .fillPhoneNumberInput(phoneNumber)
      .clickSaveButton();
    cy.get('[data-test="signin-error"]').should("contain", "401");
    //Shouldn't be an error 401

    signInPage
      .fillSigninUsernameInput(username)
      .fillSigninPasswordInput(password)
      .clickSignInButton();
    homePageSidebar
      .clickMyAccountButton()
      //it doesn't save email nad phone number
      .clickBankAccountsButton();
    bankAccountPage.assertionBankList(bankName).clickCreateButton();
    createBankAccountPage.checkCreateBankAccountUrl();
  });
});
