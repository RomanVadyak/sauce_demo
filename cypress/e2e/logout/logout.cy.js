import { proceedOnMainPage } from "../../support/asserts/login/loginAsserts";
import { AddToCart } from "../../pageObject/addToCart/addToCartObj";
import { PLACEHOLDERS } from "../../constants/login/pageConstants";
import { LogoutPage } from "../../pageObject/logout/logout";
const logOut = new LogoutPage();
const addToCart = new AddToCart();
describe("Check Out and Log Out", () => {
   beforeEach(() => {
      proceedOnMainPage();
      cy.logIn();
      addToCart.addBackpack();
      addToCart.addBikeLight();
      addToCart.goToCart();
   });
   it("Verifying purchase and Log Out", () => {
      logOut.checkOutBtn();
      logOut.checkOutInfo();
      PLACEHOLDERS.forEach((data) => {
         const [selector, placeholder, value] = data;
         cy.get(selector).should("have.attr", "placeholder", placeholder);
         cy.get(selector).type(value);
      });
      logOut.continueBtn();
      cy.verifyTotal(29.99, 9.99);
      logOut.finishBtn();
      logOut.verifyCompleteCheckout();
      logOut.backToProducts();
      logOut.burgerMenu();
      logOut.navList();
      logOut.logOutBtn();
      logOut.submitBtn();
   });
});
