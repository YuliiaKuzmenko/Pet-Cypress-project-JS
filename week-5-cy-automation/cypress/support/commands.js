// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import "cypress-file-upload";

Cypress.Commands.add("loginApi", (role = "Admin") => {
  cy.fixture("testData/userCredentials.json").then((users) => {
    const { email, password } = users[role];
    cy.request("POST", "/api/users/login", {
      email: email,
      password: password,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
  });
});

Cypress.Commands.add("deleteListing", (listingUrl) => {
  // Visit the listings page
  cy.visit(listingUrl);

  // Click on the "More Info" button to navigate to the listing details page
  cy.get("div:nth-of-type(1) [class *= 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeM']").first().click(); // Update selector if needed

  // Extract the ID from the URL
  cy.url().then((currentUrl) => {
    const id = currentUrl.split("/").pop(); // Extract the ID from the URL
    cy.log("Extracted ID:", id);

    // Use the extracted ID to send a DELETE request
    cy.request({
      method: "DELETE",
      url: `/api/estate-objects/${id}`, // Use the extracted ID
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`, // Add authorization token
      },
    }).then((response) => {
      // Validate the response
      expect(response.status).to.eq(200);
      cy.log("Listing successfully removed");
    });
  });
});


Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
