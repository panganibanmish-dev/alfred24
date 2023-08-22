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

import "cypress-real-events/support";
// import 'cypress-mochawesome-reporter/register';
import "@shelex/cypress-allure-plugin";

Cypress.Commands.add("login", (username, password) => {
  cy.session(
    [username, password],
    () => {
      cy.viewport(1800, 1000);
      cy.visit("/login");
      cy.get(
        "div[class='relative flex items-center'] input[placeholder='Your email or username']"
      ).type(username);
      cy.get(
        "div[class='relative flex items-center'] input[placeholder='Your password']"
      ).type(password);
      cy.get("input#rememberMe").click();
      // cy.intercept('GET', '/chunks').as('postLogin');
      cy.get('div[class="relative mt-20"] span button[type="submit"]').click();
      cy.wait(3000);
      // cy.visit('/order/listing/');
    },
    {
      cacheAcrossSpecs: true,
    }
  );
});
