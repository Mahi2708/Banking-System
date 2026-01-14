import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080",
});

// token interceptor (candidate + admin)
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    const adminToken = localStorage.getItem("adminToken");

    if (req.url?.startsWith("/api/admin") && adminToken) {
        req.headers.Authorization = `Bearer ${adminToken}`;
    } else if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export default API;
