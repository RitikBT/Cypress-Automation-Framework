// import { beforeEach } from "mocha";
import { DashBoardPage } from "../../pages/dashBoardPage";
import { PIMPage } from "../../pages/PIMPage";
// import '../support/commands';
import data from '../../fixtures/TestData.json'


const dashBoard = new DashBoardPage();
const pimPage = new PIMPage();

describe('Validate User is Register', () => {

    beforeEach(() => {
        cy.login(data.validUser.userName, data.validUser.password);
    })

    // Rerun - multiple times
    Cypress._.times(1, (k) => {
        it('TC_01_Verify User is able to login', () => {
            dashBoard.verifyLoginSuccessfully() 
            cy.logger('application', "==========================================");       
        })
    })

// output- .json or csv
// skip
// Data- driven feature
// record 
// ReadMe.txt
// jenkins

    it.only('TC_02_Validate Added Employee Information', () => {
        dashBoard.clickOnPIM();
        pimPage.clickOnAddButton();
        pimPage.enterFirstName(data.Employee_Info.firstName);
        pimPage.enterLastName(data.Employee_Info.lastName);
        pimPage.enterEmpID();
        pimPage.clickOnSaveButton();
        pimPage.validateSuccessfullyToastMessage();
        cy.logger('application', "==========================================");   

    })



})