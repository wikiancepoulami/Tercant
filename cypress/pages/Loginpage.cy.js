export class Loginpage {
    navigate(URL){
        cy.visit(URL)
    }
    enterWorkemail(email){
        cy.get(':nth-child(1) > .form-group > .form-control')
          .type(email)
    }
    enterYourpassword(password){
        cy.get(':nth-child(2) > .form-group > .form-control')
          .type(password)
    }
    clickForloginbutton(){
        cy.get('.m-t-20')
          .click()
    } 
    clickLogoutbutton(){
        cy.get('.btn-outline-danger')
          .wait(2000)
          .click({force : true})
    }
    clickUncoughtdata(){
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false
        })
    }
    clickYeslogoutbutton(){
        cy.get(':nth-child(2) > .btn')
          .click()
    }
}