import homePage from "./home.page";

class LoginPage {
  get emailInpt() {
    return cy.get('[name="email"]');
  }
  get passwordInpt() {
    return cy.get('[name="password"]');
  }
  get loginBtn() {
    return cy.contains("Login");
  }
  get InvalidDataAlr() {
    return cy.get('[role="alert"]');
  }

  login(email, password) {
    this.emailInpt.type(email);
    this.passwordInpt.type(password);
    this.loginBtn.click();
  }
}
export default new LoginPage();
