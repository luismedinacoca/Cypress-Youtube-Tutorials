/// <reference types="cypress" />

describe('Handling Links', () => {
    it('Accessing to any link direect', () => {
        cy.visit("https://demo.nopcommerce.com")
        
        cy.get(':nth-child(2) > .product-item > .details > .product-title').click()
        cy.wait(2000);
        cy.get('.product-name > h1').should('have.text', 'Apple MacBook Pro 13-inch');
    })
    
    it('Accessing to any link with custom command', () => {
        cy.visit("https://demo.nopcommerce.com")
        
        //custom command
        cy.clickLink('Apple MacBook Pro 13-inch');
        
        cy.wait(2000);
        cy.get('.product-name > h1').should('have.text', 'Apple MacBook Pro 13-inch');
    })
})