import axios from "axios";

import authService from "./services/authService";

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
});

api.interceptors.request.use(
    async request => {
        request.headers = {
            'Authorization': `Bearer ${authService.getToken()}`
        }
        return request;
    },
    error => {
        Promise.reject(error)
    }
);

export default api;