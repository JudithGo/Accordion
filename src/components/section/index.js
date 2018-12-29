'use strict'

/**
 * Section Component
 * @class Section
 */
class Section {
  /**
   * Creates an instance of Section
   *
   * @param {Object}  section - Object with title and content of section
   * @param {HTMLElement}  dl - The htmlElement
   * @throws {Error} - Incorrect type
   * @memberof Section
   */
  constructor(section, dl) {
    if (typeof section !== 'object')
      throw TypeError(`${section} is not an object`)
    if (dl.tagName !== 'DL') throw TypeError(`${dl} is not a DL tag`)

    this.dl = dl
    this.section = section

    this.handleCreateNode('dt', section.title, 'section__title')

    this.handleCreateNode('dd', section.content, 'section__content')
  }

  /**
   * Handler create node
   * @param {String} tag - The tag name of the new element
   * @param {String} textContent - The text content
   * @param {String} ClassName - The class name of the element
   * @throws {Error} - Incorrect type
   * @memberof Section
   */
  handleCreateNode(tag, textContent, className) {
    if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
    if (typeof textContent !== 'string')
      throw TypeError(`${textContent} is not a string`)
    if (typeof className !== 'string')
      throw TypeError(`${className} is not a string`)

    const node = document.createElement(tag)
    node.textContent = textContent
    node.classList.add(className)

    this.dl.appendChild(node)
  }
}

export default Section
