import React, { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        try {
            const res = await API.post("/api/admin/login", { mobile, password });
            localStorage.setItem("adminToken", res.data.token);
            setMsg("Admin login success ✅");
            setTimeout(() => navigate("/admin-dashboard"), 700);
        } catch (e) {
            setMsg("Admin login failed ❌");
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    Admin Login
                </Typography>

                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    label="Admin Mobile"
                    onChange={(e) => setMobile(e.target.value)}
                />

                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    type="password"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button sx={{ mt: 2 }} variant="contained" onClick={login}>
                    Login
                </Button>

                {msg && (
                    <Typography sx={{ mt: 2, fontWeight: 600, color: msg.includes("✅") ? "green" : "red" }}>
                        {msg}
                    </Typography>
                )}
            </Paper>
        </Container>
    );
}
