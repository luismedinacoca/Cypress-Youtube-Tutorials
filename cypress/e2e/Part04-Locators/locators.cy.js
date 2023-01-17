describe('Locators', () => {
    it('test 03', () => {
        
        cy.visit("https://www.saucedemo.com/");

        //Id locator:
        cy.get("#user-name").type("Hello World");

        //class locator:
        cy.get("[data-test='password']").type("Hola Mundo!");

        //atribute locator:
        cy.get("[data-test='login-button']").click();

        cy.wait(1500);

        //tag and attribute locators:
        cy.get("h3[data-test='error']").contains("Epic sadface: Username and password do not match any user in this service");
    })
})