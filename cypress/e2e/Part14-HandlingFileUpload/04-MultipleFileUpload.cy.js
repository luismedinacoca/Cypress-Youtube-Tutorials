/// <reference types="cypress" />
import "cypress-file-upload";

describe('Handling File Upload', () => {
    it('File Upload - Multiple Files', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")

        cy.get("#filesToUpload").attachFile(["testing-uploadingFile01.pdf", "testing02.pdf", "testing03.pdf"])
        cy.wait(2000);

        cy.get('#fileList > :nth-child(1)').should('be.visible')
        cy.get('#fileList > :nth-child(2)').should('be.visible')
    })
})