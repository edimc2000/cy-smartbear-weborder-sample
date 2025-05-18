/// <reference types="cypress"/>
import BasePage from "../../pages/BasePage"
import loginPage from "../../pages/LoginPage"

describe('Login Verification', () => {

  const basePage = new BasePage()

  it('Validate login with valid credentials', { tags: ['true11'] }, () => {
    cy.visit(Cypress.env('APP_BASE_URL'))
    loginPage.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.url().should('include', 'weborders')
    basePage.getWebOrdersHeading().should('have.text', 'Web Orders')
    basePage.getLogoutButton().should('have.text', 'Logout')
    basePage.getWelcomeUserInfo().should('include.text', Cypress.env('USERNAME'))
  })

  it('2 Validate login with valid credentials', { tags: ["@smoke"] }, () => {
    cy.visit(Cypress.env('APP_BASE_URL'))
    loginPage.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.url().should('include', 'weborders')
    basePage.getWebOrdersHeading().should('have.text', 'Web Orders')
    basePage.getLogoutButton().should('have.text', 'Logout')
    basePage.getWelcomeUserInfo().should('include.text', Cypress.env('USERNAME'))
  })


    it('3 Validate login with valid credentials', { tags: ["@regression"] }, () => {
    cy.visit(Cypress.env('APP_BASE_URL'))
    loginPage.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.url().should('include', 'weborders')
    basePage.getWebOrdersHeading().should('have.text', 'Web Orders')
    basePage.getLogoutButton().should('have.text', 'Logout')
    basePage.getWelcomeUserInfo().should('include.text', Cypress.env('USERNAME'))
  })



})

