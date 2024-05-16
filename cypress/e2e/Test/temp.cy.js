describe('temp', ()=>{

    it.skip('test', ()=>{
        cy.visit((Cypress.env('URL')));
        cy.get("input[name=username]").type(userId);
        cy.get("input[name=password]").type(password);
        cy.get("button[type=submit]").click();


        cy.xpath("//span[text()='PIM']//parent::a").as('PIM')

        cy.xpath('@PIM').click();
    })
})