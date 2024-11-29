class RegistrationPage {
  get firstNameInput() {
    return cy.get('[name="firstName"]');
  }
  get lastNameInput() {
    return cy.get('[name="lastName"]');
  }
  get emailInput() {
    return cy.get('[name="email"]');
  }
  get passwordInput() {
    return cy.get('[name="password"]');
  }
  get submitBtn() {
    return cy.get('[type="submit"]');
  }

  get firstNameInputError() {
    return cy.get('[id*=":r5:-helper-text"]');
  }
  get lastNameInputError() {
    return cy.get('[id*=":r6:-helper-text"]');
  }
  get emailInputError() {
    return cy.get('[id*=":r7:-helper-text"]');
  }
  get passwordInputError() {
    return cy.get('[id*=":r8:-helper-text"]');
  }
}

export default new RegistrationPage();
