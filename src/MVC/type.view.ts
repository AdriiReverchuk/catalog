export class TypeView {
    private container: HTMLElement
    constructor() {
        this.container = this.createElement("div", "item-container")
        document.body.append(this.container)
    }
    renderTypes(types) {
        for(let i=0; i<types.length; i++) {
            const type = this.createElement('div', "type", types[i].title)
            type.dataset.id = types[i].id
            this.container.append(type)
        }
    }
    bindShowItems(showItems:(id:string)=> void):void {
        this.container.addEventListener("click", (event) => {
            if((event.target as HTMLElement).classList.contains("type")) {
                showItems((event.target as HTMLElement).dataset.id)
            }
        })
    }
    createElement(tag:string, className?: string, content?: string): HTMLElement {
        const element: HTMLElement = document.createElement(tag)
        if(className) element.classList.add(className)
        if(content) element.textContent = content
        return element
    }
}