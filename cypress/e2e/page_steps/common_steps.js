import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import { common } from '../../support/page_actions/common_actions';

Given("accedemos a la url {string}", (url) => {
  common.visitUrl(url); 
});

When("usuario hace click en el boton {string}", (name) => {
  common.clickButtonName(name);
});

When("usuario hace click en el elemento {string}", (name) => {
  common.clickElementName(name);
});

When("accedemos a la url de ejemplo", () => {
  common.visitUrlEnv();
});

When("usuario hace click en el elemento {string} numero {int}", (name, number) => {
  common.clickElementNameWithNumber(name, number);
});

When("esperamos {int} segundos", (number) => {
  const seconds = number * 1000 
  cy.wait(seconds);
});

