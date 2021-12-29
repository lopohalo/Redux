import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types"



export function mostrarAlerta(alerta) {
    return (dispatch) => {
        dispatch(crearAlerta(alerta))
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})


export function ocultarAlerta() {
    return (dispatch) => dispatch(ocultarAlertas())
}
const ocultarAlertas = () => ({
    type: OCULTAR_ALERTA,
})