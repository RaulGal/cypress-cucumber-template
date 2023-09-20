import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import { common } from '../../support/page_actions/common_actions';

Given("accedemos a la url {string}", (url) => {
  common.visitUrl(url); 
});