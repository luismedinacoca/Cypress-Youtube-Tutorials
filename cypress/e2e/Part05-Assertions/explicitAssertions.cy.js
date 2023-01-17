/// <reference types="cypress" />


describe('Explicit Assertions', () => {
    it('', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get("input[placeholder='Username']").type('standard_user');
        cy.get("input[placeholder='Password']").type('secret_sauce');
        cy.get('#login-button').click();

        let expectedTitle = 'Products';
        let notExpectedTitle = 'Title';
        cy.get('.title').then( (titleLocator) => {
            let actualTitle = titleLocator.text();
            //TDD style:
            cy.log("TDD Style - ASSERT")
            assert.equal(actualTitle, expectedTitle);
            assert.notEqual(actualTitle,notExpectedTitle);
            cy.wait(2000)
            
            //BDD Style:
            cy.log("BDD Style - EXPECT")
            expect(actualTitle).to.equal(expectedTitle);
            expect(actualTitle).to.not.equal(notExpectedTitle);
        })
    })
});