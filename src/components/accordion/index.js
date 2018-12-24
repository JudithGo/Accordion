import Request from '../request'
import Section from '../section'

class Accordion {
    constructor (dl){
        if(dl.tagName !== 'DL') throw TypeError(`${dl} is not a DL tag`)
        this.dl = dl
        this.dtElements = document.querySelectorAll('dt')
        this.ddElements = document.querySelectorAll('dd')
        this.request = new Request('api.json')
    }

    init(){
        this.handleAddClass()
        this.handleToggleClass()
        this.handleNewSection()
    }

    handleAddClass(){

        this.dl.classList.add('accordion')

        this.dtElements.forEach(dt => dt.classList.add('section__title'))
       
        this.ddElements.forEach(dd => dd.classList.add('section__content'))

    }

    handleToggleClass(){

        this.dl.addEventListener('click', event => {
            
            const dt = event.target

            if (dt) {
                const dd = event.target.nextElementSibling
                dt.classList.toggle('section__title--active')
                dd.classList.toggle('section__content--active')

            }  
        })
    }

    async handleNewSection(){

        const sections = await this.request.getSections()
        sections.forEach(section => new Section(section, this.dl))
        
    }  

}

export default Accordion