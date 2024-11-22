import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";

describe('Sign-up-with-empty-fields', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Should register a new user account', () => {
      homePage.registerBtn.click();
      registrationPage.submitBtn.click();
    

    cy.contains('Get started absolutely free.').should('be.visible')

    //Verify validation messages for each field
    registrationPage.firstNameInputError.should('contain', 'First name required');
    registrationPage.lastNameInputError.should('contain', 'Last name required');
    registrationPage.emailInputError.should('contain', 'Email is required');
    registrationPage.passwordInputError.should('contain', 'Password is required');

})

})