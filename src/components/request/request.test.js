/* eslint-disable */
import Request from './index'
global.fetch = require('jest-fetch-mock')

describe("request",() => {
  let request

  beforeEach(() => {

    request = new Request('http://localhost:3000/api.json')
     global.fetch = jest.fn().mockImplementation(() => {
        var promise = new Promise((resolve, reject) => {
          resolve({ 
            json: function() { 
              return {sections: [
                {"title":"Section 4","content":"Section 4 Content AJAX..."},
                {"title":"Section 5","content":"Section 5 Content AJAX..."},
                {"title":"Section 6","content":"Section 6 Content AJAX..."},
                {"title":"Section 7","content":"Section 7 Content AJAX..."}
            ]}
            }
          })
        })
        return promise
    })
  
  })

  test('should be an instance of Accordion', () => {
    expect(request).toBeInstanceOf(Request)
    expect(request.url).toEqual('http://localhost:3000/api.json')

  })

  it("Should on correct fetch", async() => {
    const response = await request.getSections()
    expect(response).toEqual([
      {"title":"Section 4","content":"Section 4 Content AJAX..."},
      {"title":"Section 5","content":"Section 5 Content AJAX..."},
      {"title":"Section 6","content":"Section 6 Content AJAX..."},
      {"title":"Section 7","content":"Section 7 Content AJAX..."}
    ])
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/api.json')

  })
})

