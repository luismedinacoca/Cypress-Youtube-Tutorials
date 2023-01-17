/// <reference types="cypress" />

describe('Fixture with multiple tests', () => {

    let userdata;
    //Access through Hook - for multiple blocks
    before(() => {
        cy.fixture('orangehrm').then( data => {
            userdata = data;
        })
    })

    it('Testing01 with Hooks and Fixture', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.get("input[name='username']").type(userdata.username);
        cy.get("input[name='password']").type(userdata.password);
        cy.get("button[type='submit']").click()

        cy.wait(1500)

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should('have.text', userdata.expected);
    })

})
