import {filesCatalog} from "./model"
export class ItemView {
    private container: HTMLElement
    constructor() {
        this.container = this.createElement("div", "item-container")
        document.body.append(this.container)
    }
    renderItems(id:string,items: filesCatalog):void {
        const itemContainer = document.getElementById("item-container")
        for(const [k,v] of Object.entries(items)) {
            if(k === id) {
                const arrItem = document.querySelectorAll('.item');
                if (arrItem){
                    for(let i=0;i<arrItem.length;i++){
                        arrItem[i].remove();
                    }
                }
                for(const i in v) {
                    const item = this.createElement("div", "item", v[i].title)
                    item.dataset.name = v[i].title
                    itemContainer.append(item)
                }
            }
        }
        
    }
    bindShowDetails(showDetails:(id:string)=> void):void {
        const itemContainer = document.getElementById("item-container")
        itemContainer.addEventListener("click", (event) => {
            if((event.target as HTMLElement).classList.contains("item")) {
                showDetails((event.target as HTMLElement).dataset.name)
                // console.log((event.target as HTMLElement).dataset.name)
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