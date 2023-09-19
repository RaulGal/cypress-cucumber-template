import { Given } from "cypress-cucumber-preprocessor/steps";

Given("accedemos a la url", () => {
  // Aquí debes escribir el código para acceder a la URL en tu prueba de Cypress.
  cy.visit("https://tu-url.com"); // Reemplaza "tu-url.com" con la URL real que deseas visitar.
});