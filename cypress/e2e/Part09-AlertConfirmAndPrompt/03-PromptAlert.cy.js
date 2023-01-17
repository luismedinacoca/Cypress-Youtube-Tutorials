/// <reference types="cypress" />

describe("Prompt Alerts", () => {
    /*
        Javascript Prompt Alert: It will have some text with 'OK' and 'Cancel' buttons
        Remember: Cypress automatically clicks on 'OK' and closes the prompt Alert window
        ! There are some text we need to capture it.
        ! How can we simulate when confirm alert is cancelled    
    */
    it("Js Confirm Alert - OK", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        //Preparing to capture the prompt window and set the message:
        cy.window().then( (win) => {
            cy.stub(win, 'prompt').returns('Welcome!!')
        })

        //! Todo - capture the text-message inside the prompt alert
        /* 
        cy.on('window:prompt', (t) => {
            expect(t).to.contains('I am a JS prompt');
        }) 
        */ 

        //prompt window
        cy.get("button[onclick='jsPrompt()']").click();        
        
        //Cypress automatically closed prompted alert window by using OK button - default

        //assertion mesthod for confirming alert was successfully closed
        cy.get('#result').should('have.text', 'You entered: Welcome!!');
    })
    

    it.only("Js Confirm Alert - Cancel", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        //Preparing to capture the prompt window and set the message:
        cy.window().then( (win) => {
            cy.stub(win, 'prompt').returns('Welcome!!')
        })


        //! Todo - capture the text-message inside the prompt alert
        /* 
        cy.on('window:prompt', (t) => {
            expect(t).to.contains('I am a JS prompt');
        }) 
        */ 

        //prompt window
        cy.get("button[onclick='jsPrompt()']").click();        
        
        //Cypress automatically closed prompted alert window by using OK button - default

        //! Todo - this confirm part is not working
        cy.on('window:prompt', () => false);

        //assertion mesthod for confirming alert was successfully closed
        cy.get('#result').should('have.text', 'You entered: null');
    })

    
    
})