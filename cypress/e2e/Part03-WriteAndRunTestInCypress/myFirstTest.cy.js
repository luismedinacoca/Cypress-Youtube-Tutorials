describe('Suite name 01', () => {
    it('verify title-positive', () => {
        //steps
        
        //go to URL
        cy.visit("https://www.saucedemo.com/");
        //assertion
        cy.title().should('eq', 'Swag Labs');
    })

    it('verify title-Negative test', () => {
        //steps
        expect(true).to.equal(true)
        //go to URL
        cy.visit("https://www.saucedemo.com/");
        //assertion
        cy.title().should('eq', 'Swag Labs123'); 

    })
})

describe('Suite name 02', function() {
    it('test 03', function() {
        //steps
        expect(true).to.equal(true)
    })
})