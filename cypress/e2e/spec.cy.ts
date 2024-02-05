describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Write cool code');
    cy.contains('Sidebar stuff');
  });
});
