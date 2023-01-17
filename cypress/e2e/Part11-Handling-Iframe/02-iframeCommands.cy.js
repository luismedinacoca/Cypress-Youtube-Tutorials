/// <reference types="cypress" />

describe('Handling Iframes', () => {
    
    it('Approach by using Custom Command - Iframe', ()=> {

        // ! Look for in support/commands.js > getIframe 
        cy.visit('https://the-internet.herokuapp.com/iframe')

        // * from custom command inside support/commands.js
        cy.getIframe('#mce_0_ifr').clear().type('Luis Medina {cmd+a}')
        
        cy.wait(2000);

        cy.get('[aria-label="Bold"]').click();
    })
})