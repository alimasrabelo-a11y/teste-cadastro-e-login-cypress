const {cadas} = require('./cadastro');
const {log} = require('./login');

describe('testes calculo', () => {
beforeEach(() => {
    cy.visit('http://192.168.3.4:8080/') // endereço da calculadora
    cy.contains('Site de Teste para Cypress');
    cy.wait(5000);
});

    it('preencher cadastro', () => {//prenche o segundo campo de cadastro

        cadas('Nome_teste_completo','email@teste.com.br');//função preencher cadastro
        cy.contains('Cadastrar').click();//click no botão escrito cadastrar

    })
    it('preencher login', () =>{

       log('teste','senhateste');//função preencher o login
        cy.contains('Entrar').click();//click no botão com o nome entrar


    });


})