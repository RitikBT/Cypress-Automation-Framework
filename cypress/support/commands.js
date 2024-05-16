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

/// <reference types="cypress-xpath" />
/// <reference types="Cypress" />

cy.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  return false;
})

Cypress.Commands.add('logger', (filename, message) => {
  // Define the log file path based on the filename parameter
  const logFilePath = `cypress/logs/${filename}.log`;

  // Create or append to the log file
  cy.writeFile(logFilePath, `[${new Date().toISOString()}] ${message}\n`, { flag: 'a+' });
});

Cypress.Commands.add('login', (userId, password) => {
  cy.logger('application', "Launching the application");
  cy.visit((Cypress.env('URL')));
  cy.logger('application', "Entering User Id");
  cy.get("input[name=username]").type(userId);
  cy.logger('application', "Entering user password");
  cy.get("input[name=password]").type(password);
  cy.logger('application', "Clicking on Login button");
  cy.get("button[type=submit]").click();
  cy.logger('application', "Login Successfully.")

})

