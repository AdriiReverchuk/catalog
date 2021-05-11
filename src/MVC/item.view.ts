export class ItemView {
    private container: HTMLElement
    constructor() {
        this.container = this.createElement("div", "item-container")
        document.body.append(this.container)
    }
    renderItems(items):void {
        for(let i = 0; i < items.length; i++ ) {
            const item = this.createElement("div", "item", items[i].title)
            item.dataset.id = items[i].id
            this.container.append(item)
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