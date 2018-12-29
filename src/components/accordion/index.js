'use strict'

import Request from '../request'
import Section from '../section'

/**
 * Accordion Component
 * @class Accordion
 */

class Accordion {
  /**
   * Creates an instance of Accordion
   *
   * @param {HTMLElement}  dl - The htmlElement
   * @throws {Error} - Incorrect type
   * @memberof Accordion
   */

  constructor(dl) {
    if (dl.tagName !== 'DL') throw TypeError(`${dl} is not a DL tag`)
    this.dl = dl
    this.dtElements = document.querySelectorAll('dt')
    this.ddElements = document.querySelectorAll('dd')
    this.request = new Request('api.json')
  }

  /**
   * Handler init
   * @memberof Accordion
   */
  init() {
    this.handleAddClass()
    this.handleToggleClass()
    this.handleNewSection()
  }

  /**
   * Handler add class
   * @memberof Accordion
   */
  handleAddClass() {
    this.dl.classList.add('accordion')

    this.dtElements.forEach(dt => dt.classList.add('section__title'))

    this.ddElements.forEach(dd => dd.classList.add('section__content'))
  }

  /**
   * Handler toggle class when dt is clicked
   * @memberof Accordion
   */
  handleToggleClass() {
    this.dl.addEventListener('click', event => {
      const dt = event.target
      if (dt.tagName === 'DT') {
        const dd = event.target.nextElementSibling
        dt.classList.toggle('section__title--active')
        dd.classList.toggle('section__content--active')
      }
    })
  }

  /**
   * Handler new section with AJAX request
   * @memberof Accordion
   */
  async handleNewSection() {
    const sections = await this.request.getSections()
    sections.forEach(section => new Section(section, this.dl))
  }
}

export default Accordion
