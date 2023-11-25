const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 200000,
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      pageLoadTimeout: 200000
    },
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    pageLoadTimeout: 200000
  },
});

