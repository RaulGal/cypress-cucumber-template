///<reference types="cypress"/>

const cucumber = require("cypress-cucumber-preprocessor").default;
/**
* @type {Cypress.PluginConfig}
*/
module.exports = (on, config) => {

    on("file:preprocessor", cucumber({
        stepDefinitions: 'cypress/e2e/**/*.js',
    }));

    on("before:browser:launch", (browser = {}, launchOptions) => {
        if(browser.family === "chromium" && browser.name !== "electron"){
            launchOptions.args.push("--lang=es");
        } else if(browser.name === "electron"){
            launchOptions.preferences.lang = "es";
        }
        return launchOptions
    });       
       
}