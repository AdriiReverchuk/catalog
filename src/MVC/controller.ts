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
    }
}