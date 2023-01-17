/// <reference types="cypress" />

describe('Handling Login', () => {
    it('Login directly', () => {
        cy.visit("https://demo.nopcommerce.com")
        
        cy.clickLink('Log in');

        cy.get("#Email").type('iteracion.n.esima@gmail.com');
        cy.get("#Password").type("everything's ok");
        cy.get("button[class='button-1 login-button']").click()

        cy.get('.ico-account').should('have.text', 'My account')

    })
    
    it('Accessing to any link with custom command', () => {
        cy.visit("https://demo.nopcommerce.com")
        
        //custom command
        cy.clickLink('Log in');
        
        cy.wait(2000);
        
        cy.loginNopCommerce('iteracion.n.esima@gmail.com', "everything's ok");
        
        cy.get('.ico-account').should('have.text', 'My account')
    })
})