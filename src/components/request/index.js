
class Request {
    constructor(url){
        if (typeof url !== 'string') throw TypeError(`${url} is not a string`)
        this.url = url
    } 

    getSections () {
        return fetch(this.url)
        .then(res => res.json())
        .then(result => result.sections)
        .catch(err => console.error(err))

    }
}

export default Request