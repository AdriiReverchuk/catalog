import {Model} from "./model"
import {TypeView} from "./type.view"
import {ItemView} from "./item.view"


export class Controller {
    model: Model
    itemView: ItemView
    typeView: TypeView
    constructor(model: Model, itemView: ItemView, typeView: TypeView) {
        this.model = model
        this.itemView = itemView
        this.typeView = typeView

        this.typeView.renderTypes(this.model.getData())
        this.typeView.bindShowItems(this.handlShowItems)
    }
    handlShowItems = (id) => {
 
        this.itemView.renderItems(id,this.model.getData())
    }
}