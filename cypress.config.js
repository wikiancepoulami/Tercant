const { defineConfig } = require("cypress")

module.exports = defineConfig({
  "projectId":"9gq9aj",
  "fixturesFolder": false,
  "viewportWidth": 1500,
  "viewportHeight": 1000,
  "reporter": "../node_modules/mochawesome/src/mochawesome.js",
  "reporterOptions": {
      "overwrite": false,
      "html": false,
      "json": true,
      "trashAssetsBeforeRuns": true,
      "screenshotOnRunFailure": true,
      "screenshotsFolder": "cypress/screenshots",
      "slowTestThreshold": 10000,
      
  },
  e2e: {
    // supportFile: false,
    setupNodeEvents(on, config) {
      // return require('./cypress/plugins/index.js')(on, config)
      // implement node event listeners here
      // on("task", {
      //   generateOTP: require("cypress-otp")
      // });
    },
  },
});
