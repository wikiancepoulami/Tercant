// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options)=> { ... })


Cypress.Commands.add("paste", { prevSubject: true }, (selector, pastePayload) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event
    cy.wrap(selector).then($destination => {
      const pasteEvent = Object.assign(new Event("paste", { bubbles: true, cancelable: true }), {
        clipboardData: {
          getData: () => pastePayload
        }
      });
      $destination[0].dispatchEvent(pasteEvent);
    });
  });

  import 'cypress-file-upload';

  // Cypress.Commands.Add('login', (userName, password) => {
  //   cy.request({
  //       method:'POST', 
  //       url:'https://stg.tercant.com/api/login',
  //       body: {
  //         userName,
  //         password,
  //       }
  //     })
  //     .as('loginResponse')
  //     .then((response) => {
  //       Cypress.env('token', response.body.accessToken); // either this or some global var but remember that this will only work in one test case
  //       return response;
  //     })
  //     .its('status')
  //     .should('eq', 200);
  // })


  Cypress.Commands.add('checkToken', (token) => {
    cy.window().its('localStorage.token').should('eq', token)
  })
  // cy.checkToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNjJmMjZlMDE4OTZmODcwMDFhNmI0MDdiIiwiaWF0IjoxNjYwMDU3MDU1fQ.mODYsg7Wr6s9mCTeUBFubVkcGV0y20EELRiMc3e71M8');