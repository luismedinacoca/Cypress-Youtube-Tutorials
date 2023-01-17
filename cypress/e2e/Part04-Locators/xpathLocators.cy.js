/// <reference types="Cypress">

describe('Xpath locators', () => {
    it('test 01 - Number of Products', () => {
        
        cy.visit("https://www.saucedemo.com/");

       cy.xpath("//*[@id='user-name']").type("standard_user");
       cy.xpath("//*[@id='password']").type('secret_sauce');
       cy.xpath("//*[@id='login-button']").click();
       cy.wait(1000);
       cy.log('assertion');
       cy.wait(1000);
       cy.xpath("//*[@class='inventory_item']").should('have.length', 6);
    })
    
    it('test 02 - Chained path', () => {
        
        cy.visit("https://www.saucedemo.com/");

       cy.xpath("//*[@id='user-name']").type("standard_user");
       cy.xpath("//*[@id='password']").type('secret_sauce');
       cy.xpath("//*[@id='login-button']").click();
       cy.wait(1000);
       cy.log('assertion');
       cy.wait(1000);
       cy.xpath("//*[@class='inventory_list']").xpath('//*[@class="inventory_item"]').should('have.length', 6);

       /*
       cy.xpath("//*[@class='inventory_item']/li").should('have.length', 6);
       chained path would be as:
       cy.xpath("//*[@class='inventory_item']").xpath('./li').should('have.length', 6);
       */
    })
})

// .