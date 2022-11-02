import axios from "axios";

const api = axios.create({
    baseURL: "https://apiprojetofrontend.herokuapp.com",
    timeout: 5000,
});

export default api;
