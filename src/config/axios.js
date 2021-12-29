import axios from "axios";

const clienteAxios = axios.create({
    baseURL: "http://localhost:4003/"
})

export default clienteAxios;