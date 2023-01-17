/// <reference types="cypress" />

describe("handle Tables", () => {
    beforeEach("Login", () => {
        cy.visit("https://demo.opencart.com/admin/index.php");

        //login
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();

        //close the page:
        cy.get(".btn-close").click();

        cy.wait(1500);

        //Click on Customer menu option:
        cy.get("#menu-customer > .parent").click(); //customer main menu
        cy.get("#menu-customer > ul > li:first-child").click(); //customers sub/child item
    });

    it("Check Rows & Columns number", () => {
        cy.log("Check Row number");
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
            "have.length",
            10
        );

        cy.wait(2000);
        cy.log("Check Column number");
        cy.get(
            "table[class='table table-bordered table-hover']>thead>tr>td"
        ).should("have.length", 7);
    });

    it("Check cell data from specific row and column", () => {
        cy.log(
            "Check cell data from specific row and column - 5th row & email column:"
        );

        cy.get(
            "table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)"
        ).should("contain", "princytrainings4@gmail.com");
    });

    it("Read all the rows & Columns data in the first page", () => {
        cy.log("Read all the rows & Columns data in the first page");

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
            ($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get("td").each(($col, index, $cols) => {
                        cy.log($col.text());
                    });
                });
            }
        );
    });
});
