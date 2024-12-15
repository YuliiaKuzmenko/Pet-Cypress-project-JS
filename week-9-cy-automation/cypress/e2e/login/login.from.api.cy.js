import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";

describe("Login", () => {
  beforeEach(() => {
  cy.loginApi();
  cy.visit("/dashboard/user/profile");
  });

  it("Log in by using Token from API", () => {
    //Verify user role and title
    dashboardPage.fullUserNm.should("have.text", "Yuliia  Kuzmenko");
    dashboardPage.roleLbl.should("have.text", "role: realtor");
    cy.title().should("eq", "User: Profile | Delek Homes");
    dashboardPage.userIconBtn.click();
    dashboardPage.userEmail.should("have.text", "ynevmyvaka@gmail.com");
});
});

