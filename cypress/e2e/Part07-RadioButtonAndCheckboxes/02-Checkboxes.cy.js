/// <reference types="cypress" />


describe('Checkboxes', () => {
    it('Verifying Checkboxes', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        
        //visibility
        cy.get('input#monday').should('be.visible');
        
        //selecting:
        cy.get('input#monday').check().should('be.checked');
        
        //Unchecking:
        cy.get('input#monday').uncheck().should('not.be.checked');
    })
    
    it('Checking all checkboxes', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        
        //checking all checkboxes:
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked');
        cy.wait(2000);
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked');  
    })

    it('Checking First and Last checkboxes', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');

        //checking the first element:
        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked');

        cy.wait(1500);

        //checking the last element:
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked');
    })
})