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

const authorization = require("../fixtures/authorization_page.json")

Cypress.Commands.add("login", (email, password) => {
    //cy.contains('Log in').click();
    cy.get(authorization.email).type(email);
    cy.get(authorization.password).type(password);
    cy.contains("Авторизоваться").click();
});

Cypress.Commands.add("text", {
    prevSubject: true
}, (subject, options) => {
    return subject.text();
});