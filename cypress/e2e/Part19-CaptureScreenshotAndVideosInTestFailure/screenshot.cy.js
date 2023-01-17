/// <reference types="cypress" />

describe('How to capture Screenshot and Videos in test failure', () => {
    it('Screenshots', () => {
        cy.visit('https://demo.opencart.com/');
        cy.screenshot('Homepage- Opencart')

        cy.get('img[title="Your Store"]').screenshot('logo');
    })
})