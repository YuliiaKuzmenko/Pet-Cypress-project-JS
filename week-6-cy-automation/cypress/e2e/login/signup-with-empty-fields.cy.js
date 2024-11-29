describe("Sign-up-with-empty-fields", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[type="submit"]').click();

    cy.contains("Get started absolutely free.").should("be.visible");

    //Verify validation messages for each field
    cy.get('[id*=":r5:-helper-text"]').should("contain", "First name required");
    cy.get('[id*=":r6:-helper-text"]').should("contain", "Last name required");
    cy.get('[id*=":r7:-helper-text"]').should("contain", "Email is required");
    cy.get('[id*=":r8:-helper-text"]').should(
      "contain",
      "Password is required"
    );
  });
});
