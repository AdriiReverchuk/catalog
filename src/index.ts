import {Model} from "./MVC/model"
import {ItemView} from "./MVC/item.view"
import {Controller} from "./MVC/controller"
import {TypeView} from "./MVC/type.view"

const catalog = new Controller(new Model(), new ItemView(), new TypeView())


