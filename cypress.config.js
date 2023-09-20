const { defineConfig } = require("cypress");
const cucumber = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// const cucumber = require('cypress-cucumber-preprocessor');

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
    setupNodeEvents: async function (on, config) {
      // Esto es requerido para que el preprocesador pueda generar informes JSON después de cada ejecución, y más.
      await cucumber.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
      return config;
    },
    specPattern: 'cypress/e2e/features/*.feature',
    excludeSpecPattern:'cypress/e2e/features/*.js',
    compilerOptions: {
      types: ["cypress", "@testing-library/cypress"]
    }
  },
});
