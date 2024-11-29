import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in with existing account as a user", () => {
    homePage.loginBtn.click();
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
    loginPage.emailInput.type("ynevmyvaka@gmail.com");
    loginPage.passwordInput.type("12345678");
    loginPage.loginBtn.click();

    //Verify user role and title
    dashboardPage.roleLbl.should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });
});
