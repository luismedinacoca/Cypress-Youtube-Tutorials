/// <reference types="cypress" />

/*
    reading json data from cypress/fixture/orangehrm.json
 */

    describe('Fixture data', () => {

        //Direct Access:
        it('FixturesDemoTest without using the fixture/orangehrm.json file', () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/");
            cy.get("input[name='username']").type('Admin')
            cy.get("input[name='password']").type('admin123')
            cy.get("button[type='submit']").click()

            cy.wait(1500)

            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text','Dashboard');
        })

        //Access with Json data file
        it('FixturesDemoTest using fixture/orangehrm.json file', () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/");

            cy.fixture('orangehrm').then( data => {

                cy.get("input[name='username']").type(data.username);
                cy.get("input[name='password']").type(data.password);
                cy.get("button[type='submit']").click()

                cy.wait(1500)

                cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                .should('have.text', data.expected);
            })
            
        })
    })