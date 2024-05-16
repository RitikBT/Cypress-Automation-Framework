export class DashBoardPage {

    dashboardLocators = {
        dashBoardText: "header[class='oxd-topbar'] h6",
        pimModule: "//span[text()='PIM']//parent::a",

    }


    verifyLoginSuccessfully() {
        cy.logger('application', 'Verifying login is successfully')
        cy.get(this.dashboardLocators.dashBoardText).should('have.text', 'Dashboard')
    }

    clickOnPIM() {
        cy.logger('application', 'Clicking on PIM module')
        cy.xpath(this.dashboardLocators.pimModule).click();
    }

   

}
