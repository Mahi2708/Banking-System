import React, { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import API from "../services/api";

export default function Register() {
    const [form, setForm] = useState({ name: "", mobile: "", email: "", address: "" });
    const [msg, setMsg] = useState("");

    const submit = async () => {
        try {
            const res = await API.post("/api/candidate/register", form);
            setMsg(`Registered! Banking ID: ${res.data.bankingId}, Status: ${res.data.status}`);
        } catch (e) {
            setMsg(e?.response?.data?.message || "Registration failed");
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Candidate Registration
                </Typography>

                <TextField sx={{ mt: 2 }} fullWidth label="Name"
                           onChange={(e) => setForm({ ...form, name: e.target.value })} />

                <TextField sx={{ mt: 2 }} fullWidth label="Mobile"
                           onChange={(e) => setForm({ ...form, mobile: e.target.value })} />

                <TextField sx={{ mt: 2 }} fullWidth label="Email"
                           onChange={(e) => setForm({ ...form, email: e.target.value })} />

                <TextField sx={{ mt: 2 }} fullWidth label="Address"
                           onChange={(e) => setForm({ ...form, address: e.target.value })} />

                <Button sx={{ mt: 2 }} variant="contained" onClick={submit}>
                    Register
                </Button>

                {msg && <Typography sx={{ mt: 2 }}>{msg}</Typography>}
            </Paper>
        </Container>
    );
}
