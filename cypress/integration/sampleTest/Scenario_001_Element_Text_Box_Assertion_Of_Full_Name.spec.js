//Scenario_001_Element_Text_Box_Assertion_Of_Full_Name//
describe('Forms', () => {
  before(() => {
    cy.visit(Cypress.config().subUrlTextBox)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Cypress.config().subUrlTextBox)
  })

  //Test001_Assertion of Text Box 
  it('should display the Autocomplete title', () => {
    cy.get('.main-header')
      .should('contain', 'Text Box')
  
  //StartAssertion 
      cy.get('#userForm').within(() => {
  
  //Test002_Assertion of Full Name Textbox    
        cy.get('input:first').should('have.attr', 'placeholder', 'Full Name')

  //Test003_Assertion of Email Textbox    
        cy.get('#userEmail').should('have.attr', 'placeholder', 'name@example.com')
    })
  })
})
