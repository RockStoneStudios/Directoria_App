import axios from "axios";

const clienteAxios = axios.create({
    baseURL : 'http://192.168.101.113:3001/'
});


export default clienteAxios;