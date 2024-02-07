describe('Home Page', () => {
  it('Visits the home page', () => {
    cy.visit('/');
    cy.contains('Write cool code');
    cy.contains('Sidebar stuff');
  });
});
