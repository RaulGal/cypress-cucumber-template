// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'


Cypress.Commands.add('getEnv', () => {
    return cy.readFile('cypress.env.json').then((config) => {
      Cypress.env('currentEnv', Cypress.env('ENV') || 'dev'); // Si no se proporciona ENV, establecer el entorno como dev por defecto
      const envConfig = config[Cypress.env('currentEnv')];
      Cypress.env('envConfig', envConfig);
      return envConfig;
    });
  });
  