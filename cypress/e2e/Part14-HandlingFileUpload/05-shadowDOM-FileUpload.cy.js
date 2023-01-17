/// <reference types="cypress" />
import "cypress-file-upload";

describe('Handling File Upload', () => {
    it('File Upload - Shadow DOM', () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")

        cy.get(".smart-browse-input", {includeShadowDom: true}).attachFile("testing-uploadingFile01.pdf")

        cy.wait(1500)

        cy.get(".smart-item-name", {includeShadowDom: true}).contains("testing-uploadingFile01.pdf")
        cy.get(".smart-item-name", {includeShadowDom: true}).should('have.text', "testing-uploadingFile01.pdf")
    })
})