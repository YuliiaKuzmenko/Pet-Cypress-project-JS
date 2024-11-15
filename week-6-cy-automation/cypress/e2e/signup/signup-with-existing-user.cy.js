import { faker } from '@faker-js/faker';

const email =  faker.internet.email();
const password = faker.string.uuid();

describe('Registration with existing user', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Should not register with an already existin email account', () => {
      cy.get('[href="/auth/register"]').click();
      cy.get('[name="firstName"]').type('Yuliia')
      cy.get('[name="lastName"]').type('Kuzmenko')
      cy.get('[name="email"]').type(email)
      cy.get('[name="password"]').type(password)
      cy.get('[type="submit"]').click();
     
     
      //Verify user role, name, url and page title
      cy.get('a p').should('have.text', 'role: user');
      cy.get('h6').should('have.text', 'Yuliia  Kuzmenko');
      cy.title().should('eq', 'User: Profile | Delek Homes');
      cy.url().should('include', 'dashboard/user/profile');

      //Click user icon and logout button
      cy.get('button [class*= "MuiAvatar-root"]').click();
      cy.contains('Logout').click();
      

     
      cy.get('[href="/auth/register"]').click();
      cy.get('[name="firstName"]').type('Yuliia')
      cy.get('[name="lastName"]').type('Kuzmenko')
      cy.get('[name="email"]').type(email)
      cy.get('[name="password"]').type(password)
      cy.get('[type="submit"]').click();
       

    //Verify validation message for existing user
    cy.get('[role="alert"]').should('be.visible').and('contain', 'Input data validation failed');
  })
})
  