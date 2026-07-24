import axios from "axios";

let API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});


export default API;