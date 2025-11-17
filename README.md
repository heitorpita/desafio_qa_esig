# Projeto de Automação E2E - QuarkClinic (ESIG Group)

> Automação de testes E2E com **Cypress 15.4.0**, desenvolvida como parte do processo seletivo **RECRUTAMENTO - ESTÁGIO QA - AUTOMAÇÃO**.  
> O projeto cobre os fluxos de Cadastro, Login, Agendamento e Envio de Comprovante (bônus).

---

## 🧩 Tecnologias Utilizadas
- **Cypress 15.4.0**
- **fakerjs** → geração de nomes, e-mails e dados aleatórios  - https://fakerjs.dev/
- **@fnando/cpf** → geração de CPFs válidos aleatórios  - https://github.com/fnando/cpf

---

## 🚀 Como Rodar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/heitorpita/desafio_qa_esig.git
cd desafio_qa_esig
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Rodar os testes
Abrir a interface:
```bash
npx cypress open
```
Ou rodar no terminal:
```bash
npx cypress run
```

---


## 🎯 Observações Finais
Este projeto demonstra habilidades práticas em automação de testes E2E, incluindo boas práticas de sincronização, geração de massa dinâmica e organização de código.  
Os testes cobrem os fluxos exigidos e foram validados por meio de interceptações e asserts confiáveis.
