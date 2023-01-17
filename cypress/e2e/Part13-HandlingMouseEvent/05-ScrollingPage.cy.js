/// <reference types="cypress" />
require('@4tw/cypress-drag-drop');

describe('Handling Mouse Event', () => {

    it("Scrolling Page", () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
        cy.wait(1000);
        
        cy.get(':nth-child(2) > tbody > :nth-child(41) > :nth-child(1)').scrollIntoView();
        cy.get(':nth-child(2) > tbody > :nth-child(41) > :nth-child(1)').should('be.visible');
        cy.wait(1500);
        
        cy.get(':nth-child(1) > tbody > :nth-child(8) > :nth-child(1) > img').scrollIntoView();
        cy.get(':nth-child(1) > tbody > :nth-child(8) > :nth-child(1) > img').should('be.visible');
        cy.wait(1500);

        cy.get("#footer").scrollIntoView({duration:2000})
    });

})