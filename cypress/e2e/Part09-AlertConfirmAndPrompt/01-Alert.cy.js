/// <reference types="cypress" />

describe("Alerts", () => {
    /*
        Javascript Alert: It will have some text and an ´OK´ button
        Remember: Alert window automatically closed by cypress    
    */
    it("Js Alert", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onCLick='jsAlert()']").click()

        //capture the alert window message:
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert');
        })

        //assertion mesthod for verifying the alert was successfully closed
        cy.get('#result').should('have.text', 'You successfully clicked an alert');
    })
})