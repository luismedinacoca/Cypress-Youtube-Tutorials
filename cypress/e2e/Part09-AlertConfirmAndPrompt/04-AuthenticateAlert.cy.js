/// <reference types="cypress" />

describe("Authenticate Alerts", () => {
    /*
        Javascript Prompt Alert: It will have some text with 'OK' and 'Cancel' buttons
        Remember: Cypress automatically clicks on 'OK' and closes the prompt Alert window
        * There are some text we need to capture it.
        * How can we simulate when Prompt alert is cancelled?    
    */
    it("Js Authenticate Alert - 1st Approach", () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: {username:'admin', password:'admin'}});
        cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.');
    })    
    
    it("Js Authenticate Alert - 2nd Approach", () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.');
    })    
})