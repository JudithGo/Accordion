'use strict'

/**
 * Request Component
 * @class Request
 */
class Request {
  /**
   * Creates an instance of Request
   *
   * @param {String}  url - The url of the API
   * @throws {Error} - Incorrect type
   * @memberof Request
   */
  constructor(url) {
    if (typeof url !== 'string') throw TypeError(`${url} is not a string`)
    this.url = url
  }

  /**
   * Handler get sections from api
   * @memberof Request
   */
  getSections() {
    return fetch(this.url)// eslint-disable-line
      .then(res => res.json())
      .then(result => result.sections)
      .catch(err => console.error(err)) // eslint-disable-line
  }
}

export default Request
