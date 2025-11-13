describe('Fluxo 3: Agendamento de Consulta Presencial', () => {
  let dataLogin;

  beforeEach(() => {
    // Carrega dados de login
    cy.fixture('login').then((loginData) => {
      dataLogin = loginData;
    });
  });

  it('Deve realizar o agendamento de consulta presencial com sucesso', () => {
    
    cy.login(dataLogin.email, dataLogin.senha);

    cy.url().should('include', '/index');
    cy.contains('Consulta Presencial', { timeout: 10000 }).should('be.visible');

    cy.intercept('GET', '**/api/agendamentos/convenios*').as('getConvenios');
    cy.intercept('GET', '**/api/agendamentos/especialidades*').as('getEspecialidades');
    cy.intercept('GET', '**/api/agendamentos/clinicas*').as('getClinicas');
    cy.intercept('GET', '**/api/agendamentos/agendas*').as('getAgendas');
    cy.intercept('GET', '**/api/protected/me/dependentes*').as('getDependentes');
    cy.intercept('GET', '**/api/protected/me/campos-pendentes*').as('getCamposPendentes');
    cy.intercept('POST', '**/api/agendamentos/negociacao/*').as('postAgendamento');

    cy.contains('Consulta Presencial').click();
    cy.wait('@getConvenios', { timeout: 10000 }).its('response.statusCode').should('eq', 200);

    cy.contains('PARTICULAR').should('be.visible').click();
    cy.get('[data-cy^="convenio-radio"]').first().find('input[type="radio"]').check({ force: true });

    cy.wait('@getEspecialidades').its('response.statusCode').should('eq', 200);

    cy.contains('CARDIOLOGIA').should('be.visible').click();
    cy.wait('@getClinicas').its('response.statusCode').should('eq', 200);

    cy.get('[data-cy="agendar-nextdate-btn"]').click();
    cy.get('[data-cy^="agenda-item-horario-texto"]:first', { timeout: 10000 })
    .should('be.visible')
    .click();

    cy.wait('@getAgendas').its('response.statusCode').should('eq', 200);


    cy.get('[data-cy="paciente-card-radio-label"]').should('be.visible').click();
    cy.wait('@getCamposPendentes').its('response.statusCode').should('eq', 200);

    cy.contains('Especialidade').should('contain', 'CARDIOLOGIA');
    cy.contains('Paciente').should('exist');
    cy.contains('Profissional').should('exist');
    cy.contains('Data').should('exist');
    cy.contains('Hora').should('exist');

    cy.get('[data-cy="confirmacao-btn-confirmar"]').should('be.visible').click();
    cy.wait('@postAgendamento', { timeout: 10000 }).its('response.statusCode').should('eq', 200);

    cy.get('[data-cy="finalizacao-msg-sucesso"]', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Agendamento efetuado com Sucesso!');
  });
});
