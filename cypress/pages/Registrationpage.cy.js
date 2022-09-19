export class Registrationpage{

        navigate(URL){
          cy.visit(URL)
        }
        clickCreateyourorganizationbutton(){
          cy.get('p.m-b-20 > span')
              .click()
        }
        enterYourfirstname(firstname){
            cy.get(':nth-child(1) > :nth-child(1) > .form-group > .form-control')
              .type(firstname)
        }
        enterYourlastname(lastname){
            cy.get(':nth-child(2) > :nth-child(1) > .form-group > .form-control')
              .type(lastname)
        }
        enterWorkemail(email){
            cy.get(':nth-child(2) > .form-group > .form-control')
              .type(email)
        }
        enterCompanyname(companyname){
            cy.get(':nth-child(3) > .form-group > .form-control')
              .type(companyname)
        }
        enterChoosepassword(choosepassword){
            cy.get('[style="width: 100%; position: relative;"] > :nth-child(1) > .form-group > .form-control')
              .type(choosepassword)
        }
        enterConfirmpassword(confirmpassword){
          cy.get(':nth-child(5) > .form-group > .form-control')
              .type(confirmpassword)
        }
        clickThecheckbox(){
            cy.get('[style="display: flex;"] > input')
              .check({force: true})
        }
        clickAgreeandstartbutton(){
            cy.get('.btn')
              .click()
                cy.wait(16000)
        }
//FOR VERIFICATION
        // clickVerificationcode(){
        //     cy.get('.form-control')
        //       .click()
        // }
        clickVerify(){
            cy.get('.btn')
              .click()
        }
  }