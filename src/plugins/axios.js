import axios from "axios";
import {store} from "@/stores"

let baseURL = `${process.env.VUE_APP_API_BASE_URL}/api`;
var token_type = ''
var access_token = ''
if (store.state.account.user) {
    token_type = store.state.account.user.token_type
    access_token = store.state.account.user.access_token 
}

const instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
        "Content-type": "application/json",
        'Authorization' : token_type  + ' ' + access_token
    },
});
export default instance;