/// <reference types="cypress" />

/*
    it.only()

    it.skip()
*/


/*
    before() > beforeEach() > test01() > afterEach() > beforeEach() > test02() > afterEach() > ... > after()
*/

describe('test Suite', () => {
    before( () => {
        cy.log(" ************* Launch the App *************")
    })
    
    after( () => {
        cy.log(" ************* Close the App *************")
    })

    beforeEach( () => {
        cy.log(" >>>>>>>>>> Login >>>>>>>>>>")
    })
    
    afterEach( () => {
        cy.log(" >>>>>>>>>> Logout >>>>>>>>>>")
        cy.wait(2000)
    })

    it('Searching', () => {
        cy.log(" (1) Searching test")
    })
    
    it('Advanced Searching', () => {
        cy.log(" (2) Advanced Searching test")
    })
    
    it('Listing Products', () => {
        cy.log(" (3) Listing Products test")
    })
})