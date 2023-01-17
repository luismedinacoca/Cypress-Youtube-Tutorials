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

    it("Pagination", () => {
        let totalPageNumber;

        cy.log("Pagination");

        cy.get(".col-sm-6.text-end").then((e) => {
            let paginationText = e.text();
            cy.log(paginationText);
            cy.log(paginationText.indexOf("("));
            cy.log(paginationText.indexOf("P"));

            totalPageNumber = paginationText.substring(
                paginationText.indexOf("(") + 1,
                paginationText.indexOf("P")
            );
            cy.log("Total number of pages in the table: " + totalPageNumber);
        });
        
        let newAmount = 30;
        for (let p = 1; p <= newAmount; p++) {
            if (newAmount > 1) {
                cy.log("active page is " + p);
                if(p === 1 || p == newAmount){
                    cy.get(
                        "table[class='table table-bordered table-hover'] > tbody>tr"
                    ).each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get("td:nth-child(3)").then((e) => {
                                cy.log(e.text());
                            });
                        });
                    });
                } else if(p == 2) {
                    cy.get(":nth-child(2)>.page-link").click();
                    cy.wait(1000)
    
                    cy.get(
                        "table[class='table table-bordered table-hover'] > tbody>tr"
                    ).each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get("td:nth-child(3)").then((e) => {
                                cy.log(e.text());
                            });
                        });
                    });

                    cy.wait(1000)
                    cy.get(":nth-child(12)>.page-link").click();
                    cy.wait(1000)
                } else {
                    cy.get(
                        "table[class='table table-bordered table-hover'] > tbody>tr"
                    ).each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get("td:nth-child(3)").then((e) => {
                                cy.log(e.text());
                            });
                        });
                    });

                    cy.wait(1000)
                    cy.get(":nth-child(12)>.page-link").click();
                    cy.wait(1000)
                }
                
            }
        }
    });
});
