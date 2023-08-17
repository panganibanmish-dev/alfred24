const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://stg.parcelpro.alfred24.com.hk/en",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      login_username: "jett",
      login_password: "9wacn9kLVSUzpG4y",
    },
  },
  requestTimeout: 50000,
  numTestsKeptInMemory: 0,
  numTestsKeptInMemory: 0,
  responseTimeout: 30000,
  pageLoadTimeout: 80000,
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 50000,
  video: true,
});
