import { proceedOnMainPage } from "../../support/asserts/login/loginAsserts";
import { LoginPage } from "../../pageObject/login/login";
const loginPage = new LoginPage();
describe("log In", () => {
   beforeEach(() => {
      proceedOnMainPage();
   });
   context("Positive log In", () => {
      it("login", () => {
         cy.logIn();
         cy.url().should("include", "/inventory.html");
         cy.get(".inventory_container").should("be.visible");
      });
   });
   context("Negative log In", () => {
      it("Negative log In", () => {
         cy.logIn("admin1", "admin2");
         loginPage.verifyErrorMsg();
      });
   });
});
