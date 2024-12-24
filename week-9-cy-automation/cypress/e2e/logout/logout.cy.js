import dashboardPage from "../../page_objects/dashboard.page";

describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginApi();
    cy.visit("/dashboard/user/profile");
  });

  it("Should log out", () => {
    cy.title().should("eq", "User: Profile | Delek Homes");
    dashboardPage.userIconButton.click();
    dashboardPage.logoutButton.click();

    cy.contains("Sign in to Delek Homes").should("be.visible");
  });
});
