class RegistrationPage {
    get firstNameInpt() {return cy.get('[name="firstName"]')};
    get lastNameInpt() {return cy.get('[name="lastName"]')};
    get emailInpt() {return cy.get('[name="email"]')};
    get passwordInpt() {return cy.get('[name="password"]')};
    get submitBtn() {return cy.get('[type="submit"]')};

    
}

export default new RegistrationPage();