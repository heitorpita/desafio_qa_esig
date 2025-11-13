describe('My Fluxo 2: Login de Usuário', () => {
  let dataLogin;
  beforeEach(() => {
    cy.fixture('login').then((loginData) => {
      dataLogin = loginData;
    });
  });
  
  it('Deve realizar login com sucesso', () => {

    cy.login(dataLogin.email, dataLogin.senha);
  });
});