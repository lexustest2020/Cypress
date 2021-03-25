//Scenario_003_Books_Store_Search_No_Found//
describe('Forms', () => {
  before(() => {
    cy.visit(Cypress.config().subUrlBookStore)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Cypress.config().subUrlBookStore)
  })

  it('should display the Autocomplete title', () => {
    cy.get('.main-header')
      .should('contain', 'Book Store')
  
  //Test001_Fill-in the Search//
  let search = 'MyBook'
  cy.get('#searchBox').click();
  cy.get('#searchBox').type(search);
  
  //Test002_Assertion of No rows found//
  cy.get('.rt-noData').contains('No rows found');
    })
})