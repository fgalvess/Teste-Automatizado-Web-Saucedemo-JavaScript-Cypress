/// <reference types="cypress" />

import Login from '../support/Pages/Login';
import TelaPrincipal from '../support/Pages/TelaPrincipal';
import CheckoutSuasInformacoes from '../support/Pages/CheckoutSuasInformacoes';

describe('Saucedemo', () => {
  
    beforeEach('Realizar Login', ()=>{
      cy.log("Realizar Login");
      Login.login(); 
    }
    )

    it('Saucedemo', () =>{
      cy.log("Filtrando itens do preço menor para o maior");
      TelaPrincipal.filtrarPreco();
      cy.log("Adicionando itens no carrinho");
      TelaPrincipal.adicionarItens();
      cy.log("Checando Campos Obrigatótios")
      CheckoutSuasInformacoes.camposObrigatorios();
      cy.log("Checando se é possível cancelar compra antes de finalizar");
      CheckoutSuasInformacoes.cancelarCompra();
      cy.log("Finalizando Compra");
      CheckoutSuasInformacoes.finalizarCompra();
    })

})