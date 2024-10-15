
export class LoginPage {

    loginPage_username = 'input[name="user-name"]';
    loginPage_password = 'input[name="password"]';
    loginPage_submit = 'input[name="login-button"]';

    navigate() {
        cy.visit('https://www.saucedemo.com/');
    }
    enterUsername(username) {
        cy.get(this.loginPage_username).type(username);
    }
    enterPassword(password) {
        cy.get(this.loginPage_password).type(password);
    }
    clickSubmit() {
        cy.get(this.loginPage_submit).should('be.visible').click();
    }
}

