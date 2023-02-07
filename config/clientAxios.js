import axios from "axios";

const clienteAxios = axios.create({
    baseURL : 'http://192.168.1.2:3001/'
});


export default clienteAxios;