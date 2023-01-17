/// <reference types="cypress" />

describe("Authenticate Alerts", () => {
    it('Handle a tab - Approach 01', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example > a').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

        cy.wait(2000)

        //operation:
        cy.go('back') //back to parent tab
        cy.get('h3').should('be.visible').should('have.text', 'Opening a new window');
    })
    
    it('Handle a tab - Approach 02', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example > a').then( e => {
            //capture the new link
            let url = e.prop('href');
            
            //visit the new captured link:
            cy.visit(url);
            
            // * target option might have the same domain as the first link.
        })
        
        // assertion:
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

        cy.wait(2000)

        //operation:
        cy.go('back') //back to parent tab
        cy.get('h3').should('be.visible').should('have.text', 'Opening a new window');
    })
})