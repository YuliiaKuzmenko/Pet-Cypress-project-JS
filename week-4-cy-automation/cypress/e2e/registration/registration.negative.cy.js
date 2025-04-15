import { faker } from "@faker-js/faker";

import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration with existing user", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not register with an already existin email account", () => {
    homePage.registerFormLink.click();
    registrationPage.firstNameInputField.type("Yuliia");
    registrationPage.lastNameInputField.type("Kuzmenko");
    registrationPage.emailInputField.type(email);
    registrationPage.passwordInputField.type(password);
    registrationPage.submitButton.click();

    dashboardPage.roleLabel.should("have.text", "role: user");
    dashboardPage.fullNameLabel.should("have.text", "Yuliia  Kuzmenko");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "dashboard/user/profile");

    dashboardPage.userIconButton.click();
    dashboardPage.logoutButton.click();

    homePage.registerFormLink.click();
    registrationPage.firstNameInputField.type("Yuliia");
    registrationPage.lastNameInputField.type("Kuzmenko");
    registrationPage.emailInputField.type(email);
    registrationPage.passwordInputField.type(password);
    registrationPage.submitButton.click();

    loginPage.InvalidDataAlert.should("be.visible").and(
      "contain",
      "Input data validation failed"
    );
  });

  it("Sign-up with empty fields", () => {
    homePage.registerFormLink.click();
    registrationPage.submitButton.click();

    cy.contains("Get started absolutely free.").should("be.visible");

    registrationPage.firstNameInputError.should(
      "contain",
      "First name required"
    );
    registrationPage.lastNameInputError.should("contain", "Last name required");
    registrationPage.emailInputError.should("contain", "Email is required");
    registrationPage.passwordInputError.should(
      "contain",
      "Password is required"
    );
  });
});
