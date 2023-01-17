/// <reference types="cypress" />

describe('Handling Iframes', () => {
    it('1st approach - Iframe', ()=> {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        let iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type('Luis Medina {cmd+a}')

        cy.wait(2000);

        cy.get('[aria-label="Bold"]').click();
    })
})