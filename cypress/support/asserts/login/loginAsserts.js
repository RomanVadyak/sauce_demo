export const proceedOnMainPage = () => {
   cy.visit("/");
   cy.url().should("contain", "saucedemo.com/");
   cy.get(".login_container").should("exist").and("not.be.empty");
};
