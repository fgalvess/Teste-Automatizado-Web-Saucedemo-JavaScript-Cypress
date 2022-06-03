const el = require('./elements').ELEMENTS;

class FiltrarPreco{

    filtrarPreco(){
        cy.get(el.opcoes).select(el.precoMenor);
        cy.get(el.opcoes)
          .should('have.value','lohi')
          .and('contain','Price (low to');
    }

    adicionarItens(){
        cy.get(el.item1).click();
        cy.get(el.item2).click();
        cy.get(el.item3).click();
        cy.log("Verificando se os 3 itens foram adicionados");
        cy.get(el.carrinho)
          .should('have.text', '3')
          .and('contain', '3');
        cy.log("Verificando se é possível remover um item antes do checkout");  
        cy.get(el.carrinho).click();  
        cy.get(el.botaoRemover).click();
        cy.get(el.carrinho)
          .should('have.text', '2')
          .and('contain', '2');
        cy.wait(1000);
        cy.get(el.botaoCheckout).click();  
    }

}

export default new FiltrarPreco();