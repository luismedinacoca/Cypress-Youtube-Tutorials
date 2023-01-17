/// <reference types="cypress" />

describe('Browser Navigation', () => {

    it('Navigation Test', () => {

        //Homepage
        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq', 'Your Store');
        
        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('h2').should('have.text', 'Cameras');
        cy.wait(2000);
        
        cy.go('back')
        cy.title().should('eq', 'Your Store');
        cy.wait(2000);
        
        cy.go('forward')
        cy.get('h2').should('have.text', 'Cameras');
        cy.title().should('eq', 'Cameras');
        cy.wait(2000);

        cy.go(-1)
        cy.title().should('eq', 'Your Store');
        cy.wait(2000);
        
        cy.go(+1)
        cy.get('h2').should('have.text', 'Cameras');
        cy.title().should('eq', 'Cameras');
        cy.wait(2000);

        cy.reload();
    })
})