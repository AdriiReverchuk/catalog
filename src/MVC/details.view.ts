import {filesCatalog} from "./model"
export class DetailsView {
    renderDetals(id,details:filesCatalog) {
        const descriptionContainer = document.getElementById("description-container")
        for(const [k,v] of Object.entries(details)) {
            for(const i in v) {
               if(id === v[i].title) {
                const arrItem = document.querySelectorAll('.description');
                if (arrItem){
                    for(let i=0;i<arrItem.length;i++){
                        arrItem[i].remove();
                    }
                }
                   const title = this.createElement("div", "description")
                   title.textContent = `Name: ${id}, Tags: ${v[i].arrTags}`
                   descriptionContainer.append(title)
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