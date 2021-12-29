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
    COMENZAR_EDICION_PRODUCTO,
    EDITAR_PRODUCTO_EXITOSO,
    EDITAR_PRODUCTO_ERROR
        
} from "../types"
import clienteAxios from "../config/axios"
import Swal from "sweetalert2"

export function crearNuevoProductoAction(producto){
    return(dispatch) => {
     dispatch(agregarProducto())
     try{
         clienteAxios.post('/productos', producto)
         dispatch(agregarProductoExitoso(producto))
         Swal.fire('correct', 'The product was added successfully','success')
     }catch(error){
         dispatch(agregarProductoError())
         Swal.fire({icon: 'error', title: 'Error', text: 'There wasa a mistake, please try again'})
     }
}
}
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

const agregarProductoExitoso = producto => ({
    type: AGREGAR_PRODUCTO_EXITOSO,
    payload: producto
})

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})



export function obtenerProductosAction(){
    return async (dispatch) =>{
        dispatch(descargaProductos())
        try{
          const respuesta = await clienteAxios.get('/productos')
          dispatch(descargaProductosExitosa(respuesta.data))
        } catch(error){
            dispatch(descargaProductosError())
        }
    }
}


const descargaProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})
const descargaProductosExitosa = productos => ({
    type: COMENZAR_DESCARGA_EXITOSO,
    payload: productos
})

const descargaProductosError = () => ({
    type: COMENZAR_DESCARGA_ERROR,
    payload: true
})

export function borrarProductionAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id))
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito())
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

        } catch (error) {
            dispatch(eliminarProductoError())

        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id,
})

const eliminarProductoExito = () => ({
    type: ELIMINAR_PRODUCTO_EXITOSO,

})

const eliminarProductoError = () => ({
    type: ELIMINAR_PRODUCTO_ERROR,
    payload: true

})


export function obtenerProductoEditar(producto) {
    return(dispatch) => {
    dispatch(obtenerElProductoAction(producto))
  }
}

const obtenerElProductoAction = (producto) => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch(editarProducto())
        try{
         await clienteAxios.put(`/productos/${producto.id}`, producto)
        dispatch(editarProductoExito(producto))
        } catch(error){
         editarProductoError(true)
        }
    }
}

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO,
   
})

const editarProductoExito = producto => ({
    type: EDITAR_PRODUCTO_EXITOSO,
    payload: producto,
})

const editarProductoError = () => ({
    type: EDITAR_PRODUCTO_ERROR
})