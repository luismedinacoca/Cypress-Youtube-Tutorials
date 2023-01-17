# <span style="color:blue">Lecture Part02:

1. In order to know which node version we have:
```
$ node --version
```
2. In order to install package before installing Cypress:
```
$ npm -i init
```
3. Installing Cypress:
```
$ npm install --save-dev cypress
```
4. Opening the Cypress Runner:
```
$ npx cypress open
```

# <span style="color:blue"> Lecture Part03:
1. in order to run in headless mode:
```
$ npx cypress run
```
2. In order to run opening the runner and then it closing automatically:
```
$ npx cypress run --headed
```
3. Running a specific file relativePathFileFromCypress
```
$ npx cypress run --spec relativePathFile --headed
```
4. In order to run a specific browser
```
$ npx cypress run --browser chrome --headed
```

# <span style="color:blue">Lecture Part04: Locators

## <span style="color:green">Locators:
- CSS selector
> cy.get(' _CSS Selector locator_ ')

- XPath
> cy.xpath(' _xpath locator_ ')


## <span style="color:green">CSS Selector:
- tag id: #
- tag class: .
- tag attribute: []
- tag class attribute: .class['atributte=value']

```
<input class="input_error form_input" placeholder="Username" type="text" data-test="username" id="user-name" name="user-name" autocorrect="off" autocapitalize="none" value="">
```

```
cy.get("#user-name")
cy.get(".input_error .form_input");
cy.get['data-test="username"']
cy.get("input[placeholder='Username']")
```

Adding *chromeWebSecurity:false* to cypress.config.js file:

```
module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    ...
  },
});
```

## <span style="color:green">For xpath:

[xpath extension for cypress](https://github.com/cypress-io/cypress/tree/develop/npm/xpath "Cypress-io/cypress")

1. run in the terminal:
```
$ npm install -D @cypress/xpath
```
2.  Adding the following in commands.js file:
```
/// <reference types="Cypress">
```
3. In order to avoid the *xpath is not a function* message when cypress is running, add the entry in _**cypress/support/e2e.js**_ the following command:

```
require('cypress-xpath');
```
4. Run the command:
```
$ npm install cypress-xpath
```

5. Add the entry in commands.js
```
/// <reference types="cypress-xpath" />
```

6. In case there are many <**li**>:
```
cy.xpath("//*[@class='inventory_item']/li").should('have.length', 6);
```
chained path would be as: **.xpath('./li')**
```
cy.xpath("//*[@class='inventory_item']").xpath('./li').should('have.length', 6);
```
# <span style="color:blue">Lecture Part05: Assertions
## <span style="color:green">Implicit Assertions:
1. should();
```
cy.url().should('include', 'something');
```
```
cy.url().should('eq', 'wholeURL-Link');
```
```
cy.rul().should('contain', 'aWordOrPartOfURL');
```

2. should() in chained:
```
cy.url().should('include', 'inventory.html')
.should('eq', 'https://www.saucedemo.com/inventory.html')
.should('contain', 'html');
```



3. and(): first a '_**should()**_' must be there

```
cy.url().should('include', 'inventory.html')
.and('eq', 'https://www.saucedemo.com/inventory.html')
.and('contain', 'html');
```
4. Other commands:
4.1 Two Parameters:
```
cy.url().should("include", 'partOfTheURL')
```

```
cy.title().should("eq", 'wholeTitle')
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2 One Parameter:
```
cy.get('.peek').should("be.visible")
```

```
cy.get('.peek').should("exit")
```

```
cy.get('.peek').should("exit")
.and('be.visible');
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.3 Good _**Entry value**_ validation:
```
cy.get("input[placeholder='Username']").type('Admin');
cy.get("input[placeholder='Username']").should('have.value', 'Admin');
```

```
cy.get("input[placeholder='Password']").type('Hello World');
cy.get("input[placeholder='Password']").should('have.value', 'Hello World');
```


## <span style="color:green">Explicit Assertions:

[Assertion Documentation in Cypress](https://docs.cypress.io/guides/references/assertions#TDD-Assertions "Explicit assertion in cypress")

1. expect - BDD
```
expect(actualTitle).to.equal(expectedTitle);
```

2. assert - TDD
```
assert.equal(actualTitle, expectedTitle);
```
# <span style="color:blue">Lecture Part06: 
# <span style="color:blue">Lecture Part07: 
## <span style="color:green">Radio Buttons:
1. Check and Verify:
```
cy.get(locator).check().should('be.checked');
```

2. Uncheck and Verify:
```
cy.get(locator).uncheck().should('not.be.checked');
```

3. Check a list of Radio buttons:
```
cy.get(listLocator).check().should('be.checked');
```
## <span style="color:green">Checkboxes:
1. Check and Verify:
```
cy.get(locator).check().should('be.checked');
```

2. Uncheck and Verify:
```
cy.get(locator).uncheck().should('not.be.checked');
```

3. Check a list of Radio buttons:
```
cy.get(listLocator).check().should('be.checked');
```
4. Check the first element from a list of Radio buttons:
```
cy.get(listLocator).first().check().should('be.checked');
```
5. Check the last element from a list of Radio buttons:
```
cy.get(listLocator).last().check().should('be.checked');
```
# <span style="color:blue">Lecture Part08: 





# <span style="color:blue">Lecture Part09: 
# <span style="color:blue">Lecture Part10: 
# <span style="color:blue">Lecture Part11: 
# <span style="color:blue">Lecture Part12: 
# <span style="color:blue">Lecture Part13: 

