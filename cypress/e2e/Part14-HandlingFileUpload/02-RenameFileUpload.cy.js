/// <reference types="cypress" />
import "cypress-file-upload";

describe('Handling File Upload', () => {

    /*
        https://github.com/abramenal/cypress-file-upload

        $ npm install --save-dev cypress-file-upload
    */

    it('File Upload - Rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")

        //click on the Choose file button:
        cy.get("#file-upload").attachFile({filePath:"testing-uploadingFile01.pdf", fileName:"newFileName.pdf"}); 
        //This file should be inside 'fixture' folder
        
        cy.wait(1000);

        //Click on Upload button
        cy.get("#file-submit").click();

        cy.wait(3000);

        //validation or assert:
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })
})