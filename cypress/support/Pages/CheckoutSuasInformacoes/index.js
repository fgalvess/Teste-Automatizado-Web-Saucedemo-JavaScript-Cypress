
const el = require('./elements').ELEMENTS;

class SuasInformacoes {
    
    camposObrigatorios() {

        cy.get(el.primeiroNome).type('Fábio');
        cy.get(el.botaoContinuar).click();
        cy.get('[data-test="error"]').should('have.text','Error: Last Name is required');
        cy.wait(1000);
        cy.get(el.primeiroNome).clear();

        cy.get(el.ultimoNome).type('Guerra');
        cy.get(el.botaoContinuar).click();
        cy.get('[data-test="error"]').should('have.text','Error: First Name is required');
        cy.wait(1000);
        cy.get(el.ultimoNome).clear();

        cy.get(el.primeiroNome).type('Fábio');
        cy.get(el.ultimoNome).type('Guerra');
        cy.get(el.botaoContinuar).click();
        cy.get('[data-test="error"]').should('have.text','Error: Postal Code is required');

    }

    cancelarCompra() {
        cy.get(el.cep).type('72979000');
        cy.get(el.botaoContinuar).click();
        cy.get(el.botaoCancelar).click();
        cy.get('.title').should('have.text', "Products");
    }

    finalizarCompra() {
        cy.get(el.carrinho).click();
        cy.get(el.botaoCheckout).click();
        cy.get(el.primeiroNome).type('Fábio');
        cy.get(el.ultimoNome).type('Guerra');
        cy.get(el.cep).type('72979000');
        cy.get(el.botaoContinuar).click();
        cy.get(el.botaoFinalizar).click();
        cy.get(el.confirmacao).should('have.text','THANK YOU FOR YOUR ORDER');

    }
}

export default new SuasInformacoes();