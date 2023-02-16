import axios from "axios";

const clienteAxios = axios.create({
    baseURL : 'http://192.168.101.116:3001/'
});


export default clienteAxios;