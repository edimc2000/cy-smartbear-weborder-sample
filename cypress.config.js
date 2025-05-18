const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  env: {
    APP_BASE_URL: "http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/",
    USERNAME: process.env.UI_USERNAME,
    PASSWORD: process.env.UI_PASSWORD
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  },
});