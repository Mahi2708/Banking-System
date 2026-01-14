import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
    const adminToken = localStorage.getItem("adminToken");
    return adminToken ? children : <Navigate to="/admin-login" />;
}
