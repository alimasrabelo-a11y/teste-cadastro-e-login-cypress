function cadas(nome, email) {
    cy.get('#nome').should('be.visible').type(nome)//digita nome
    cy.wait(5000);
    cy.get('#email').should('be.visible').type(email)// digita email
    cy.wait(5000);// atraso de 5 segundos
}

module.exports = {cadas};