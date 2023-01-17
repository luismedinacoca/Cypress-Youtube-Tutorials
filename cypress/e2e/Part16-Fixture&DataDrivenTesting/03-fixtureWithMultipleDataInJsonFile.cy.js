/// <reference types="cypress" />

describe('Fixture with multiple tests', () => {

    it('Testing01 with Hooks and Fixture', () => {

        cy.fixture('orangehrm2').then( data => {
            cy.visit("https://opensource-demo.orangehrmlive.com/");
            data.forEach(userdata => {
                cy.get("input[name='username']").type(userdata.username);
                cy.get("input[name='password']").type(userdata.password);
                cy.get("button[type='submit']").click()
                
                cy.wait(1500)

                if(userdata.username == 'Admin' && userdata.password == 'admin123'){
                    //dashboard validation
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                    .should('have.text', userdata.expected);

                    //Log out
                    cy.get('.oxd-userdropdown-name').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();

                } else {
                    //Invalid Credentials message
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                    .should('have.text', userdata.expected);
                }


            });

        })
    })

})
