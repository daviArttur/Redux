//// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

Cypress.Commands.add('getTokenUser', () => {
  console.log(Cypress.env('endpoint'))
  cy.request({
    method: 'POST',
    url: `${Cypress.env("endpoint")}/jwt-auth/v1/token`,
    headers: {'Content-Type': 'application/json'},
    body: {
      username: `${Cypress.env('username')}`,
      password: `${Cypress.env('password')}`
    }
  }).should(({status, body}) => {
    window.localStorage.setItem('token', JSON.stringify(body.token))
    expect(status).to.eq(200)
    expect(body.user_nicename).to.eq(Cypress.env('username'))
  })
})