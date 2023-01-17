/// <reference types="cypress" />

describe('Dynamic Dropdowns', () => {
    it('Dynamic Dropdown', () => {
        cy.visit('https://www.google.com')

        cy.get('input[name="q"]').type('Cypress Automation');

        //assertion related to length
        cy.get("div.wM6W7d>span").should('have.length', 11);

        //selecting one of the options:
        cy.get("div.wM6W7d>span").each( ($el, index, $list) => {
            if( $el.text() == 'cypress automation jobs'){
                $el.click()
            }
        })
        cy.get('input[name="q"]').should('have.value', 'cypress automation jobs')
    })
})