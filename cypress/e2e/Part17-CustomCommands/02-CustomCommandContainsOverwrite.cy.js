/// <reference types="cypress" />

describe('Handling Links', () => {
    
    it('Accessing to any link with custom command', () => {
        cy.visit("https://demo.nopcommerce.com")
        
        //custom command
        cy.clickLink('APPLE MACBOOK PRO 13-inch');
        
        cy.wait(2000);
        cy.get('.product-name > h1').should('have.text', 'Apple MacBook Pro 13-inch');
    })
})