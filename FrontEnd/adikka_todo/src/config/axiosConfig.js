import axios from 'axios';

// Configuracion de la base URL de conexion con el backend
const ClientAxios = axios.create({
    baseURL: 'http://localhost:4000'
});

export default ClientAxios;