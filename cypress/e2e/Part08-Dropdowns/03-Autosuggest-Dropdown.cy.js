/// <reference types="cypress" />

describe('Auto-suggest Dropdowns', () => {
    it('Auto-suggest Dropdown', () => {
        cy.visit('https://www.wikipedia.org')

        cy.get('#searchInput').type('Peru');
        cy.get(".suggestion-title").contains('Peruvian cuisine').click();
        
    })
})