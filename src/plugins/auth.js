import axios from "axios";

let baseURL = `${process.env.VUE_APP_API_BASE_URL}/oauth`;


const instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-type": "application/json"
    },
});
export default instance;