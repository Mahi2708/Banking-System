import React, { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
    const [otp, setOtp] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const verifyOtp = async () => {
        try {
            const mobile = localStorage.getItem("mobile");

            // ✅ res is defined here
            const res = await API.post("/api/auth/verify-otp", {
                mobile,
                otp,
            });

            // ✅ Save token
            localStorage.setItem("token", res.data.token);

            setMsg("Login success ✅");

            // ✅ Redirect to Profile page
            navigate("/profile");
        } catch (e) {
            setMsg("Invalid OTP ❌");
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Verify OTP
                </Typography>

                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    label="Enter OTP"
                    onChange={(e) => setOtp(e.target.value)}
                />

                <Button sx={{ mt: 2 }} fullWidth variant="contained" onClick={verifyOtp}>
                    Verify OTP
                </Button>

                {msg && <Typography sx={{ mt: 2 }}>{msg}</Typography>}
            </Paper>
        </Container>
    );
}
