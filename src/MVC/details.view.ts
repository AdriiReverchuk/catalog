import {filesCatalog} from "./model"
export class DetailsView {
    renderDetals(id,details:filesCatalog) {
        for(const [k,v] of Object.entries(details)) {
            
            for(const i in v) {
               if(id === v[i].title) {
                   const title = this.createElement("div")
               }
            }
        }
    }
    createElement(tag:string, className?: string, content?: string): HTMLElement {
        const element: HTMLElement = document.createElement(tag)
        if(className) element.classList.add(className)
        if(content) element.textContent = content
        return element
    }
}