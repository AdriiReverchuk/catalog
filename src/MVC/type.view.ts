import {filesCatalog} from "./model"
export class TypeView {

    renderTypes(types:filesCatalog):void {
        const typeContainer = document.getElementById("type-container")

        for(const [k,v] of Object.entries(types)) {
            const type = this.createElement("div", "type", k)
            typeContainer.append(type)
            type.dataset.name = k
        }
    }
    bindShowItems(showItems:(id:string)=> void):void {
        
        const typeContainer = document.getElementById("type-container")
        typeContainer.addEventListener("click", (event) => {
            if((event.target as HTMLElement).classList.contains("type")) {
                showItems((event.target as HTMLElement).dataset.name)
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