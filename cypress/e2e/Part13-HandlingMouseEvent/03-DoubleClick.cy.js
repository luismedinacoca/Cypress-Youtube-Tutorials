/// <reference types="cypress" />
import 'cypress-iframe';

describe('Handling Mouse Event', () => {
    it("Double Click - 1st apporach", () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

        cy.frameLoaded("#iframeResult");
        cy.iframe("#iframeResult").find('button[ondblclick="myFunction()"]').trigger('dblclick');
        cy.iframe("#iframeResult").find("#field2").should('have.value', 'Hello World!');
    });
    
    it.only("Double Click - 2nd apporach", () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

        cy.frameLoaded("#iframeResult");
        cy.iframe("#iframeResult").find('button[ondblclick="myFunction()"]').dblclick();
        cy.iframe("#iframeResult").find("#field2").should('have.value', 'Hello World!');
    });
})