/// <reference types="cypress" />

describe('Radio Buttons selection', () => {
    it('Checking Radio Buttons', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        cy.get('input#female').should('be.visible');
        cy.get('input#male').should('be.visible');
        cy.get('input#other').should('be.visible');
        cy.get('input#other').should('be.disabled');
    })

    it('Selecting Radio Buttons', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');

        //selecting female radio button:
        cy.get('input#female').check().should('be.checked');
        cy.get('input#male').should('not.be.checked');
        cy.get('input#other').should('not.be.checked');

        cy.wait(1500);

        //selecting male radio button
        cy.get('input#male').check().should('be.checked');
        cy.get('input#female').should('not.be.checked');
        cy.get('input#other').should('not.be.checked');
    })
})