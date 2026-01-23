import React, { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function SendOtp() {
    const [mobile, setMobile] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const sendOtp = async () => {
        try {
            const res = await API.post("/api/auth/send-otp", { mobile });
            localStorage.setItem("mobile", mobile);
            
            setMsg(`OTP sent `);
            setTimeout(() => navigate("/verify-otp"), 700);
        } catch {
            setMsg("OTP sending failed");
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Login - Send OTP
                </Typography>

                <TextField sx={{ mt: 2 }} fullWidth label="Mobile Number" onChange={(e) => setMobile(e.target.value)} />

                <Button sx={{ mt: 2 }} variant="contained" onClick={sendOtp}>
                    Send OTP
                </Button>

                {msg && <Typography sx={{ mt: 2 }}>{msg}</Typography>}
            </Paper>
        </Container>
    );
}
