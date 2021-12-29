import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";
import Producto from "./Producto";


const Productos = () => {

    const dispatch = useDispatch()
  

    useEffect(() => {
        console.log("useeffectsin dependencias")
       const cargarProductos = () => dispatch(obtenerProductosAction())
       cargarProductos()
       // eslint-disable-next-line 
    }, [])

    const productos = useSelector( state => state.productos.productos);

    return(
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
                </thead>
                <tbody>
                   {productos.length === 0 ? 'NO HAY PRODUCTOS' :
                    productos.map(producto => (
                        <Producto 
                          key={producto.id}
                          producto={producto}
                        />
                    ))
                   }
                </tbody>
            </table>
        </Fragment>
    )
}

export default Productos;