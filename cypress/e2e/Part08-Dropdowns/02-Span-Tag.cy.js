/// <reference types="cypress" />

describe('Dropdowns', () => {
    it('Dropdown without select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        //select the dropdown:
        cy.get('#select2-billing_country-container').click()

        //focus in the textfield available for entry value
        cy.get('.select2-search__field').type('Peru').type('{enter}');

        //Go back to dropdown for erify the entry value.
        cy.get('#select2-billing_country-container').should('have.text', 'Peru');
        
    })
})