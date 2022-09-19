import { method } from "lodash"

export class Organizationcreatepage{
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




//SETUP YOUR ORGANIZATION
    clickSetupyourorganization(){
      cy.get('.col-md-8 > :nth-child(1) > :nth-child(1)')
        .wait(2000)
        .click()
    }
    clickUncoughtdata(){
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    }

//GENAREL CONFIGURATION    
enterSitetitle(title){
      cy.get('.col-md-7 > :nth-child(1) > :nth-child(1) > .form-group > #companyName')
        // .click()
        .type(title)
    }
    enterSitedescription(description){
      cy.get('.col-md-7 > :nth-child(2) > :nth-child(1) > .form-group > #companyName')
        .type(description)
    }
    enterContactcompany_email(companyemail){
      cy.get('.col-md-7 > :nth-child(3) > :nth-child(1) > .form-group > #companyName')
        .type(companyemail)
        // .click()
    }
    enterSitecontactusername(username){
      cy.get('.col-md-7 > :nth-child(4) > :nth-child(1) > .form-group > #companyName')
        .type(username)
    }
    enterSitehomepage(homepage){
      cy.get('.col-md-7 > :nth-child(5) > :nth-child(1) > .form-group > #companyName')
        .type(homepage)
    }
    enterWebsitename(website){
      cy.get('.col-md-7 > :nth-child(6) > :nth-child(1) > .form-group > #companyName')
        .type(website)
    }
    enterLanguage(){
      cy.get(':nth-child(7) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
        .type('English {enter}')
    }
    enterCountry(){
      cy.get(':nth-child(8) > .css-b62m3t-container > .css-1s2u09g-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-8mmkcg')
        .type('Angola {enter}')
    }
    clickSelectteamsize(){
      // cy.get('#UPTO_20')
        // cy.get('#UPTO_50')
        // cy.get('#UPTO_100')
        cy.get('#UPTO_500')
        // cy.get('#ABOVE_1000')
        .click()
    }
    // clickUploadlogo(){
    //   cy.get('.col-md-5 > :nth-child(1) > :nth-child(2) > :nth-child(1) > .dz-message > div > .btn')
    //     .click()
    //     cy.wait(6000)
    // }

    // clickchoosepictureinlogo(){
      // cy.get('.ModalCoverImage__StyledImageCropWrapper-sc-3e8okl-0 > .blue')
        // .selectFile('[input type="file"]')
        // cy.get('input[type=file]')
        // cy.get('.large')
                // .click({ force : true })
                // .selectFile({
                //   contents,
                //   contents:'cypress/fixtures/picture.png', 
                //   filename: 'drag-drop',
                // })
                // cy.fixture( { encoding: null})
                // .then((contents) => {

                //   console.log(input)
                //   expect(input[0].files[0].name).to.equal('picture.png')
                // })
                // .as('special')
                // cy.get('input[type=file]').selectFile('cypress/fixtures/picture.png')
    // }
    // clickPerfectuploadcoverimageinlogo(){
    //   cy.get('[style="padding: 1rem; text-align: center;"] > #logo')
    //     .click()
    // }
    // clickNevermindinlogo(){
    //   cy.get('.black')
    //     .click()
    // }
    // clickUploadmobilelogo(){
    //   cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .dz-message > div > .btn')
    //     .click()
    //       cy.wait(6000)
    // }
    // clickPerfectuploadcoverimageinmobilelogo(){
    //   cy.get('[style="padding: 1rem; text-align: center;"] > #mobileLogo')
    //     .click()
    // }
    // clickNevermindinmobilelogo(){
    //   cy.get('.black')
    //     .click()
    // }
    // clickUploadfavicon(){
    //   cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .dz-message > div > .btn')
    //     .click()
    //       cy.wait(6000)
    // }
    // clickPerfectuploadcoverimageinfavicon(){
    //   cy.get('[style="padding: 1rem; text-align: center;"] > #favicon')
    //     .click()
    // }
    // clickNevermindinfavicone(){
    //   cy.get('.black')
    //     .click()
    // }
    clickSavechangesingenarelconfiguration(){
      cy.get('.col-md-7 > .text-right > .btn').click()
      cy.request({
        url: "https://stg.tercant.com/api/organization/setting",
        method: "PUT",
        body:{
            company_email: "poulamisarkar.wikiance@gmail.com",
            company_name: "hgg",
            company_website: "fjggjnbn",
            country: "Angola",
            language: "English",
            site_description: "hnjbjbmcjs nbjbs nbcs",
            site_home_page: "general configuration part",
            site_username: "rubisen",
            team_size: "UPTO_500"
        }
      }).its('body')
      .then(res => localStorage.setItem('authToken', res.user.token))
      
        
        cy.focused().click()
        cy.contains('Save changes').click()
      // .trigger('mouseover').wait(2000).dblclick({force:true});
      // cy.reload(true)
    }

//MAIL SERVERS    
    clickMailservers(){
      cy.get(':nth-child(2) > .nav-link')
        .wait(4000)
        .click()
    }
    enterServerhostname(hostname){
      cy.get(':nth-child(3) > :nth-child(1) > form > .row > :nth-child(1) > :nth-child(1) > :nth-child(1) > .form-group > #companyName')
        .type(hostname)
    }
    enterServerport(port){
      cy.get(':nth-child(3) > :nth-child(1) > form > .row > :nth-child(1) > :nth-child(2) > :nth-child(1) > .form-group > #companyName')
        .type(port)
    }
    enterUsername(user){
      cy.get(':nth-child(3) > :nth-child(1) > form > .row > :nth-child(1) > :nth-child(3) > :nth-child(1) > .form-group > #companyName')
        .type(user)
    }
    enterPasswordinmailserver(password){
      cy.get(':nth-child(3) > :nth-child(1) > form > .row > :nth-child(1) > :nth-child(4) > :nth-child(1) > .form-group > #companyName')
        .type(password)
    }
    enterFromaddress(address){
      cy.get(':nth-child(3) > :nth-child(1) > form > .row > :nth-child(1) > :nth-child(5) > :nth-child(1) > .form-group > #companyName')
        .type(address)
    }
    enterFromname(name){
      cy.get(':nth-child(3) > :nth-child(1) > form > .row > :nth-child(1) > :nth-child(6) > :nth-child(1) > .form-group > #companyName')
        .type(name)
    }
    enterSubjectprefix(subject){
      cy.get(':nth-child(7) > :nth-child(1) > .form-group > #companyName')
        .type(subject)
    }
    clickUploadinemailnotificationlogo(){
      cy.get(':nth-child(3) > :nth-child(1) > form > .row > :nth-child(2) > .mb-3 > :nth-child(2) > :nth-child(1) > .dz-message > [style="margin: 1rem 0px; text-align: center;"] > .btn')
        .click()
          cy.wait(8000)
    }
    clickPerfectuploadcoverimageinemailnotificationlogo(){
      cy.get('[style="padding: 1rem; text-align: center;"] > .blue')
        .click()
    }
    clickNevermindinemailnotificationlogo(){
      cy.get('.black')
        .click()
    }
    clickTestemail(){
      cy.get('[style="position: absolute; left: 950px; top: 820px;"] > .btn')
        .click()
    }
    clickSavechanges(){
      
      cy.get(':nth-child(2) > .text-right > .btn')
        .click()
    }

//SECURITY CONFIGURATION
    clickSecurityconfiguration(){
      cy.get(':nth-child(3) > .nav-link')
        .wait(6000)
        .click()
    }
    clickSavechangesinsecurityconfiguration(){
      cy.get('.active > :nth-child(1) > .text-right > .btn')
        .click()
        .wait(2000)
          cy.go('back')
          cy.go('back')
    }
    // clickTercantlogo(){
    //   cy.get('a > img')
    //     .click()
    // }
}