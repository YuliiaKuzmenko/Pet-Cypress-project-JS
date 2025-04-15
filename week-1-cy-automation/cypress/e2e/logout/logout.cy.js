describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log out", () => {
    //Click login button on homepage
    cy.get('[href="/auth/login"]').click();
    // Type in username/password
    cy.get('[name="email"]').type("ynevmyvaka@gmail.com");
    cy.get('[name="password"]').type("12345678");
    //Click login button
    cy.contains("Login").click();
    //Verify user role and title
    cy.get("a p").should("have.text", "role: user");
    //Verify name as well
    cy.title().should("eq", "User: Profile | Delek Homes");

    //Click on user icon
    cy.get('button [class*= "MuiAvatar-root"]').click();
    cy.contains("Logout").click();

    cy.contains("Sign in to Delek Homes").should("be.visible");
  });
});
