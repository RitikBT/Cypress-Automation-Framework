export class PIMPage {

    PIMLocators = {
        addButton: "//div[contains(@class,'orangehrm-header')]//button",
        firstName: "input[name='firstName']",
        lastName: "input[name='lastName']",
        saveButton: "button[type='submit']",
        empId: "(//input[contains(@class,'input--active')])[last()]"
    }

    clickOnAddButton() {
        cy.logger('application', "Clicking on Add button");
        cy.xpath(this.PIMLocators.addButton).click();
    }

    enterFirstName(firstName) {
        cy.logger('application', 'Entering first name')
        cy.get(this.PIMLocators.firstName).type(firstName);
    }

    enterLastName(lastName) {
        cy.logger('application', 'Entering last name')
        cy.get(this.PIMLocators.lastName).type(lastName);
    }

    clickOnSaveButton() {
        cy.logger('application', "Clicking on Save Button");
        cy.get(this.PIMLocators.saveButton).click();
    }

    enterEmpID() {
        cy.logger('application', 'Entering Emp ID')
        const min = 100;
        const max = 999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        cy.xpath(this.PIMLocators.empId).clear().type('9'+randomNumber);
    }

    validateSuccessfullyToastMessage() {
        cy.logger('application', "Validate Successfully Toast Message");
        cy.get('.oxd-toast').should('be.visible');
        cy.get('.oxd-text--toast-message').invoke('text').then((resp) => {
            expect(resp).to.equal('Successfully Saved')
        })
    }
}