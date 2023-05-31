before(() => {
	cy.visit('https://www.google.com');
	cy.wait(5000);
});

beforeEach(() => {
	cy.visit('https://www.cypress.io');
});

describe('Editor tests - SearchPanes', () => {
	it('Single string in one pane', () => {
    cy.origin('https://www.cypress.io', () => {
      cy.contains('npm install cypress').click();
    })
	});

	it('Single string in two panes', () => {
    cy.origin('https://www.cypress.io', () => {
      cy.contains('npm install cypress').click();
    })
	});
});