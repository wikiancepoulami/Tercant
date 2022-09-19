export class Spacecreatepage {

//CREATE YOUR FIRST SPACE STEPS
      clickCreateyourfirstspace(){
        cy.get('.col-md-8 > :nth-child(1) > :nth-child(3)')
          .click()
            cy.wait(4000)
      }
      clickUncoughtdata(){
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false
        })
      }
      clickCreateyourfirstspacebutton(){
        cy.get('.m-t-20')
          .click();
      }
      clickNevermindinspace(){
        cy.get('.btn-info')
          .click()
      }
      clickCreateinspace(){
        cy.get('.pull-bottom > .btn-complete')
          .click()
      }
      clickKnowledgebase(){  //KNOWLEDGEBASE SPACE CREATE
        cy.get(':nth-child(1) > .undefined > .SpaceTypeCard__TypeContainer-sc-1lr9f87-0')
          .click()
      }
      clickChooseandnextbutton(){
        cy.get('.m-t-30 > .btn-complete')
          .click()
      }
      clickGobackbutton(){
        cy.get('.btn-info')
          .click()
      }
      enterTitleinknowledgebase(title){
        cy.get(':nth-child(2) > .form-group > .form-control')
        .type(title)
      }
      enterDescriptioninknowledgebase(description){
        cy.get(':nth-child(3) > .form-group > .form-control')
          .type(description)
      }
      clickAddinvitation(){
        cy.get('.text-complete')
          .click()
      }
      clickCreatebuttoninknowledgebase(){
        cy.get('.text-right > .btn-complete')
          .wait(2000)
          .click({force : true})
            cy.reload(true)
      }
      clickGobackinknowledgebase(){
        cy.get('.btn-info')
          .click()
      }
      clickInspacecardoption(){  //CARD OPTION
        cy.get(':nth-child(2) > .col-4 > [viewBox="0 0 576 512"] > path')
          .click()
      }
      clickDeleteoptionincard(){
        cy.get('[style="float: right;"] > [viewBox="0 0 448 512"] > path')
          .click()
      }
      clickDelete(){
        cy.get('.btn-danger')
          .click()
      }
      clickCancel(){
        cy.get('.text-right > .btn-complete')
          .click()
      }
  
  // OTHER SPACES :)
      clickPersonalspace(){  //PERSONAL SPACE CREATE
        cy.get(':nth-child(2) > .undefined > .SpaceTypeCard__TypeContainer-sc-1lr9f87-0')
          .click()
      }
      clickChooseandnextbuttoninpersonal(){
        cy.get('.m-t-30 > .btn-complete')
          .click()
      }
      clickGobackbuttoninpersonal(){
        cy.get('.btn-info')
          .click()
      }
      enterTitleinpersonal(){}
      enterDescriptioninpersonal(){}
      clickAddbuttoninpersonal(){}
      clickGobackinpersonal(){}
      clickCreateinpersonal(){}
      clickInspacecardoption(){  //CARD OPTION
        cy.get(':nth-child(2) > .col-4 > [viewBox="0 0 576 512"] > path')
          .click()
      }
      clickDeleteoptionincard(){
        cy.get('[style="float: right;"] > [viewBox="0 0 448 512"] > path')
          .click()
      }
      clickDelete(){
        cy.get('.btn-danger')
          .click()
      }
      clickCancel(){
        cy.get('.text-right > .btn-complete')
          .click()
      }
  
      clickDocumentationspace(){  //DOCUMENTATION SPACE CREATE
        cy.get(':nth-child(1) > :nth-child(2) > .SpaceTypeCard__TypeContainer-sc-1lr9f87-0')
          .click()
      }
      clickChooseandnextbutton(){
        cy.get('.m-t-30 > .btn-complete')
          .click()
      }
      clickGobackbutton(){
        cy.get('.btn-info')
          .click()
      }
      enterTitleindocumentation(){}
      enterDescriptionindocumentation(){}
      clickAddbuttonindocumentation(){}
      clickGobackindocumentation(){}
      clickCreateindocumentation(){}
      clickInspacecardoption(){  //CARD OPTION
        cy.get(':nth-child(2) > .col-4 > [viewBox="0 0 576 512"] > path')
          .click()
      }
      clickDeleteoptionincard(){
        cy.get('[style="float: right;"] > [viewBox="0 0 448 512"] > path')
          .click()
      }
      clickDelete(){
        cy.get('.btn-danger')
          .click()
      }
      clickCancel(){
        cy.get('.text-right > .btn-complete')
          .click()
      }
  
      clickSoftwareprojectspace(){  //SOFTWAREPROJECT SPACE CREATE
        cy.get(':nth-child(2) > :nth-child(2) > .SpaceTypeCard__TypeContainer-sc-1lr9f87-0')
          .click()
      }
      clickChooseandnextbutton(){
        cy.get('.m-t-30 > .btn-complete')
          .click()
      }
      clickGobackbutton(){
        cy.get('.btn-info')
          .click()
      }
      enterTitleinsoftware(){}
      enterDescriptioninsoftware(){}
      clickAddbuttoninsoftware(){}
      clickGobackinsoftware(){}
      clickCreateinsoftware(){}
      clickInspacecardoption(){  //CARD OPTION
        cy.get(':nth-child(2) > .col-4 > [viewBox="0 0 576 512"] > path')
          .click()
      }
      clickDeleteoptionincard(){
        cy.get('[style="float: right;"] > [viewBox="0 0 448 512"] > path')
          .click()
      }
      clickDelete(){
        cy.get('.btn-danger')
          .click()
      }
      clickCancel(){
        cy.get('.text-right > .btn-complete')
          .click()
      }
  
      clickTeamspace(){  //TEAM SPACE CREATE
        cy.get(':nth-child(1) > :nth-child(3) > .SpaceTypeCard__TypeContainer-sc-1lr9f87-0')
          .click()
      }
      clickChooseandnextbutton(){
        cy.get('.m-t-30 > .btn-complete')
          .click()
      }
      clickGobackbutton(){
        cy.get('.btn-info')
          .click()
      }
      enterTitleinteam(){}
      enterDescriptioninteam(){}
      clickAddbuttoninteam(){}
      clickGobackinteam(){}
      clickCreateinteam(){}
      clickInspacecardoption(){  //CARD OPTION
        cy.get(':nth-child(2) > .col-4 > [viewBox="0 0 576 512"] > path')
          .click()
      }
      clickDeleteoptionincard(){
        cy.get('[style="float: right;"] > [viewBox="0 0 448 512"] > path')
          .click()
      }
      clickDelete(){
        cy.get('.btn-danger')
          .click()
      }
      clickCancel(){
        cy.get('.text-right > .btn-complete')
          .click()
      }
  
      clickDepartmentspace(){  //DEPARTMENT SPACE CREATE
        cy.get(':nth-child(2) > :nth-child(3) > .SpaceTypeCard__TypeContainer-sc-1lr9f87-0')
          .click()
      }
      clickChooseandnextbutton(){
        cy.get('.m-t-30 > .btn-complete')
          .click()
      }
      clickGobackbutton(){
        cy.get('.btn-info')
          .click()
      }
      enterTitleindepartment(){}
      enterDescriptionindepartment(){}
      clickAddbuttonindepartment(){}
      clickGobackindepartment(){}
      clickCreateindepartment(){}
      clickInspacecardoption(){  //CARD OPTION
        cy.get(':nth-child(2) > .col-4 > [viewBox="0 0 576 512"] > path')
          .click()
      }
      clickDeleteoptionincard(){
        cy.get('[style="float: right;"] > [viewBox="0 0 448 512"] > path')
          .click()
      }
      clickDelete(){
        cy.get('.btn-danger')
          .click()
      }
      clickCancel(){
        cy.get('.text-right > .btn-complete')
          .click()
      }
}