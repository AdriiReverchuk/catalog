import {Model} from "./MVC/model"
import {ItemView} from "./MVC/item.view"
import {Controller} from "./MVC/controller"
import {TypeView} from "./MVC/type.view"
import {DetailsView} from "./MVC/details.view"
import {FormView} from "./MVC/form.view"

const catalog = new Controller(new Model(), new ItemView(), new TypeView(), new DetailsView(),new FormView())


