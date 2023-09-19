const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: true,
  retries: 0,
  viewportWidth: 1024,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  screenshotsFolder: 'reports/cucumber/screens',
  videosFolder: 'reports/cucumber/videos',
  reporterOptions: {
    reporterEnabled: 'mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'reports/mocha-junit/mocha-junit-[hash].xml',
  }
},
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
    excludeSpecPattern:'cypress/e2e/features/**/*.js',
    compilerOptions: {
      types: ["cypress", "@testing-library/cypress"]
    }
  },
});
