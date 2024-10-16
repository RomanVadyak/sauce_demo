import { proceedOnMainPage } from "../../support/asserts/login/loginAsserts";
import { AddToCart } from "../../pageObject/addToCart/addToCartObj";
const addToCart = new AddToCart();
describe("Buy some staff", () => {
   beforeEach(() => {
      proceedOnMainPage();
      cy.logIn();
   });
   it("Add items to cart and check the cart icon update", () => {
      addToCart.addBackpack();
      addToCart.addBikeLight();
      addToCart.checkCartBadge();
      addToCart.goToCart();
      addToCart.verifyBackpackItem();
      addToCart.verifyBikeLightItem();
   });
});
