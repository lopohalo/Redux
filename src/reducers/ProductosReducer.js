import {  
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITOSO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_ERROR, 
  COMENZAR_DESCARGA_EXITOSO,
  COMENZAR_DESCARGA_PRODUCTOS, 
  OBTENER_PRODUCTO_ELIMINAR,
  ELIMINAR_PRODUCTO_EXITOSO,
  ELIMINAR_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  EDITAR_PRODUCTO_EXITOSO,
  EDITAR_PRODUCTO_ERROR} from "../types"

const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoeliminar: null,
  productoeditar: null
}

export default function( state = initialState, action ) {
    switch (action.type) {
      case COMENZAR_DESCARGA_PRODUCTOS:
      case AGREGAR_PRODUCTO:
        return {
          ...state,
          loading: action.payload,
        }    

      case AGREGAR_PRODUCTO_EXITOSO:
        return {
          ...state,
          loading: false,
          proyectos: [...state.productos, action.payload],
        }
    case EDITAR_PRODUCTO_ERROR:    
     case ELIMINAR_PRODUCTO_ERROR:   
      case COMENZAR_DESCARGA_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload,
          }  
      case COMENZAR_DESCARGA_EXITOSO:
            return {
              ...state,
              loading: false,
              error: null,
              productos: action.payload
            }  

      case OBTENER_PRODUCTO_ELIMINAR:
          return {
            ...state,
            productoeliminar: action.payload,
          }    
       
      case ELIMINAR_PRODUCTO_EXITOSO:
         return {
           ...state,
           productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
           productoeliminar: null
         }    
      
      case OBTENER_PRODUCTO_EDITAR:
        return {
          ...state,
          productoeditar: action.payload,
        } 
      
      case EDITAR_PRODUCTO_EXITOSO:
        return {
          ...state,
          productoeditar: null,
          productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto)
        }  
          
          
      default:
          return state;
    }
}