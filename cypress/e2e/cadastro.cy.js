const cpf = require("@fnando/cpf/commonjs");

import { faker } from '@faker-js/faker';
import { generate as generateCpf } from '@fnando/cpf';

describe('Fluxo 1: Cadastro de Novo Usuário', () => {

  it('Deve cadastrar um novo paciente com sucesso', () => {
    const nome = faker.person.fullName(); 
    const celular = faker.phone.number('119########');
    const sexo = faker.helpers.arrayElement(['MASCULINO', 'FEMININO', 'INDEFINIDO']);
    const dataNascimento = faker.date
      .birthdate({ min: 18, max: 60, mode: 'age' })
      .toLocaleDateString('pt-BR');
    const email = faker.internet.email(nome.split(' ')[0]).toLowerCase();
    const cpf = generateCpf(true); 
    const senha = 'Senha@123'; 

    cy.cadastrar(nome, celular, sexo, dataNascimento, email, cpf, senha);
  });
});