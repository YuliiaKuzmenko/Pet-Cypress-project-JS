import { faker } from "@faker-js/faker";

import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    homePage.registerFormLink.click();
    registrationPage.firstNameInputField.type("Yuliia");
    registrationPage.lastNameInputField.type("Kuzmenko");
    registrationPage.emailInputField.type(email);
    registrationPage.passwordInputField.type(password);
    registrationPage.submitButton.click();

    //Verify user role, name, url and page title
    dashboardPage.roleLabel.should("have.text", "role: user");
    dashboardPage.fullNameLabel.should("have.text", "Yuliia  Kuzmenko");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "dashboard/user/profile");

    //Click user icon and logout button
    dashboardPage.userIconButton.click();
    dashboardPage.logoutButton.click();

    //Click login btn and login with new user
    loginPage.loginButton.click();
    loginPage.login(email, password);

    //Verify user role and title
    dashboardPage.roleLabel.should("have.text", "role: user");
    dashboardPage.fullNameLabel.should("have.text", "Yuliia  Kuzmenko");
  });
});
