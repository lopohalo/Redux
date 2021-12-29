import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { editarProductoAction } from "../actions/productoActions";
import {useHistory } from "react-router-dom";
import { mostrarAlerta, ocultarAlerta } from "../actions/alertaActions";


const EditarProducto = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [ producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    })
   
   const productoeditar = useSelector(state => state.productos.productoeditar)

   useEffect(() => {
       guardarProducto(productoeditar);
   }, [productoeditar])

   const onChangeFormulario = e => {
       guardarProducto({
           ...producto,
           [e.target.name] : e.target.value
       });
   }
   const {nombre, precio} = producto
   const alerta = useSelector(state => state.alerta.alerta)

const submitEditarProducto = e => {
    e.preventDefault();
    if(nombre.trim() === '' || precio <= 0){
        const alerta = {
            msg: 'there was a mistake',
            classes: 'alert alert-danger text-center text-uppercase p3'
        }
        dispatch(mostrarAlerta(alerta))
        return;
    }

    dispatch(ocultarAlerta())
    

    dispatch(editarProductoAction(producto))

    history.push('/')
}   

return (
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar producto
                    </h2>
                    {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
                    <form
                     onSubmit={submitEditarProducto }
                    >
                        <div className="form-group">
                            <label>Nombre Producto</label>
                            <input 
                            type="text" 
                            className="form-control"
                            placeholder="Nombre Producto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeFormulario}
                            />
                        </div>
                        <div className="form-group">
                            <label>Precio Producto</label>
                            <input 
                            type="number" 
                            className="form-control"
                            placeholder="precio producto"
                            name="precio"
                            value={precio}
                            onChange={onChangeFormulario}
                            />
                        </div>
                        <button 
                         type="submit"
                         className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        >Agregar</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
)
}

export default EditarProducto;