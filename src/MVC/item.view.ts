import {filesCatalog} from "./model"
export class ItemView {
    private container: HTMLElement
    constructor() {
        this.container = this.createElement("div", "item-container")
        document.body.append(this.container)
    }
    renderItems(id:string,items: filesCatalog):void {
        // const [k,v]
        // Object.entries(items)
        const itemContainer = document.getElementById("item-container")

        for(const [k,v] of Object.entries(items)) {
            if(k === id) {
                for(const i in v) {
                    const item = this.createElement("div", "item", v[i].title)
                    itemContainer.append(item)
                }
            }
        }
        
    }
    bindShowDetails(showDetails:(id:string)=> void):void {
        this.container.addEventListener("click", (event) => {
            if((event.target as HTMLElement).classList.contains("item")) {
                showDetails((event.target as HTMLElement).dataset.id)
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