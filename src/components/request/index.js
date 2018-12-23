
class Request {
    constructor(url){
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