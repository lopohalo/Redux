import { combineReducers } from "redux";
import productosReducer from "./ProductosReducer";
import alertaReducer from "./alertaReducer"


export default combineReducers({

    productos: productosReducer,
    alerta: alertaReducer,
})