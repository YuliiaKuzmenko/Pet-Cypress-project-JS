import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Login", () => {
  beforeEach(() => {
  cy.visit("/");
  });

  it("Should log in with existing account as a user", () => {
    //Verify user role and title
    dashboardPage.fullUserNm.should("have.text", "Yuliia  Kuzmenko");
    dashboardPage.roleLbl.should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
    dashboardPage.userIconBtn.click();
    dashboardPage.userEmail.should("have.text", "ynevmyvaka@gmail.com");

  });
});
