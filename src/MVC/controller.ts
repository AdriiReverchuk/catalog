import {Model} from "./model"
import {TypeView} from "./type.view"
import {ItemView} from "./item.view"
import {DetailsView} from "./details.view"


export class Controller {
    model: Model
    itemView: ItemView
    typeView: TypeView
    detailsView: DetailsView
    constructor(model: Model, itemView: ItemView, typeView: TypeView, detailsView: DetailsView) {
        this.model = model
        this.itemView = itemView
        this.typeView = typeView
        this.detailsView = detailsView

        this.typeView.renderTypes(this.model.getData())
        this.typeView.bindShowItems(this.handlShowItems)

        
    }
    handlShowItems = (id:string):void => {
        this.itemView.renderItems(id,this.model.getData())
        this.itemView.bindShowDetails(this.handlShowDetails)
    }
    handlShowDetails = (id:string):void => {
        this.detailsView.renderDetals(id, this.model.getData())
    }
}