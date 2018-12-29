/* eslint-disable */
/// <reference types="Cypress" />
describe('Accordion', () => {
  it('should be accordion.init', () => {
    cy.visit('http://localhost:3000')
    cy.get('dl').should('have.class', 'accordion')
    cy.get('dl').children().should('have.length', 14)
    cy.get('dt').should('have.class', 'section__title')
    cy.get('dd').should('have.class', 'section__content')

    cy.get('dt').eq(3).should('contain', 'Section 4')
    cy.get('dd').eq(3).should('contain', 'Section 4 Content AJAX...')
  })

  it('should be when section title is cliked (handleToggleClass)', () => {
    cy.visit('http://localhost:3000')
    cy.get('.accordion')
      .contains('Section 1')
      .click()
    cy.contains('Section 1').should('have.class', 'section__title--active')
    cy.contains('Section 1 Content...')
      .parent('dd')
      .should('have.class', 'section__content--active')
    cy.contains('Section 1 Content...')
      .parent('dd')
      .should('be.visible')
  })

  it('should be if content section is active and it`s section title is cliked (handleToggleClass)', () => {
    cy.visit('http://localhost:3000')
    cy.get('.accordion')
      .contains('Section 1')
      .click()
    cy.get('.section__title--active').contains('Section 1')
    cy.get('.section__content--active').contains('Section 1 Content...')

    cy.get('.accordion')
      .contains('Section 1')
      .click()
    cy.contains('Section 1').should('not.have.class', 'section__title--active')
    cy.contains('Section 1 Content...')
      .parent('dd')
      .should('not.have.class', 'section__content--active')
    cy.contains('Section 1 Content...')
      .parent('dd')
      .should('not.be.visible')
  })
})
