import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { crearNuevoProductoAction } from "../actions/productoActions";
import { mostrarAlerta, ocultarAlerta } from "../actions/alertaActions";

const NuevoProducto = ({history}) => {

    const dispatch = useDispatch();

    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto))

    const [nombre, guardarNombre] = useState('')
    const [precio, setprecio] = useState(0)
    
    const error = useSelector(state => state.productos.error)
    const cargando = useSelector(state => state.productos.cargando)
    const alerta = useSelector(state => state.alerta.alerta)


    const SubmitNuevoProducto = e => {
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
        
        agregarProducto({
            nombre,
            precio
        })

        history.push('/')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar producto
                        </h2>
                        {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
                        <form
                         onSubmit={SubmitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                type="text" 
                                className="form-control"
                                placeholder="Nombre Producto"
                                name="nombre"
                                value={nombre}
                                onChange={e => guardarNombre(e.target.value)}
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
                                onChange={e => setprecio(Number(e.target.value))}
                                />
                            </div>
                            <button 
                             type="submit"
                             className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                        {cargando ? <p>cargando...</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center" >Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto;