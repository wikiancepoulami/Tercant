export class Inviteteampage{

//INVITE YOUR TEAMMATES STEPS
clickInviteyourteammates(){
    cy.get('.col-md-8 > :nth-child(1) > :nth-child(2)')
      .click()
  }
  clickUncoughtdata(){
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  }
  clickTeammembersbutton(){
    cy.get('.TeamsTab__StyledButton-sc-d36pvr-0 > small')
      .click()
  }
  enterWorkemailteammember(email){
    cy.get('.form-control')
      .type(email)
  }
  clickAnymemberstypebutton(){
    // cy.get('.m-t-15 > div > :nth-child(1)')
    // cy.get('.m-t-15 > div > :nth-child(2)')
    cy.get('.m-t-15 > div > :nth-child(3)')
      .click()
  }
  clickAddbuttoninteammember(){
    cy.get('.CreateInviteForm__StyledButton-sc-k9ltir-0')
      .click()
  }
  clickInvite0members(){
    cy.get('.btn-info')
      .click()
  }
  clickNevermindteammember(){
    cy.get('.btn-complete')
      .click()
  }
  clickActionsinteammember(){
    cy.get(':nth-child(2) > :nth-child(4) > .tercant-dropdown > span > .feather')
      .trigger('mouseover')
      .click()
  }
  clickResendinvitationinactions(){}
  clickDeleteinactions(){
    cy.get('.tercant-dropdown > span > .feather > .tercant-dropdown-content-userlist > [style="display: none]')
      .click()
  }
  clickOngroup(){
    cy.get('.nav > :nth-child(2) > a')
      .click()
  }
  clickGroupsbutton(){
    cy.get('.GroupsTab__StyledButton-sc-135i840-0 > small')
      .click()
  }
  enterGroupname(groupname){
    cy.get(':nth-child(1) > :nth-child(1) > .form-group > .form-control')
      .type(groupname)
  }
  enterDescriptioningroup(description){
    cy.get('.m-t-20 > :nth-child(1) > .form-group > .form-control')
      .type(description)
  }
  clickAddingroup(){
    cy.get('.col-4 > .btn')
      .click()
        cy.go('back')
        cy.go('back')
  }
  clickNevermindingroup(){
    cy.get('.col-8 > .btn')
      .click()
  }
  clickActionsingroup(){}
  clickResendinvitationingroupactions(){}
  clickDeleteingroupactions(){}
}