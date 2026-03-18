const {digi} = require('./utils');

describe('testes calculo', () => {
beforeEach(() => {
    cy.visit('http://192.168.3.4:8080') // endereço da calculadora
});

    it('somar', () => {

        digi(5,2);//função digitar numeros
        cy.get('button').eq(0).click();//click no primeiro botão adição
       cy.wait(5000)
        cy.get('#resultado').should('have.text','7');
       cy.wait(5000);
    })
    it('subtrair', () =>{

       digi(5,2);
       cy.get('button').eq(1).click();//click no segundo botão subtração
       cy.wait(5000)
        cy.get('#resultado').should('have.text','3');
       cy.wait(5000);

    });

                it('multiplicar', () =>{
                    digi(5,2);
                cy.get('button').eq(2).click();//clica no terceiro botão multiplicação
                cy.wait(5000)
                cy.get('#resultado').should('have.text', '10');
                cy.wait(5000);
        });
                it('forçar erro', () =>{

                    cy.get('button').eq(3).click();//clica no botão de erro
                    cy.get('#resultado').should('have.text','Esse sistema apenas aceita números inteiros ERRO');
                    cy.wait(5000);
                });

})