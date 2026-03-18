function digi(num1, num2) {
    cy.get('#number1').should('be.visible').type(num1)//digita onumero 5 no primeiro campo
    cy.wait(5000);
    cy.get('#number2').should('be.visible').type(num2)// digita o numero 2 no segundo campo
    cy.wait(5000);// atraso de 5 segundos
}

module.exports = {digi};