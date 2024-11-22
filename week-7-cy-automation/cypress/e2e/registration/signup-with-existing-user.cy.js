import { faker } from '@faker-js/faker';

import homePage from '../../page_objects/home.page';
import registrationPage from '../../page_objects/registration.page';
import dashboardPage from '../../page_objects/dashboard.page';
import loginPage from '../../page_objects/login.page';

const email =  faker.internet.email();
const password = faker.string.uuid();

describe('Registration with existing user', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Should not register with an already existin email account', () => {
      homePage.registerBtn.click();
      registrationPage.firstNameInput.type('Yuliia')
      registrationPage.lastNameInput.type('Kuzmenko')
      registrationPage.emailInput.type(email)
      registrationPage.passwordInput.type(password)
      registrationPage.submitBtn.click();
     
     
      //Verify user role, name, url and page title
      dashboardPage.roleLbl.should('have.text', 'role: user');
      dashboardPage.fullNameLbl.should('have.text', 'Yuliia  Kuzmenko');
      cy.title().should('eq', 'User: Profile | Delek Homes');
      cy.url().should('include', 'dashboard/user/profile');

      //Click user icon and logout button
      dashboardPage.userIconBtn.click();
      dashboardPage.logoutBtn.click();
      

     
      homePage.registerBtn.click();
      registrationPage.firstNameInput.type('Yuliia')
      registrationPage.lastNameInput.type('Kuzmenko')
      registrationPage.emailInput.type(email)
      registrationPage.passwordInput.type(password)
      registrationPage.submitBtn.click();
       

    //Verify validation message for existing user
    loginPage.InvalidDataAlr.should('be.visible').and('contain', 'Input data validation failed');
  })
})
  