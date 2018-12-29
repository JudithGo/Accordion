/* eslint-disable */
import Accordion from './index'
import Request from '../request/index'

describe('Accordion', () => {
  const dl = document.createElement('dl')
  const dt = document.createElement('dt')
  const dd = document.createElement('dd')
  dl.appendChild(dt)
  dl.appendChild(dd)
  let accordion

  beforeEach(() => {
    accordion = new Accordion(dl)
  })
  afterEach(() => {
    accordion = null
  })

  test('should be an instance of Accordion', () => {
    expect(accordion).toBeInstanceOf(Accordion)
  })

  test('should be an instance of Accordion', () => {
    expect(accordion.request).toBeInstanceOf(Request)
  })

})
