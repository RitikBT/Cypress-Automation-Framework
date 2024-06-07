export class LoginPage{

    LoginLocators = {
        usernameTxt : "input[name=username]",
        userPasswordtxt : "input[name=password]",
        loginButton : "button[type=submit]"
    }

       openURL(){
        cy.logger('application', "Launching the application")
        cy.visit(Cypress.env('URL'));
       }


    setUserName(username){
        cy.logger('application','Entering user name');
        cy.get(this.LoginLocators.usernameTxt).type(username)
        
    }

    setUserPassword(userPassword){
        cy.logger('application','Entering user password');
        cy.get(this.LoginLocators.userPasswordtxt).type(userPassword); 
    }

    clickLoginButton(){
        cy.logger('application','Clicking on login button')
        cy.get(this.LoginLocators.loginButton).click();
    }
}
