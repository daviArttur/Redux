it("E2E test aplication", () => {
  const clickInButton = (contains: string) => cy.contains(`${contains}`).click()
  cy.visit("/")
  
  cy.get("form")

  // type input name
  cy.get('[data-testid="inputName"]')
    .type(Cypress.env("username"))

  // type input password
  cy.get('[data-testid="inputPassword"]')
    .type(Cypress.env("password"))

  clickInButton("Entrar")

  // await fecth and write assertions
  cy.wait(2000)
  expect(cy.get("form").should("not.exist"))
  cy.get("img").should("have.length", 3)
  cy.get("strong").should("have.length", 3)
  cy.get("p").should("have.length", 3)
  clickInButton("+")

  cy.wait(2000)
  cy.get("img").should("have.length", 6)
  cy.get("strong").should("have.length", 6)
  cy.get("p").should("have.length", 6)

  clickInButton("+")

  cy.wait(2000)
  cy.get("img").should("have.length", 9)
  cy.get("strong").should("have.length", 9)
  cy.get("p").should("have.length", 9)

  // disconect user
  cy.get('[data-testid="button"]').click()

  // confirm that user returned to login screen
  expect(cy.get("form").should("be.visible"))
})
