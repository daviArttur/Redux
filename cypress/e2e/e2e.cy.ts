it("E2E test aplication", () => {
  cy.visit("/")
  
  cy.get("form")

  // type input name
  cy.get('.inputName').type(Cypress.env("username"), { force: true })

  // type input password
  cy.get('.inputPassword').type(Cypress.env("password"), { force: true })

  cy.contains("Entrar").click({ force: true})

  // await fecth and write assertions
  cy.wait(2000)
  expect(cy.get("form").should("not.exist"))
  cy.get("img").should("have.length", 3)
  cy.get("strong").should("have.length", 3)
  cy.get("p").should("have.length", 3)
  cy.contains("+").click({ force: true})

  cy.wait(2000)
  cy.get("img").should("have.length", 6)
  cy.get("strong").should("have.length", 6)
  cy.get("p").should("have.length", 6)

  cy.contains("+").click({ force: true})

  cy.wait(2000)
  cy.get("img").should("have.length", 9)
  cy.get("strong").should("have.length", 9)
  cy.get("p").should("have.length", 9)

  // disconect user
  cy.get('[data-testid="button"]').click({ force: true})

  // confirm that user returned to login screen
  expect(cy.get("form").should("be.visible"))
})