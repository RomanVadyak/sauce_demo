import { PHRASES } from "../../constants/login/pageConstants";
export class LogoutPage {
   checkoutButton = '[data-test="checkout"]';
   checkOutInformation = ".checkout_info";
   continueButton = '[data-test="continue"]';
   finishButton = 'button[name="finish"]';
   completeCheckout = '[data-test="complete-text"]';
   backToProd = 'button[name="back-to-products"]';
   BrgrMenu = 'button[id="react-burger-menu-btn"]';
   navItemList = 'nav[class="bm-item-list"]';
   logOutButton = 'a[data-test="logout-sidebar-link"]';
   submitButton = 'input[name="login-button"]';
   checkOutBtn() {
      cy.get(this.checkoutButton).should("be.visible").click();
   }
   checkOutInfo() {
      cy.get(this.checkOutInformation).should("be.visible");
   }
   continueBtn() {
      cy.get(this.continueButton).click();
   }
   finishBtn() {
      cy.get(this.finishButton).should("be.visible").click();
   }
   verifyCompleteCheckout() {
      cy.get(this.completeCheckout).should("be.visible").and("have.text", PHRASES.verifyOrderMsg);
   }
   backToProducts() {
      return cy.get(this.backToProd).click();
   }
   burgerMenu() {
      return cy.get(this.BrgrMenu).click();
   }
   navList() {
      cy.get(this.navItemList).should('be.visible');
   }
   logOutBtn() {
      return cy.get(this.logOutButton).click();
   }
   submitBtn() {
      cy.get(this.submitButton).should('be.visible');
   }
}


