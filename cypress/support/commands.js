Cypress.Commands.add('cadastrar', (nome, celular, sexo, dataNascimento, email, cpf, senha) => {
  cy.visit('https://agendamento.quarkclinic.com.br/index/363622206')
  cy.intercept('GET', '**/api/protected/me').as('getUser')
  cy.get('[data-cy="btn-cadastro"]').click().should('be.visible')
  cy.get('[data-cy="campo-nome-input"]').type(nome)
  cy.get('[data-cy="campo-telefone-input"]').type(celular)
  cy.get('[data-cy="campo-sexo-select"]').select(sexo)
  cy.get('[data-cy="campo-data-nascimento-input"]').type(dataNascimento)
  cy.get('input[placeholder="Email"]').type(email)
  cy.get('[data-cy="campo-numero-documento-input"]').type(cpf)
  cy.get('#senha').type(senha)
  cy.get('[data-cy="campo-confirmar-senha-input"]').type(senha)
  cy.get('[data-cy="checkbox-aceita-politicas-cadastro"] label.custom-control-label').click()
  cy.get('[name="cb-cadastro"]').check({ force: true })
  cy.contains('Criar conta').should('be.visible').click({ force: true })
  cy.wait('@getUser').its('response.statusCode').should('eq', 200)
})

Cypress.Commands.add('login', (email, senha) => {
  cy.visit('https://agendamento.quarkclinic.com.br/index/363622206')
  cy.intercept('GET', '**/api/protected/me').as('getUser')
        
  cy.get('[data-cy="btn-login"]').click().should('be.visible');

  cy.get('[data-cy="campo-usuario-input"]').should('be.visible').type(email);

  cy.get('[name="password"]').type(senha).click({ force: true });

  cy.get('[data-cy="checkbox-aceita-politicas"] label.custom-control-label').click();

  cy.get('[data-cy="btn-submit-login"]').click();

  cy.wait('@getUser').its('response.statusCode').should('eq', 200)

});

