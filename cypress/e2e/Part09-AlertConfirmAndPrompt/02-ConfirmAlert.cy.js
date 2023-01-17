/// <reference types="cypress" />

describe("Confirmation Alerts", () => {
    /*
        Javascript Confirm Alert: It will have some text with 'OK' and ?Cancel? buttons
        Remember: Cypress automatically clicks on 'OK' and closes the Confirm Alert window
        * There are some text we need to capture it.
        * How can we simulate when caonfirm alert is cancelled?    
    */
    it.skip("Js Confirm Alert - OK", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onCLick='jsConfirm()']").click()

        //capture the alert window message:
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        })
        //Cypress automatically closed alert window by using OK button-default

        //assertion mesthod for confirming alert was successfully closed
        cy.get('#result').should('have.text', 'You clicked: Ok');
    })

    
    it("Js Confirm Alert - Cancel", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onCLick='jsConfirm()']").click()

        //capture the alert window message:
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        })

        //Cypress will close Confirm Window using 'Cancel' button
        cy.on('window:confirm', () => false)

        /*
        Default behavior is clicking on 'Ok'
            cy.on('window:confirm', () => true)
        Not needed to add it
        */

        //assertion mesthod for confirming alert was successfully closed
        cy.get('#result').should('have.text', 'You clicked: Cancel');
    })
})