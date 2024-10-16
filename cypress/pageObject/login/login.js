import { PHRASES } from "../../constants/login/pageConstants";
export class LoginPage {
   loginPage_username = 'input[name="user-name"]';
   loginPage_password = 'input[name="password"]';
   loginPage_submit = 'input[name="login-button"]';
   errorMsg = 'h3[data-test="error"]';

   navigate() {
      cy.visit("https://www.saucedemo.com/");
   }
   enterUsername(username) {
      cy.get(this.loginPage_username).type(username);
   }
   enterPassword(password) {
      cy.get(this.loginPage_password).type(password);
   }
   clickSubmit() {
      cy.get(this.loginPage_submit).should("be.visible").click();
   }
   verifyErrorMsg() {
      cy.get(this.errorMsg).should("be.visible").and("have.text", PHRASES.errorMsg);
   }
}
export const loginPage = new LoginPage();
