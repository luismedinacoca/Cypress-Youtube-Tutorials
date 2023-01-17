/// <reference types="cypress" />

describe('Handling Mouse Event', () => {

    it("Right Click - 1st approach", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get('.context-menu-one').trigger('contextmenu')
        cy.get('.context-menu-icon-copy').should('be.visible');
        cy.wait(2500)
        
    });

    it("Right Click - 2nd approach", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-icon-copy').should('be.visible');
        
    });
})