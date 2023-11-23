const { defineConfig } = require("cypress");
const cucumber = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// const cucumber = require('cypress-cucumber-preprocessor');

module.exports = defineConfig({
  // Habilita la seguridad web de Chrome
  chromeWebSecurity: true,
  // Número de reintentos para las pruebas
  retries: 0,

  // Ancho de la ventana gráfica de la prueba
  viewportWidth: 1024,

  // Alto de la ventana gráfica de la prueba
  viewportHeight: 768,

  // Tiempo de espera predeterminado para los comandos Cypress
  defaultCommandTimeout: 10000,

  // Tiempo de espera predeterminado para las solicitudes de red
  requestTimeout: 10000,

  // Carpeta donde se guardarán las capturas de pantalla
  screenshotsFolder: 'reports/cucumber/screens',

  // Carpeta donde se guardarán los videos de las pruebas
  videosFolder: 'reports/cucumber/videos',

  reporterOptions: {
    // Habilita el reportero Mocha JUnit
    reporterEnabled: 'mocha-junit-reporter',

    // Opciones para el reportero Mocha JUnit
    mochaJunitReporterReporterOptions: {
      // Ruta donde se guardará el archivo de informe Mocha JUnit
      mochaFile: 'reports/mocha-junit/mocha-junit-[hash].xml',
  }
},
  e2e: {
    // Configuración de eventos de nodo para el preprocesador de Cucumber
    setupNodeEvents: async function (on, config) {
        // Agrega el preprocesador de Cucumber al flujo de eventos de Cypress
      await cucumber.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
      return config;
    },
    // Patrón para buscar archivos de definición de características (.feature)
    specPattern: 'cypress/e2e/features/*.feature',
    // Patrón para excluir archivos JavaScript en el patrón anterior
    excludeSpecPattern:'cypress/e2e/features/*.js',
    compilerOptions: {
      types: ["cypress", "@testing-library/cypress"]
    }
  },
});
