/* eslint-disable */
import Section from './index'

describe('Section', () => {
  
  const dl = document.createElement('dl')
  const section = new Section({title: 'Section trial', content: 'Content trial'}, dl)

  test('should be an instance of section', () => {
    expect(section).toBeInstanceOf(Section)
  })

  test('should be an instance of section', () => {
    expect(dl.childElementCount).toEqual(2)
    expect(dl.firstChild.className).toEqual("section__title")
    expect(dl.firstChild.firstChild.data).toEqual("Section trial")
    expect(dl.lastChild.className).toEqual("section__content")
    expect(dl.lastChild.lastChild.data).toEqual("Content trial")
  })

})