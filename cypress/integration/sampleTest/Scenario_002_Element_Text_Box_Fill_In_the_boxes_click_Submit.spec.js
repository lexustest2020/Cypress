//Scenario_002_Element_Text_Box_Fill_In_the_boxes_click_Submit//
escribe('Forms', () => {
  before(() => {
    cy.visit(Cypress.config().subUrlTextBox)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Cypress.config().subUrlTextBox)

  })
  //Test001_Assertion of Text Box//
  it('should display the Autocomplete title', () => {
    cy.get('.main-header')
      .should('contain', 'Text Box')
  
  //Test002_Fill-in the Full Name//  
    let fullName = 'Alexis Climaco'
    cy.get('#userName').click();
    cy.get('#userName').type(fullName);
    
  //Test003_Test003_Fill-in the email //
    let email = 'alexisclimaco@gmail.com';
    cy.get('#userEmail').click();
    cy.get('#userEmail').type(email);
  
  //Test004_Fill-in the current address// 
    let currentAddress = 'Unity 1902 Sunshine Tower2';
    cy.get('#currentAddress').click();
    cy.get('#currentAddress').type(currentAddress);
  
  //Test005_Fill-in the permanent address// 
    let permanentAddress = 'Unity 1902 Sunshine Tower2';
    cy.get('#permanentAddress').click();
    cy.get('#permanentAddress').type(permanentAddress);
    cy.get('#submit').click();

  //Test006_Assertion of Full Name after submission.//
    cy.get('#name').contains(fullName);
  
  //Test007_Assertion of email after submission.//
    cy.get('#email').contains(email);
  
  //Test008_Assertion of Current Address after submission.//
    cy.get('p#currentAddress').contains(currentAddress);
  
  //Test009_Assertion of Permanent Address after submission.//
    cy.get('p#permanentAddress').contains(permanentAddress);  
  })
})
