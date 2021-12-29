import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { borrarProductionAction, obtenerProductoEditar } from "../actions/productoActions";
import Swal from "sweetalert2";


const Producto = ({producto}) => {
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const historia = useHistory();

const confirmarEliminarProducto = id => {
         
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
        dispatch(borrarProductionAction(id))
    }
  })
    }
  const redireccionarEdicioN = producto => {
     dispatch(obtenerProductoEditar(producto))
     historia.push(`/productos/editar/&{producto.id}`)
  }


    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weigth-bold">${precio}</span></td>
            <td className="acciones">
                <button 
                   type="button"                  
                   className="btn btn-primary mr-2"
                   onClick={ () => redireccionarEdicioN(producto) }
                   >
                    EDITAR</button>
                <button  
                    type="button" 
                    className="btn btn-danger"
                    onClick={() =>confirmarEliminarProducto(id)}
                    >
                ELIMINAR</button>
            </td>
        </tr>
    )
}

export default Producto
