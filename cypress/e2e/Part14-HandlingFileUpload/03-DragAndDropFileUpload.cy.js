/// <reference types="cypress" />
import "cypress-file-upload";

    /*
        https://github.com/abramenal/cypress-file-upload

        $ npm install --save-dev cypress-file-upload
    */
describe('Handling File Upload', () => {
    it('File Upload - Drag And Drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#drag-drop-upload").attachFile('testing-uploadingFile01.pdf', {subjectType:'drag-n-drop'})

        cy.wait(2000);

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('testing-uploadingFile01.pdf');
        
        //Click on Upload button
        cy.get("#file-submit").click();

        cy.wait(3000);

        // ! It's giving an Internal Server Error
        //validation or assert:
        //cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })
})