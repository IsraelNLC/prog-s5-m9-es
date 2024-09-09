// cypress/integration/calculator.spec.js
describe('Simple Calculator', () => {
  it('Should validate addition operation', () => {
    cy.visit('https://israelnlc.github.io/prog-s5-m9-es/');

    cy.get('input[value="7"]').click();
    cy.get('input[value="+"]').click();
    cy.get('input[value="9"]').click();
    cy.get('input[value="="]').click();

    cy.get('input[type="text"]').should('have.value', '16');
  });
});

// Também seguindo os preceitos do TDD, o teste acima usa Cypress para validar a funcionalidade de uma calculadora criada em HTML (também poderia ser feita em React), verificando se o resultado final da soma é o esperado.
