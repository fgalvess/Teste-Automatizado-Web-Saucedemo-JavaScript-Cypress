const el = require('./elements').ELEMENTS;

class Login{

    login(){
        cy.visit("https://www.saucedemo.com/");
        cy.get(el.usuario).type('standard_user');
        cy.get(el.senha).type('secret_sauce');
        cy.get(el.botaoLogin).click();
        cy.get('.title').should('have.text', "Products");
    }
}

export default new Login();