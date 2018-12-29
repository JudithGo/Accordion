/* eslint-disable */

/// <reference types="Cypress" />
import Section from '../../src/components/section'

describe('section', () => {
  let dl, window
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.window().then(win => {
      window = win
      // dl = win.document.createElement('dl')
    })
  })

  it('should be section with correct params', () => {
    dl = window.document.querySelector('dl')
    // eslint-disable-next-line no-new
    new Section({title: 'Section trial', content: 'Content trial'}, dl)
  })
})
