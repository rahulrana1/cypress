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
Cypress.Commands.add("login", (email, password) => {
    cy.get('[name=email]').type(email)
    cy.get('[name=password]').type(password)
    cy.contains('Sign in').click()
})

Cypress.Commands.add("login", (email, password) => {
    cy.get('.button.signIn').click()
    cy.get('[name=email]').type(email)
    cy.get('[name=password]').type(password)
    cy.contains('Sign in').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
