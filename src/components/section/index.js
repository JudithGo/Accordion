class Section {

    constructor(section, dl){
        
        this.dl = dl
        this.section = section

        this.handleCreateNode('dt', section.title, 'accordion__section-title')
        
        this.handleCreateNode('dd', section.content, 'accordion__section-content')

    }

    handleCreateNode(tag, textContent, className){

        const node = document.createElement(tag)
        node.textContent = textContent
        node.classList.add(className)

        this.dl.appendChild(node)
        
    }
}

export default Section