describe("test all APIs", () => {
  const username = Cypress.env("username")
  const password = Cypress.env("password")
  let token = ''
  it('Api from login expects return status 200', () => {
    cy.request({
      method: "POST",
      url: "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        username,
        password
      }),
    }).should(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.token).length.to.greaterThan(100)
      token = body.token
    })
  })
  
  it('Api from Token login expects return status 200', () => {
    cy.request({
      method: "GET",
      url: "https://dogsapi.origamid.dev/json/api/user",
      headers: {
        Authorization: 'Bearer ' + token
      },
    }).should(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.username).to.eq(username)
    })
  })
})