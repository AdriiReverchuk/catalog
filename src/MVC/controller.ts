import {Model} from "./model"
import {TypeView} from "./type.view"
import {ItemView} from "./item.view"
import {DetailsView} from "./details.view"
import {FormView} from "./form.view"


export class Controller {
    model: Model
    itemView: ItemView
    typeView: TypeView
    detailsView: DetailsView
    formView:FormView
    constructor(model: Model, itemView: ItemView, typeView: TypeView, detailsView: DetailsView, formView:FormView) {
        this.model = model
        this.itemView = itemView
        this.typeView = typeView
        this.detailsView = detailsView
        this.formView = formView
        this.typeView.renderTypes(this.model.getData())
        this.typeView.bindShowItems(this.handlShowItems)
        this.handlAddItems()
    }
    handlShowItems = (id:string):void => {
        this.itemView.renderItems(id,this.model.getData())
        this.itemView.bindShowDetails(this.handlShowDetails)
    }
    handlShowDetails = (id:string):void => {
        this.detailsView.renderDetals(id, this.model.getData())
    }
    handlAddItems =()=>{
        this.formView.addItems(this.model.getData())
        if(document.getElementsByClassName('item')){
            this.typeView.bindShowItems(this.handlShowItems)
        }
    }
}