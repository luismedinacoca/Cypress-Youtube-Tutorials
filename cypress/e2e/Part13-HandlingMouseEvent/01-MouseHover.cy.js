/// <reference types="cypress" />

describe('Handling Mouse Event', () => {

    it.only("MouseHover - 1st Approach", () => {
        cy.visit('https://demo.opencart.com');

        //Mac (1) in Desktops Menu and it's not visible
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('not.be.visible');
        
        //Mac (1) in Desktops Menu and it's visible
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible');
    });

    it("Mousehover - 2nd Apporach", () => {
        cy.visit('https://www.orangehrm.com/');
        
        //cy.get('.mb-2').contains('Platform').should('be.visible')
        cy.get(':nth-child(1) > .nav-link-hed').should('be.visible')
        //cy.get('ul[class="navbar-nav me-auto mb-2 mb-lg-0 web-menu"]').contains('Platform').realHover();
        cy.wait(3000)

        /* cy.get('.nav.navbar-nav.navbar-left.default-nav.web-menu.link').contains('Why OrangeHRM').realHover();
        cy.wait(3000)

        cy.get('.nav.navbar-nav.navbar-left.default-nav.web-menu.link').contains('Resources').realHover();
        cy.wait(3000)


        cy.get('.nav.navbar-nav.navbar-left.default-nav.web-menu .link').contains('Company').realHover();
        cy.wait(3000) */
    })
})