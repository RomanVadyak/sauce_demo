import { PHRASES } from "../../constants/login/pageConstants";
import { ITEM_NAME } from "../../constants/login/pageConstants";
export class AddToCart {
   sauceBackpack = "add-to-cart-sauce-labs-backpack";
   sauceBikeLight = "add-to-cart-sauce-labs-bike-light";
   cartBadge = 'span[data-test="shopping-cart-badge"]';
   completeText = 'div[data-test="complete-text"]';
   cartLink = '[data-test="shopping-cart-link"]';
   verifyBackpack = '[data-test="item-4-title-link"]';
   verifyBikeLight = '[data-test="item-0-title-link"]';

   addBackpack() {
      cy.addToCartItem(this.sauceBackpack).click();
   }
   addBikeLight() {
      cy.addToCartItem(this.sauceBikeLight).click();
   }
   checkCartBadge() {
      cy.get(this.cartBadge).should("contain", 2);
   }
   verifyPurchase() {
      cy.get(this.completeText).should("be.visible").and("have.text", PHRASES.verifyOrderMsg);
   }
   goToCart() {
      cy.get(this.cartLink).click();
   }
   verifyBackpackItem() {
      cy.get(this.verifyBackpack).should("be.visible").and("have.text", ITEM_NAME.backpack);
   }
   verifyBikeLightItem() {
      cy.get(this.verifyBikeLight).should("be.visible").and("have.text", ITEM_NAME.bikeLight);
   }
}

export const addToCart = new AddToCart();
