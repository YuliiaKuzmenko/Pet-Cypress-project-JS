class RegistrationPage {
  get firstNameInpt() {
    return cy.get('[name="firstName"]');
  }
  get lastNameInpt() {
    return cy.get('[name="lastName"]');
  }
  get emailInpt() {
    return cy.get('[name="email"]');
  }
  get passwordInpt() {
    return cy.get('[name="password"]');
  }
  get submitBtn() {
    return cy.get('[type="submit"]');
  }

  get firstNameInptError() {
    return cy.get('[id*=":r5:-helper-text"]');
  }
  get lastNameInptError() {
    return cy.get('[id*=":r6:-helper-text"]');
  }
  get emailInptError() {
    return cy.get('[id*=":r7:-helper-text"]');
  }
  get passwordInptError() {
    return cy.get('[id*=":r8:-helper-text"]');
  }
}

export default new RegistrationPage();
