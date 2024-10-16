const { defineConfig } = require("cypress");

module.exports = defineConfig({
   e2e: {
      chromeWebSecurity: false,
      baseUrl: "https://www.saucedemo.com/",
      specPattern: "cypress/e2e/**/**.cy.js",
      watchForFileChanges: false,
      setupNodeEvents(on, config) {
         // implement node event listeners here
      },
   },
});
