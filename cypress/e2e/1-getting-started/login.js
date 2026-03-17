function log(user, pass) {
    cy.get('#user').should('be.visible').type(user)//digita onumero 5 no primeiro campo
    cy.wait(5000);
    cy.get('#pass').should('be.visible').type(pass)// digita o numero 2 no segundo campo
    cy.wait(5000);// atraso de 5 segundos
}

module.exports = {log};