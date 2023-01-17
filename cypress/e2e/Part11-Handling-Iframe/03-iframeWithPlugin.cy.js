/// <reference types="cypress" />

describe('Handling Iframes', () => {

    it('Approach by using Cypress-iframe plugin', ()=> {
        /*
            https://www.npmjs.com/package/cypress-iframe
            
            1. plugin installation
            $ npm install -D cypress-iframe

            2. adding inside cypress/support/commands.js
            import 'cypress-iframe';

            3. callback as:
            cy.frameLoaded();

        */

        cy.visit('https://the-internet.herokuapp.com/iframe')

        //This command checks that an iframe has loaded onto the page
        cy.frameLoaded('#mce_0_ifr')

        //This will cause subsequent commands to be executed inside of the given iframe
        cy.iframe('#mce_0_ifr').clear().type('Cypress Automation {cmd+a}')

        cy.wait(2000);

        cy.get('[aria-label="Bold"]').click();
        
    })
})