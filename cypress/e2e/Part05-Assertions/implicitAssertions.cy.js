/// <reference types="cypress" />

describe('Assertion demo', () => {
    it('Implicit assertion', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.wait(1500);

        //assertion regarding URL:
        cy.log('each with cy.url().should(...)')
        cy.url().should('include', 'inventory.html');
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.url().should('contain', 'html');
        
        cy.wait(2000);
        
        cy.log('one cy.url().should(...) then .should(...) follows')
        cy.url().should('include', 'inventory.html')
        .should('eq', 'https://www.saucedemo.com/inventory.html')
        .should('contain', 'html');
        
        cy.wait(2000);
        
        cy.log('one cy.url().should(...) then .and(...) follows')
        cy.url().should('include', 'inventory.html')
        .and('eq', 'https://www.saucedemo.com/inventory.html')
        .and('contain', 'html');
        
        cy.wait(2000); 
        
        
        cy.log('>> Negation')
        cy.wait(2000);
        cy.url().should('not.include', 'invent0ry.html')
        .and('not.eq', 'https://www.saucedem0.com/inventory.html')
        .and('not.contain', 'php.html');
        
        cy.wait(2000);
        
        cy.log('cy.title().should("....")');
        
        cy.title().should('include', 'ag Lab')
        .and('eq', 'Swag Labs')
        .and('contain', 'Labs');
        
        cy.wait(2000);
        
        cy.log('Verify whether the logo exists or is visible:');
        cy.get('.peek').should('exist')
        .and('be.visible');
        
        cy.wait(2000);

        cy.log('Verify whether the shopping cart exists or is visible:');
        cy.get('.shopping_cart_link').should('exist')
        .and('be.visible');

        cy.wait(2000);
        
        cy.log('How many links available in the page:');
        cy.xpath('//a').should('have.length', 20);
        
        cy.wait(2000);
        cy.get("#react-burger-menu-btn").click();
        cy.get('#logout_sidebar_link').click();
        //cy.wait(2000);
        
        
    })

    it('Verify Value entry to Inputs', () => {
        cy.wait(3000);
        cy.visit('https://www.saucedemo.com');
        cy.log('Verify the entry value is correct:');
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Username']").should('have.value', 'Admin');
        cy.wait(2000);
        cy.get("input[placeholder='Password']").type('Hello World');
        cy.get("input[placeholder='Password']").should('have.value', 'Hello World');
        cy.wait(2000);
    })
})