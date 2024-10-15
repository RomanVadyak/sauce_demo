
import { LoginPage } from "../pageObject/loginPage";

const loginPage = new LoginPage();
describe('Sauce Demo', () => {
    beforeEach(() => {
        loginPage.navigate();
    });


    it('Status', () => {
        cy.request('https://www.saucedemo.com/').its('status').should('eq', 200);
    });



    it('Valid Login', () => {
        cy.logIn('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
    });

    it('Invalid Login', () => {
        cy.logIn('admin1', 'admin2');
        cy.get('h3[data-test="error"]').should('be.visible')
            .and('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Add to cart', () => {
        cy.logIn('standard_user', 'secret_sauce');
        cy.addToCart("add-to-cart-sauce-labs-backpack");
        cy.addToCart("add-to-cart-sauce-labs-bike-light");
        cy.get('span[data-test="shopping-cart-badge"]').should('contain', 2);
    });

    it('Buy and log out', () => {
        cy.logIn('standard_user', 'secret_sauce');
        cy.addToCart("add-to-cart-sauce-labs-backpack");
        cy.addToCart("add-to-cart-sauce-labs-bike-light");
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="item-4-title-link"]').should('be.visible')
            .and('have.text', 'Sauce Labs Backpack');
        cy.get('[data-test="item-0-title-link"]').should('be.visible')
            .and('have.text', 'Sauce Labs Bike Light');


        //Proceeding to checkout and fill the information page
        cy.get('[data-test="checkout"]').should('be.visible').click();
        cy.get('.checkout_info').should('be.visible');
        cy.get('[data-test="firstName"]').should('have.attr', 'placeholder', 'First Name').type('John');
        cy.get('[data-test="lastName"]').should('have.attr', 'placeholder', 'Last Name').type('Williams');
        cy.get('[data-test="postalCode"]').should('have.attr', 'placeholder', 'Zip/Postal Code').type('54321');
        cy.get('[data-test="continue"]').click();

        //Custom Command to verify total amount
        cy.verifyTotal(29.99, 9.99);

        //verify Checkout: Complete! page
        cy.get('button[name="finish"]').click();
        cy.get('span[data-test="title"]').should('be.visible')
            .and('have.text', 'Checkout: Complete!');
        cy.get('div[data-test="complete-text"]').should('be.visible')
            .and('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');


        //Log Out 
        cy.get('button[name="back-to-products"]').click();
        cy.get('button[id="react-burger-menu-btn"]').click();
        cy.get('nav[class="bm-item-list"]').should('be.visible');
        cy.get('a[data-test="logout-sidebar-link"]').click();
        cy.get('input[name="login-button"]').should('be.visible');

    })
});
