import React, { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import API from "../services/api";

export default function Transfer() {
    const [fromBankingId, setFrom] = useState("");
    const [toBankingId, setTo] = useState("");
    const [amount, setAmount] = useState("");
    const [msg, setMsg] = useState("");

    const submit = async () => {
        try {
            const res = await API.post("/api/txn/transfer", {
                fromBankingId,
                toBankingId,
                amount: Number(amount),
            });
            setMsg(res.data.message);
        } catch (e) {
            setMsg(e?.response?.data?.message || "Transfer failed (403 possible)");
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    Transfer Money
                </Typography>

                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    label="From Banking ID"
                    onChange={(e) => setFrom(e.target.value)}
                />

                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    label="To Banking ID"
                    onChange={(e) => setTo(e.target.value)}
                />

                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    label="Amount"
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                />

                <Button sx={{ mt: 2 }} variant="contained" onClick={submit}>
                    Transfer
                </Button>

                {msg && (
                    <Typography sx={{ mt: 2, color: "green", fontWeight: 600 }}>
                        {msg}
                    </Typography>
                )}
            </Paper>
        </Container>
    );
}
