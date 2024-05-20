/// <reference types="cypress" />

context('Users Page Tests', () => {
  beforeEach(() => {
    // Assuming the server is already running and accessible
    cy.visit('/users/');
  });

  it('should display the list of users after loading', () => {
    // Check for a loading indicator if present
    cy.get('.nts-state').should('exist');

    // Wait for the async loading to finish and verify the list appears
    cy.get('.table').should('exist');
    cy.get('.table tbody tr').should('have.length.at.least', 10); // Adjust the selector and minimum length as appropriate
  });

  it('should display all expected columns for each user', () => {
    cy.get('.table thead tr')
      .first()
      .within(() => {
        cy.get('th').eq(0).should('contain', 'Name');
        cy.get('th').eq(1).should('contain', 'Phone');
        cy.get('th').eq(2).should('contain', 'Email');
        cy.get('th').eq(3).should('contain', 'Actions');
      });
  });

  it('should have a working "Add a new user" form', () => {
    // Fill in the form
    cy.get('form #name').type('John Doe');
    cy.get('form #email').type('john.doe@example.com');
    cy.get('form #phone').type('123-456-7890');

    // Submit the form
    cy.get('form').submit();

    // Check if the user has been added to the list
    cy.contains('John Doe');
    cy.contains('john.doe@example.com');
    cy.contains('(123) 456-7890');
  });

  it('should allow a user to be edited', () => {
    // Wait for the users list to load
    cy.get('.table').should('exist');

    // Click the gear icon of the first user in the list to edit
    cy.get('.table').find('.edit-user').first().click();

    // Now the form should be filled with the details of the first user
    cy.get('form #name').should('have.value', 'Leanne Graham');
    cy.get('form #email').should('have.value', 'Sincere@april.biz');
    cy.get('form #phone').should('have.value', '1-770-736-8031 x56442');

    // Update the user's information
    // Let's say we want to change the user's phone number
    cy.get('form #phone').clear().type('(123) 456-7890');

    // Submit the updated information
    cy.get('form').submit();

    // Optionally, verify that the list now contains the updated information
    cy.contains('(123) 456-7890');
  });

  it('should allow a user to be deleted', () => {
    // Wait for the users list to load
    cy.get('.table').should('exist');

    // Verify Leanne Graham exists in the list
    cy.contains('Leanne Graham').should('exist');

    // Click the delete icon
    cy.get('.table').find('.delete-user').first().click();

    // Wait for the users list to load
    cy.get('.table').should('exist');

    cy.get('.table').not(':contains("Leanne Graham")');
  });
});
