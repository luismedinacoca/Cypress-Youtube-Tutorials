/// <reference types="cypress" />
require('@4tw/cypress-drag-drop');

describe('Handling Mouse Event', () => {
    
    it.only("Drag and Drop using plugin", () => {
        /*
            https://www.npmjs.com/package/@4tw/cypress-drag-drop

            $ npm install --save-dev @4tw/cypress-drag-drop
        */

            cy.visit("https://es.javascript.info/mouse-drag-and-drop")
            cy.frameLoaded(".code-tabs__result");
            cy.iframe(".code-tabs__result").find('img[id="ball"]').should('be.visible');
            //cy.get('[itemprop="articleBody"] > :nth-child(60)').scrollIntoView({duration:2000});
            cy.iframe(".code-tabs__result").find('img[id="ball"]').scrollIntoView({duration:3000});
            cy.iframe(".code-tabs__result").find('img[id="gate"]').should('be.visible');
            cy.iframe(".code-tabs__result").scrollIntoView({duration:3000});
            cy.wait(2000);
            //cy.iframe("iframe[class='code-tabs__result']").find('img[id="ball"]').drag('img[id="gate"]', {force:true});
            
    });
})