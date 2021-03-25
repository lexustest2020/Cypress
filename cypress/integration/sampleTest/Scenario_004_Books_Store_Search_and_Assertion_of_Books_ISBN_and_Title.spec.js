//Scenario_004_Books_Store_Search_and_Assertion of Books_ISBN and Title//
describe('Forms', () => {
  before(() => {
    cy.visit(Cypress.config().subUrlBookStore)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Cypress.config().subUrlBookStore)
  })

  it('should display the Autocomplete title', () => {
    cy.get('.main-header')
      .should('contain', 'Book Store')
  
  //Test001_Fill-in the Search 'Speaking JavaScript'//  
  let search = 'Speaking JavaScript'
  cy.get('#searchBox').click();
  cy.get('#searchBox').type(search);
  
  //Test002_Clicking the found table "Speaking JavaScript"//  
  cy.get('.ReactTable * a').click();
     
  //Test003_Assertion of "Speaking JavaScript"  book ISBN//
  cy.get('#userName-value').contains('9781449365035');

 //Test004_Assertion of "Speaking JavaScript"  book Title//
  cy.get('label#userName-value').contains('Speaking JavaScript');

  })
})   
