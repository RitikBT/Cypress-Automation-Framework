const jsonData = require('../../fixtures/DataDriven.json');
import data  from '../../fixtures/TestData.json';
import { PIMPage } from '../../pages/PIMPage';
import { DashBoardPage } from '../../pages/dashBoardPage';

const pimPage = new PIMPage();
const dashBoard = new DashBoardPage()

describe('Data Driven Suite', ()=>{

    beforeEach(() => {
        cy.login(data.validUser.userName, data.validUser.password);
    })

        jsonData.forEach((testData) =>{

            it('Validate Adding multiple Employee Information', () => {
                dashBoard.clickOnPIM();
                pimPage.clickOnAddButton();
                pimPage.enterFirstName(testData.firstName);
                pimPage.enterLastName(testData.lastName);
                pimPage.enterEmpID();
                pimPage.clickOnSaveButton();
                pimPage.validateSuccessfullyToastMessage();
                cy.logger('application', "==========================================");   
        
            })
        
        })
    
})