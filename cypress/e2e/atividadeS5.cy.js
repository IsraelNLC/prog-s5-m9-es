//react-demo.cy.js
describe('React todo example', () => {
  it('Should add and verify todo list', () => {
  cy.visit('https://reactjs.org/');
  cy.get('#new-todo').type("My first todo item");
  cy.get('#new-todo').siblings('button').click();
  cy.get('#new-todo').type("My second todo item");
  cy.get('#new-todo').siblings('button').click();
  cy.get('div[id = "todos-example"] >div >ul > li').eq(0).should('have.text', 'My first todo item')
  cy.get('div[id = "todos-example"] >div >ul > li').eq(1).should('have.text', 'My second todo item')
  })
  })

// O Test-Driven Development (TDD) é uma metodologia de desenvolvimento de software que prioriza a criação de testes antes de implementar a lógica funcional, seguindo o ciclo Red, Green e Refactor. seu principal objetivo é melhorar a qualidade do código e evitar erros futuros.

// No exemplo acima, o teste usa Cypress para validar a funcionalidade "Todo" do site do React, verificando a adição de novos itens à lista e confirmando que os textos estão corretos.

// Obs.: O teste foi executado em erro, ou seja, estado "Red". O certo segundo o TDD seria atingir o "Green", onde o código é executa com êxito, e depois no "Refactor", refatorar da melhor forma possível. Não realizei esses passos pois o exemplo utilizado é do site do React, o qual não consigo ralizar alterações no código...